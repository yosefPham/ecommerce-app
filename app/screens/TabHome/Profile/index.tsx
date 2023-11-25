import * as React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import R from '../../../assets/R';
import { E_TYPE_INPUT } from '../../../types/emuns';
import { Header } from '../../../components/Headers/Header';
import ScreenName from '../../../navigation/screen-name';
import ItemInfo from './Item/ItemInfo';
import { getFont, HEIGHT, WIDTH } from '../../../configs/functions';
import ItemFunction from './Item/ItemFunction';

const listFunction = [
  {
    name: 'Đơn mua',
    iconName: 'reader-outline',
    color: R.colors.blue2A3478,
    screenNameMove: ScreenName.Order
  },
  {
    name: 'Trạng thái đơn mua',
    screenNameMove: ScreenName.Order
  },
  {
    name: 'Shop của bạn',
    iconName: 'briefcase-outline',
    color: R.colors.primary,
    screenNameMove: ScreenName.Shop
  },
  {
    name: 'Đã thích',
    iconName: 'heart-outline',
    color: R.colors.primary,
    screenNameMove: ScreenName.Shop
  },
  {
    name: 'Đánh giá của tôi',
    iconName: 'star-outline',
    color: R.colors.yellow800,
    screenNameMove: ScreenName.Reviews
  },
  {
    name: 'Thiết lập tài khoản',
    iconName: 'person-outline',
    color: R.colors.blue1B,
    screenNameMove: ScreenName.AccountSettings
  }
]

const listStatus = [
  {
    statusName: 'Chờ xác nhận',
    iconName: 'hourglass-outline',
  },
  {
    statusName: 'Chờ lấy hàng',
    iconName: 'file-tray-full-outline',
  },
  {
    statusName: 'Chờ giao hàng',
    iconName: 'bicycle',
  },
  {
    statusName: 'Đánh giá',
    iconName: 'star-outline',
  }
]

const Profile = ({navigation}: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%' }}>
      <Header
        headerText={undefined} 
        style={{borderBottomWidth: WIDTH(0)}}
        isFocusInput={true}
        isIconCart={true}
        isIconMessage={true}
        isSearch={false}
      />
      <ItemInfo/>
      <FlatList
        style={{width: '100%'}}
        data={listFunction}
        extraData={listFunction}
        renderItem={({item, index}) => {
          if (item?.iconName) {
            return <ItemFunction item={item} onPress={() => navigation.navigate(item?.screenNameMove)}/>
          }
          return <ItemOrderStatus onPress={() => navigation.navigate(item?.screenNameMove)}/>
        }}
      />
      
    </View>
  );
}

export default Profile

const ItemOrderStatus = ({onPress}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      {listStatus?.map((item, index) => {
        return (
          <View style={{alignItems: 'center'}}>
            {index === 3 ? 
            <View style={styles.iconStar}>
              <Icon name={item?.iconName} size={15} color={R.colors.black50p}/>
            </View> : 
            <Icon name={item?.iconName} size={25} color={R.colors.black50p}/>}
            <Text style={styles.title}>{item?.statusName}</Text>
          </View>
        )
      })}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEIGHT(80),
    borderBottomWidth: WIDTH(0.5),
    borderColor: R.colors.borderD,
    paddingHorizontal: WIDTH(15),
  },
  title: {
    fontSize: getFont(11),
    marginTop: HEIGHT(10),
    color: R.colors.black50p
  },
  iconStar: {
    width: WIDTH(22),
    height: HEIGHT(22),
    borderColor: R.colors.black50p,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: WIDTH(0.5),
    borderRadius: WIDTH(40),
    marginBottom: HEIGHT(2)
  }
})