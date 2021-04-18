import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteScreen extends React.Component{
  render(){
    return(
      <View>
        <SafeAreaProvider>
          <Header
            centerComponent={{text:'Story Hub',style:{fontSize:30}}}
          />
        </SafeAreaProvider>

        <Text>Parva</Text>
      </View>
    )
  }
}
