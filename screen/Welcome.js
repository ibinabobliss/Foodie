import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

function FirstNavigator() {
  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      <Text
        style={{
          color: "tomato",
          fontSize: 46,
          fontWeight: "bold",
        }}
      >
        Enjoy
      </Text>
      <Text
        style={{
          color: "tomato",
          fontSize: 47,
          fontWeight: "bold",
        }}
      >
        Cooking
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "300",
          marginTop: 10,
          fontSize: 21,
        }}
      >
        Get free access to hundreds of delicious and detailed restaurant meals
        and recipes from the comfort of your home
      </Text>
    </View>
  );
}

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/wallpaper.jpg")}
      style={{
        flex: 1,
        padding: 30,
      }}
    >
      <FirstNavigator />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={{
            backgroundColor: "tomato",
            fontWeight: "bold",
            marginTop: 75,
            padding: 10,
            paddingHorizontal: 60,
            borderRadius: 13,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
