import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function Fooditems({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 15,
        }}
      >
        <Image
          source={{ uri: item.thumbnail_url }}
          style={{
            overflow: "hidden",
            width: width,
            height: width,
            borderRadius: 35,
          }}
        />
      </View>
    </View>
  );
}
