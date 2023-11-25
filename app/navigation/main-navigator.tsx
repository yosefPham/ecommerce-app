import React from "react"
import { createNativeStackNavigator  } from "@react-navigation/native-stack"

import TabMain from "../screens/TabHome"
import Login from "../screens/Auth/Login"

import Search from "../screens/Search"
import AccountSettings from "../screens/AccountSettings"
import Order from "../screens/Order"
import Reviews from "../screens/Reviews"
import Shop from "../screens/Shop"

export type PrimaryParamList = {
    Login: undefined,
    Home: undefined,
    Profile: undefined,
    TabMain: undefined,
    Search: undefined,
    AccountSettings: undefined,
    Order: undefined,
    Reviews: undefined,
    Shop: undefined,
}

const Stack = createNativeStackNavigator<PrimaryParamList>()
export function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade'
            }}
            initialRouteName="TabMain"
        >
            <Stack.Screen name="TabMain" component={TabMain} />
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="AccountSettings" component={AccountSettings} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>
    )
  }
const exitRoutes = ["TabHome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)