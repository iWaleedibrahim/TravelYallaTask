import React from "react"
import { Image } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import COLORS from "../common/colors"
import {
  Home,
  Movies,
  Category
} from "../screens"
import IMAGES from "../common/images"

const MainStack = createStackNavigator()

export const navigationRef = React.createRef()

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName={"Category"}
      tabBarOptions={{
        activeTintColor: COLORS.FULL_WHITE,
        inactiveTintColor: COLORS.TRAVELYALLA_BLUE,
        style: {
          backgroundColor: COLORS.TRAVELYALLA_GREEN,
          height: 70,
        }
      }}>
         <MainStack.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gavel" color={color} size={30} />
          ),
        }}
      />
      <MainStack.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gavel" color={color} size={30} />
          ),
        }}
      />
        <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gavel" color={color} size={30} />
          ),
        }}
      />
    </MainStack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

