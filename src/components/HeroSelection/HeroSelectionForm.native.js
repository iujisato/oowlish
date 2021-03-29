import React, { PureComponent, Fragment } from 'react';
import { TouchableOpacity, Text, Button, TextInput, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import AutoComplete from 'react-native-autocomplete-input';

import { debounce } from '../../helpers/functionHelper';
import { getCharacters } from '../../services/MarvelApiService';

class HeroSelectionForm extends PureComponent {
 constructor(props) {
    super(props);
    this.state = {
      charactersName: [],
      hideList: false,
    }
    this.setCharactersName = debounce(this.setCharactersName, 1000);
  }

  setCharactersName = async (characterName) => {
    if (characterName === '') {
      return;
    }

    try {
      const response = await getCharacters(characterName);

      this.setState({
        charactersName: response.data.results.map(result => result.name)
      });
    } catch (error) {
      this.setState({ charactersName: [] });
    }
  };

  renderAutoCompleteItem = ({ item }, formikProps) => {
    const { setFieldValue } = formikProps;

    return (
      <TouchableOpacity onPress={() => {
        setFieldValue('characterName', item);
        this.setState({ hideList: true });
      }}>
        <Text>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  onChangeText = (characterName, formikProps) => {
    const { setFieldValue } = formikProps;

    setFieldValue('characterName', characterName);
    this.setState({ hideList: false });
    this.setCharactersName(characterName);
  };

  renderFormContent = (formikProps) => {
    const { charactersName, hideList } = this.state;
    const { handleChange, handleBlur, values, handleSubmit } = formikProps;

    return (
      <Fragment>
        <Text>FORM TEST</Text>
        <AutoComplete
          onChangeText={(characterName) => this.onChangeText(characterName, formikProps)}
          onBlur={handleBlur('characterName')}
          value={values.characterName}
          style={{ backgroundColor: 'white', width: "100%", height: 20 }}
          data={charactersName}
          renderItem={(item) => this.renderAutoCompleteItem(item, formikProps)}
          placeholder='character name'
          keyExtractor={(item) => item}
          style={{ width: 300, height: 40 }}
          hideResults={hideList}
        />

        <Button onPress={handleSubmit} title="Submit" />
      </Fragment>
    )
  };

  render() {
    return (
      <Formik
        initialValues={{ characterName: '' }}
        onSubmit={values => console.log(values)}
      >
        { this.renderFormContent }
      </Formik>
    );
  }
}

export default HeroSelectionForm;
