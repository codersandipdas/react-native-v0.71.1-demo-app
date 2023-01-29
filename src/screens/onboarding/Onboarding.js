import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        animated={true}
        translucent={true}
      />
      <Text>Onboarding</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('tabNav')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Onboarding;
