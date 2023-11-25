import * as React from 'react';
import { View, Text, Button, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../../../assets/R';
import { Header } from '../../../components/Headers/Header';
import ItemProduct from '../../../components/Item/ItemProduct';
import { formatCurrency, getFont, getWidth, HEIGHT, WIDTH } from '../../../configs/functions';
import ScreenName from '../../../navigation/screen-name';

import styles from './styles';

const data = [1, 2, 1, 1, 1, 1]
const Home = ({ navigation }: any) => {
  const getNextTimeFrame = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const timeFrames = [2, 11, 14, 17, 20, 24];
    const nextTimeFrame = timeFrames.find(frame => frame > currentHour) || timeFrames[0];

    return nextTimeFrame;
  };

  const [targetHour, setTargetHour] = React.useState(getNextTimeFrame());
  const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentTime: any = new Date();
    const targetTime: any = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), targetHour, 0, 0, 0);
    const timeRemaining = Math.max(0, Math.floor((targetTime - currentTime) / 1000));
    return timeRemaining;
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => {
        const newTimeRemaining = Math.max(0, prevTimeRemaining - 1);

        if (newTimeRemaining === 0) {
          setTargetHour(getNextTimeFrame());
          return calculateTimeRemaining();
        }

        return newTimeRemaining;
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [targetHour]);
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: HEIGHT(100) }}>
      <Header 
        headerText={undefined} 
        isBack={false} 
        isIconCart={true} 
        isIconMessage={true}
        onPressInputSearch={() => navigation.navigate(ScreenName.Search)}
      />
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={
            <>
              <TouchableOpacity activeOpacity={0.7} style={styles.gap}>
                <Text style={[styles.title, {fontWeight: '900'}]}>F<Icon name='flash' size={20} style={styles.flashIcon}/>ASH 
                  <Text style={{fontWeight: '500'}}> SALE </Text>{" "}
                  <Text style={styles.countdown}> {hours < 10 ? `0${hours}`: hours} </Text>{" : "}
                  <Text style={styles.countdown}> {minutes < 10 ? `0${minutes}`: minutes} </Text>{" : "}
                  <Text style={styles.countdown}> {seconds < 10 ? `0${seconds}`: seconds} </Text>
                </Text>
                <View style={styles.viewMore}>
                  <Text style={{fontSize: getFont(16), color: R.colors.gray6}}>Xem tất cả</Text>
                  <Icon name='chevron-forward-sharp' size={20} color={R.colors.gray6}/>
                </View>
              </TouchableOpacity>
              <FlatList
                data={data}
                horizontal={true}
                extraData={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }: any) => {
                  return (
                    <ItemShop item={item ?? {}} isFlashSale={true}/>
                  )
                }}
                // ListEmptyComponent={loading ? <LoadingComponent isLoading={true}/> : <ItemTrong content={translate("TRONG")} customStyle={R.themes.empty} />}
                ListFooterComponent={
                  <TouchableOpacity style={styles.viewAll}>
                    <Icon name='chevron-forward-circle-outline' size={30} color={R.colors.primary}/>
                    <Text style={{color: R.colors.primary}}>Xem tất cả</Text>
                  </TouchableOpacity>
                }
                onEndReachedThreshold={0.1}
                // onEndReached={getMoreDataStudent}
                maxToRenderPerBatch={6}
                initialNumToRender={6}
                style={styles.list}
                // onMomentumScrollBegin={() => {
                //   beginScroll.current = true
                // }}
                showsHorizontalScrollIndicator={false}
              />
              <TouchableOpacity activeOpacity={0.7} style={styles.gap}>
                <Text style={styles.title}>SHOP GẦN BẠN</Text>
                <View style={styles.viewMore}>
                  <Text style={{fontSize: getFont(16), color: R.colors.gray6}}>Xem thêm</Text>
                  <Icon name='chevron-forward-sharp' size={20} color={R.colors.gray6}/>
                </View>
              </TouchableOpacity>
              <FlatList
                data={data}
                horizontal={true}
                extraData={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }: any) => {
                  return (
                    <ItemShop item={item ?? {}}/>
                  )
                }}
                // ListEmptyComponent={loading ? <LoadingComponent isLoading={true}/> : <ItemTrong content={translate("TRONG")} customStyle={R.themes.empty} />}
                ListFooterComponent={
                  <TouchableOpacity style={styles.viewAll}>
                    <Icon name='chevron-forward-circle-outline' size={30} color={R.colors.primary}/>
                    <Text style={{color: R.colors.primary}}>Xem thêm</Text>
                  </TouchableOpacity>  
                }
                onEndReachedThreshold={0.1}
                // onEndReached={getMoreDataStudent}
                maxToRenderPerBatch={6}
                initialNumToRender={6}
                style={styles.list}
                // onMomentumScrollBegin={() => {
                //   beginScroll.current = true
                // }}
                showsHorizontalScrollIndicator={false}
              />
              <View style={styles.gap}>
                <Text style={styles.title}>GỢI Ý HÔM NAY</Text>
              </View>
            </>
          }
          extraData={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: any) => {
            return (
              <ItemProduct item={item ?? {}}/>
            )
          }}
          numColumns={getWidth() >= 300 ? 2 : 1}
          // ListEmptyComponent={loading ? <LoadingComponent isLoading={true}/> : <ItemTrong content={translate("TRONG")} customStyle={R.themes.empty} />}
          // ListFooterComponent={loadMore && <LoadMore />}
          onEndReachedThreshold={0.1}
          // onEndReached={getMoreDataStudent}
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          style={styles.list}
          columnWrapperStyle={getWidth() >= 300 ? styles.columnWrapperStyle : undefined}
          // ListFooterComponent={
          //   <View style={styles.gap}>
          //     <Text style={styles.title}>GỢI Ý HÔM NAY</Text>
          //   </View>
          // }
          // onMomentumScrollBegin={() => {
          //   beginScroll.current = true
          // }}
        />
      </View>
    </View>
  );
}

