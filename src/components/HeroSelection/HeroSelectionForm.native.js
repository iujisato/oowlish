import React, { PureComponent, Fragment } from 'react';
import { TouchableOpacity, Text, Button, TextInput, ImageBackground } from 'react-native';
import { Formik } from 'formik';

import { debounce, get, isEmpty } from '../../helpers/functionHelper';
import { getCharacters } from '../../services/MarvelApiService';

import Styled from './HeroSelectionForm.styles';

class HeroSelectionForm extends PureComponent {
 constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      hideList: false,
    }
    this.setCharactersName = debounce(this.setCharactersName, 1000);
  }

  setCharactersName = async (characterName) => {
    if (isEmpty(characterName)) {
      return;
    }

    try {
      const response = await getCharacters(characterName);

      this.setState({
        charactersData: response.data.results.map(result => ({
          id: result.id,
          name: result.name,
          description: result.description,
          thumbnail: result.thumbnail,
        })),
      });
    } catch (error) {
      this.setState({ charactersData: [] });
    }
  };

  renderAutoCompleteItem = ({ item }, formikProps) => {
    const { setFieldValue } = formikProps;

    return (
      <TouchableOpacity onPress={() => {
        setFieldValue('characterName', item.name);
        setFieldValue('characterData', item);
        this.setState({ hideList: true });
      }}>
        <Text>
          {item.name}
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

  handleSelection = (values) => {
    const { appStateContext } = this.props;

    appStateContext.setCharacterData(values.characterData);
  };

  renderCharacterDetails = (values) => {
    if (isEmpty(values.characterData)) {
      return null;
    }

    const thumbnail = get(values, 'characterData.thumbnail', {})
    const uri = `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://');
    const description = get(values, 'characterData.description');
    console.log('description', description)

    return (
      <Styled.CharacterDescriptionContainer>
        { isEmpty(thumbnail) ? null : <Styled.Image source={{ uri }} /> }
        { description ? <Styled.Text>{description}</Styled.Text> : null }
      </Styled.CharacterDescriptionContainer>
    );
  };

  renderFormContent = (formikProps) => {
    const { charactersData, hideList } = this.state;
    const { handleChange, handleBlur, values, handleSubmit } = formikProps;

    return (
      <Fragment>
        <Styled.ContentContainer>
          <Styled.Title>Choose your favorite Marvel character!</Styled.Title>
          <Styled.AutoComplete
            onChangeText={(characterName) => this.onChangeText(characterName, formikProps)}
            onBlur={handleBlur('characterName')}
            value={values.characterName}
            data={charactersData}
            renderItem={(item) => this.renderAutoCompleteItem(item, formikProps)}
            placeholder='Enter your favorite character name!'
            keyExtractor={(item) => item.id}
            hideResults={hideList}
            renderTextInput={(props) => (<Styled.TextInput {...props} />)}
          />

          { this.renderCharacterDetails(values) }
        </Styled.ContentContainer>

        <Styled.Button onPress={handleSubmit} title="Continue" />
      </Fragment>
    )
  };

  render() {
    return (
      <Formik
        initialValues={{ characterName: '', characterData: {} }}
        onSubmit={this.onSubmit}
      >
        { this.renderFormContent }
      </Formik>
    );
  }
}

export default HeroSelectionForm;
