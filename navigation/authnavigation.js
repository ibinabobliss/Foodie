import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/FirstScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screen/Welcome";
import SecondScreen from "../screen/SecondScreen";
import ThirdScreen from "../screen/ThirdScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#bdbdbd",
          tabBarInactiveBackgroundColor: "#eeeeee",
        }}
        style={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginTop: 10,
                  backgroundColor: focused ? "#bdbdbd" : "white",
                  borderColor: focused ? "#bdbdbd" : "white",
                  borderWidth: 5,
                  //tintColor: focused ? "tomato" : "white",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/cuttelery.jpg")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginTop: 10,
                  backgroundColor: focused ? "#bdbdbd" : "white",
                  borderColor: focused ? "#bdbdbd" : "white",
                  borderWidth: 5,
                  //tintColor: focused ? "tomato" : "white",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/setting.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginTop: 10,
                  backgroundColor: focused ? "#bdbdbd" : "white",
                  borderColor: focused ? "#bdbdbd" : "white",
                  borderWidth: 5,
                  //tintColor: focused ? "tomato" : "white",
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Main"
          component={MainNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
