import R from '../../assets/R';
import { getFont, HEIGHT, WIDTH } from '../../configs/functions';
import { E_TYPE_BUTTON } from '../../types/emuns';
import React from 'react';
import { Button, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    title: string
    onPress: any
    customStyle?: ViewStyle
    disabled?: boolean
    sizeIcon?: number
    icon: string
    colorIcon?: string
    type: string
    customTitle?: ViewStyle
}
const OUTLINE: ViewStyle = {backgroundColor: R.colors.white, borderColor: R.colors.primary, borderRadius: WIDTH(2), borderWidth: WIDTH(0.5)}
const PRIMARY: ViewStyle = {backgroundColor: R.colors.primary, borderRadius: WIDTH(2)}
const HEADER_TEXT: ViewStyle = {backgroundColor: R.colors.white, justifyContent: 'flex-start', paddingLeft: WIDTH(10)}
const ButtonText = (props: Props) => {
    const { title, onPress, customStyle, disabled, sizeIcon, icon, colorIcon, type, customTitle} = props
    const color = type === E_TYPE_BUTTON.OUTLINE ? R.colors.primary : R.colors.white
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, customStyle, type === E_TYPE_BUTTON.OUTLINE ? OUTLINE : PRIMARY]} disabled={disabled}>
            <Icon size={sizeIcon ? WIDTH(sizeIcon) : WIDTH(20)} name={icon} color={disabled ? R.colors.grey500 : colorIcon} />
            <Text style={[styles.text, {color: color}, customTitle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonText

const styles = StyleSheet.create({
    container: {
        width: WIDTH(80),
        height: HEIGHT(30),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: R.colors.white,
        fontSize: getFont(14),
    }

})