import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { navigate } from '../../navigation/navigation-service';
import ScreenName from '../../navigation/screen-name';

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate(ScreenName.TabMain)}
      />
    </View>
  );
}

export default Home