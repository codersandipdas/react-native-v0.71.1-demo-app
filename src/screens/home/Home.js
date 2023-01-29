import React from 'react';
import {Text, View, StatusBar, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        animated={true}
        translucent={false}
      />
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
