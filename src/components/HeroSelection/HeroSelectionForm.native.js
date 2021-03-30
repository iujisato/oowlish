import React, { PureComponent, Fragment } from 'react';

import { get, isEmpty } from '../../helpers/functionHelper';

import Styled from './HeroSelectionForm.styles';

class HeroSelectionForm extends PureComponent {
  renderAutoCompleteItem = ({ item }) => {
    const { onItemPress, formikProps } = this.props;

    return (
      <Styled.TouchableOpacity onPress={() => onItemPress(item, formikProps)}>
        <Styled.ItemLabel>
          {item.name}
        </Styled.ItemLabel>
      </Styled.TouchableOpacity>
    );
  };

  renderCharacterDetails = (values) => {
    if (isEmpty(values.characterData)) {
      return null;
    }

    const thumbnail = get(values, 'characterData.thumbnail', {})
    const uri = `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://');
    const description = get(values, 'characterData.description');

    return (
      <Styled.CharacterDescriptionContainer>
        { isEmpty(thumbnail) ? null : <Styled.Image source={{ uri }} /> }
        { description ? <Styled.Text>{description}</Styled.Text> : null }
      </Styled.CharacterDescriptionContainer>
    );
  };

  render() {
    const { formikProps, onChangeText, hideList, charactersData  } = this.props;
    const { handleChange, handleBlur, values, handleSubmit } = formikProps;

    return (
      <Fragment>
        <Styled.ContentContainer>
          <Styled.Title>Choose your favorite Marvel character!</Styled.Title>
          <Styled.AutoComplete
            onChangeText={(characterName) => onChangeText(characterName, formikProps)}
            onBlur={handleBlur('characterName')}
            value={values.characterName}
            data={charactersData}
            renderItem={(item) => this.renderAutoCompleteItem(item)}
            placeholder='Enter your favorite character name!'
            keyExtractor={(item) => item.id}
            hideResults={hideList}
            renderTextInput={(props) => (<Styled.TextInput {...props} />)}
          />

          { this.renderCharacterDetails(values) }
        </Styled.ContentContainer>

        <Styled.Button onPress={handleSubmit} title="Next" />
      </Fragment>
    )
  }
}

export default HeroSelectionForm;
