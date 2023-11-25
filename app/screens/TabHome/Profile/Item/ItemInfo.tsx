import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { getFont, HEIGHT, WIDTH } from './../../../../configs/functions';
import R from './../../../../assets/R';
import ButtonText from '../../../../components/Button/ButtonText';
import { E_TYPE_BUTTON } from './../../../../types/emuns';
import ScreenName from '../../../../navigation/screen-name';

type Props = {
  item?: any,
}
const ItemInfo = ({item}: Props) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, !item && { justifyContent: 'space-between', paddingBottom: HEIGHT(10)}]}>
      {item ? (
        <>
          <View style={styles.containerImage} >
            <Image 
              style={styles.image} 
              source={{uri: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/393225306_870668844679400_6087620360341588603_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBHpsPGAHWhhmah1sjB53eQ4xbJZOJlTFDjFslk4mVMdxoFVpjfhnQwkXeKgQSRiztg1weocL0Qc6IlbUP_Uj7&_nc_ohc=M3q2n3zBBr0AX-CB_m3&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAP6oYOmtnOk4uGgsDZLjuqcuGX4kbzJd8TqmmGDm8A6g&oe=65662F5F"}}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.username}>{item?.username ?? 'mainazir203'}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.follow}>Người theo dõi {item?.followers ?? 0}</Text>
              <Text style={styles.follow}>Đang theo dõi {item?.followings ?? 0}</Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.icon} >
            <Icon name='person' color={R.colors.primary} size={25}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ButtonText title='Đăng ký' onPress={() => navigation.navigate(ScreenName.Login)} type={E_TYPE_BUTTON.PRIMARY} icon={''} customStyle={{borderColor: R.colors.white, borderWidth: WIDTH(0.5), marginRight: WIDTH(5)}}/>
            <ButtonText title='Đăng nhập' onPress={() => navigation.navigate(ScreenName.Login)} type={E_TYPE_BUTTON.OUTLINE} icon={''}/>
          </View>
        </>
      )}
    </View>
  );
}

export default ItemInfo

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: R.colors.primary,
    marginTop: HEIGHT(100),
    paddingHorizontal: WIDTH(20),
    paddingBottom: HEIGHT(6),
    marginBottom: HEIGHT(10)
  },
  containerImage: {
    width: WIDTH(60),
    height: HEIGHT(60),
    borderRadius: WIDTH(30),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Kiểu co dãn ảnh
  },
  info: {
    marginHorizontal: HEIGHT(10),
  },
  username: {
    color: R.colors.white,
    fontWeight: '600',
    fontSize: getFont(20)
  },
  follow: {
    color: R.colors.white,
    marginRight: WIDTH(10),
  },
  icon: {
    width: WIDTH(30),
    height: HEIGHT(30),
    borderRadius: WIDTH(30),
    overflow: 'hidden',
    backgroundColor: R.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})