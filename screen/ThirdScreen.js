import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ThirdScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#eeeeee",
        padding: 30,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Settings
        </Text>
      </View>
      <View
        style={{
          marginTop: 70,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
            }}
          >
            About us
          </Text>
        </View>
      </View>
    </View>
  );
}
