import { Header } from "../../components/Headers/Header";
import React from "react";
import { Text, View } from "react-native";

const AccountSettings = () => {
    return (
        <View>
            <Header
                isBack={true}
                isSearch={false}
                headerText={'Thiết lập tài khoản'}
            />
            <Text>Screen AccountSettings</Text>
        </View>
    )
}

export default AccountSettings