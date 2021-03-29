import React, { PureComponent, Fragment } from 'react';
import { Text, Button, TextInput, ImageBackground } from 'react-native';
import { Formik } from 'formik';

class HeroSelectionForm extends PureComponent {
  renderFormContent = (props) => {
    const { handleChange, handleBlur, values, handleSubmit } = props;

    return (
      <Fragment>
        <Text>FORM TEST</Text>
        <TextInput
          onChangeText={handleChange('characterName')}
          onBlur={handleBlur('characterName')}
          value={values.characterName}
          style={{ backgroundColor: 'white', width: "100%", height: 20 }}
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
