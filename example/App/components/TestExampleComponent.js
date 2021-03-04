import React from 'react';
import { View } from 'react-native';
import { TestComponent } from 'fintree-name-component';

const TestExampleComponent = (props) => {
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <TestComponent onPress={props.onPress} text={props.text}/>
    </View>
  )
}

export default TestExampleComponent;