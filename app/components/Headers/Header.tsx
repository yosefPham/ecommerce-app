import React, {useEffect, useState, useRef} from "react"
import { View, ViewStyle, TextStyle, Text, Button, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons"

import { HeaderProps } from "./Headers.Props"
// import { spacing } from "@theme"
// import { translate } from "../../i18n"
import { getFont, HEIGHT, WIDTH } from "../../configs/functions"
import R from "../../assets/R"
import SearchBar from "../Item/SearchBar"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: WIDTH(4),
  alignItems: "center",
  // paddingTop: HEIGHT(5),
  // paddingBottom: HEIGHT(5),
  // justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 0 }
const NO_SEARCH: ViewStyle = {justifyContent: 'flex-end', paddingRight: WIDTH(15)}
const BG_COLOR: ViewStyle = {backgroundColor: R.colors.primary}
const HEADER_TEXT: ViewStyle = {backgroundColor: R.colors.white, justifyContent: 'flex-start', paddingLeft: WIDTH(10)}
export function Header(props: HeaderProps) {
  const {
    onBack,
    onMessagePress,
    onCartPress,
    numberCart,
    numberMessage,
    headerText,
    headerTx,
    style,
    titleStyle,
    searchText,
    isBack,
    isIconCart,
    isIconMessage,
    isIconFilter,
    onPressInputSearch,
    typeInput,
    isFocusInput,
    isSearch
  } = props
  const navigation = useNavigation();
  return (
    <View style={[
      styles.container, 
      isSearch === false && {...NO_SEARCH, ...BG_COLOR}, 
      !!headerText && HEADER_TEXT, 
      { ...ROOT, ...style}]
    }>
      {isBack && 
        <TouchableOpacity onPress={() => onBack ? onBack() : navigation.goBack() }>
          <Icon name={"arrow-back-outline"} size={WIDTH(25)} color={R.colors.primary} />
        </TouchableOpacity>
      }
      {headerText && <Text style={styles.headerText}>{headerText}</Text>}
      {isSearch !== false && <SearchBar isFocusInput={isFocusInput} value={searchText ?? ""} onPressInputSearch={onPressInputSearch} type={typeInput}/>}
      {isIconCart ? (
        <TouchableOpacity style={styles.iconRight} onPress={onCartPress}>
          <Icon name={"cart-outline"} size={WIDTH(25)} color={isSearch === false ? R.colors.white : R.colors.primary} />
          <View style={[styles.quatity, isSearch === false && { borderColor: R.colors.white, borderWidth: 1 }]}><Text style={{color: R.colors.white, fontSize: getFont(12)}}>{numberCart ?? 25}</Text></View>
        </TouchableOpacity>
      ) : (
        <View style={RIGHT} />
      )}
      {isIconMessage ? (
        <TouchableOpacity style={styles.iconRight} onPress={onMessagePress}>
          <Icon name={"chatbubble-ellipses-outline"} size={WIDTH(25)} color={isSearch === false ? R.colors.white : R.colors.primary} />
          <View style={[styles.quatity, isSearch === false && { borderColor: R.colors.white, borderWidth: 1 }]}><Text style={{color: R.colors.white, fontSize: getFont(12)}}>{numberCart ?? 3}</Text></View>
        </TouchableOpacity>
      ) : (
        <View style={RIGHT} />
      )}
      {isIconFilter && (
        <TouchableOpacity style={styles.iconFilter} onPress={onMessagePress}>
          <Icon name={"filter-sharp"} size={WIDTH(25)} color={R.colors.primary} />
          <Text style={{color: R.colors.primary, fontSize: getFont(14), marginLeft: WIDTH(5)}}>Lọc</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: "100%",
    height: HEIGHT(100),
    borderBottomWidth: WIDTH(0.5),
    borderBottomColor: R.colors.borderD,
    // padding: WIDTH(20),
    paddingTop: HEIGHT(30)
  },
  iconRight: {
    marginLeft: WIDTH(10)
  },
  quatity: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -8,
    right: -5,
    width: WIDTH(18),
    height: HEIGHT(18),
    borderRadius: WIDTH(18),
    backgroundColor: R.colors.primary,
  },
  iconFilter: {
    flexDirection: "row",
    marginLeft: WIDTH(10),
    alignItems: "center",
  },
  headerText: {
    fontSize: getFont(20),
    marginLeft: WIDTH(5)
  }
})