export default Home
type Props = {
  item: any
  isFlashSale?: boolean
}
const ItemShop = ({ item, isFlashSale }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: !isFlashSale ? "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljrwvuvg4v5g3f" : "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loe2hc9geb5fe1"}}
          style={styles.image}
        />
      </View>
      {isFlashSale ? (
      <View style={styles.containerFlashSale}>
        <Text style={{color: R.colors.primary, fontSize: getFont(18), fontWeight: '700'}}>{formatCurrency(item?.price ?? 250000) ?? "đ250.000"}</Text>
        <View style={styles.quantitySold}>
          <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
            <View style={{backgroundColor: R.colors.primary, width: '30%'}}>
              <Text> {" "}</Text>
            </View>
            <View style={{backgroundColor: R.colors.borderC, width: '70%'}}>
              <Text> {" "}</Text>
            </View>
          </View>
          <Text style={{color: R.colors.white, fontSize: getFont(13), fontWeight: '700', lineHeight: HEIGHT(20)}}>ĐÃ BÁN {item?.quatitySold ?? 15}</Text>
        </View>
      </View>
      ) : (
      <View style={{marginHorizontal: WIDTH(0), marginVertical: HEIGHT(10), width: "100%"}}>
        <Text 
          style={{fontSize: getFont(14), marginLeft: WIDTH(5)}}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {item?.shopName ?? "Macco Beauty"}
        </Text>
        <View style={styles.footer}>
          <Text style={{color: R.colors.gray6B, fontSize: getFont(14), marginLeft: WIDTH(5)}}>{item?.address ?? "Hà Nội"}</Text>
          <Text style={{color: R.colors.primary, fontSize: getFont(14), marginRight: WIDTH(5)}}>
            <Icon name='location-outline' size={14}/>{" "}
            {item?.distance ?? 970} m
          </Text>
        </View>
      </View>
      )}
    </TouchableOpacity>
  )
}