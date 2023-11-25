import { Header } from "./../../components/Headers/Header";
import React from "react";
import { Text, View } from "react-native";

const Order = () => {
    return (
        <View>
            <Header
                isBack={true}
                isSearch={false}
                headerText={'Đơn mua'}
            />
            <Text>Screen Order</Text>
        </View>
    )
}

export default Order