import React, { PureComponent } from 'react';
import { Formik } from 'formik';

import { debounce, isEmpty } from '../../helpers/functionHelper';
import { getCharacters } from '../../services/MarvelApiService';

import HeroSelectionForm from './HeroSelectionForm.native';

class HeroSelectionFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      hideList: false,
    };
    this.setCharactersName = debounce(this.setCharactersName, 750);
  }

  setCharactersName = async (characterName) => {
    if (isEmpty(characterName)) {
      return;
    }

    try {
      const response = await getCharacters(characterName);

      this.setState({
        charactersData: response.data.results.map((result) => ({
          id: result.id,
          name: result.name,
          description: result.description,
          thumbnail: result.thumbnail,
          comics: result.comics.available,
        })),
      });
    } catch (error) {
      this.setState({ charactersData: [] });
    }
  };

  onItemPress = (item, formikProps) => {
    const { setFieldValue } = formikProps;

    setFieldValue('characterName', item.name);
    setFieldValue('characterData', item);
    this.setState({ hideList: true });
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

  onSubmit = (values) => {
    const { navigation } = this.props;

    this.handleSelection(values);
    navigation.navigate('ComicsList');
  }

  render() {
    const { hideList, charactersData } = this.state;

    return (
      <Formik
        initialValues={{ characterName: '', characterData: {} }}
        onSubmit={this.onSubmit}
      >
        {(formikProps) => (
          <HeroSelectionForm
            formikProps={formikProps}
            hideList={hideList}
            onChangeText={this.onChangeText}
            charactersData={charactersData}
            onItemPress={this.onItemPress}
          />
        )}
      </Formik>
    );
  }
}

export default HeroSelectionFormContainer;
