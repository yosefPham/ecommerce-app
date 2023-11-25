import { Header } from "../../components/Headers/Header";
import React from "react";
import { Text, View } from "react-native";

const Shop = () => {
    return (
        <View>
            <Header
                isBack={true}
                isSearch={false}
                headerText={'Shop của tôi'}
            />
            <Text>Screen Shop</Text>
        </View>
    )
}

export default Shop