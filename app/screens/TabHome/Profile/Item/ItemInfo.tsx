import * as React from 'react';
import { View, Text, Button } from 'react-native';
import R from './../../../../assets/R';
import { Header } from './../../../../components/Headers/Header';

const Profile = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header
        headerText={undefined} 
        style={{borderColor: R.colors.white}}
        isFocusInput={true}
        isIconCart={true}
        isIconMessage={true}
        isSearch={false}
      />
      <Text>Profile Screensss</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate(ScreenName.Home)}
      />
    </View>
  );
}

export default Profile