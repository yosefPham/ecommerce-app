import { Header } from "../../../components/Headers/Header";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
    return (
        <View>
            <Header
                isBack={true}
                isSearch={false}
                headerText={'Đăng nhập'}
            />
            <Text>Screen Login</Text>
        </View>
    )
}

export default Login