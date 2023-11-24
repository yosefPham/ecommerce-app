import React from "react"
import { createNativeStackNavigator  } from "@react-navigation/native-stack"

import Home from "../screens/Home"
import TabMain from "../screens/TabHome"
import Search from "../screens/Search"

export type PrimaryParamList = {
    Home: undefined,
    Profile: undefined,
    TabMain: undefined,
    Search: undefined
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

            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
  }
const exitRoutes = ["TabHome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)