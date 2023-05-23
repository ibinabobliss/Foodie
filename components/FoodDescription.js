import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function FoodDescription({ item }) {
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
            width: "100%",
            height: width,
            borderRadius: 35,
          }}
        />
      </View>

      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 19,
          alignItems: "center",
        }}
      >
        {item.description}
      </Text>

      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 10,
            color: "tomato",
          }}
        >
          Video-url:
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontWeight: "bold",
            alignItems: "center",
            color: "lightgreen",
          }}
        >
          {item.video_url}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginTop: 9,
            color: "tomato",
            fontWeight: "bold",
          }}
        >
          Total-Time :
        </Text>
        <Text style={{ marginHorizontal: 8, marginTop: 9 }}>
          {" "}
          {item.total_time_minutes} Mins
        </Text>
      </View>
    </View>
  );
}
