import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";

export default function FoodDescription({ item }) {
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginVertical: 10 }}
    >
      <View>
        <Image
          resizeMode="contain"
          source={{ uri: item.thumbnail_url }}
          style={{
            width: "100%",
            height: width,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            backgroundColor: "black",
            padding: 20,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 18,
              color: "#81c784",
            }}
          >
            {item.name}
          </Text>
          <View>
            <Text numberOfLines={3} style={{ marginTop: 7, color: "white" }}>
              {item.description}
            </Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text
              style={{
                color: "lightgreen",
                fontWeight: "bold",
              }}
            >
              instructions :
            </Text>
            <Text
              style={{
                color: "white",
                marginVertical: 3,
                fontWeight: "bold",
              }}
              numberOfLines={3}
            >
              * {item.instructions[0].display_text}
            </Text>

            <Text
              style={{
                color: "white",
                marginVertical: 5,
                fontWeight: "bold",
              }}
              numberOfLines={3}
            >
              * {item.instructions[1].display_text}
            </Text>

            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginVertical: 5,
              }}
              numberOfLines={3}
            >
              * {item.instructions[2].display_text}
            </Text>

            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginVertical: 5,
              }}
              numberOfLines={3}
            >
              * {item.instructions[3].display_text}
            </Text>

            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginVertical: 5,
              }}
              numberOfLines={3}
            >
              * {item.instructions[4].display_text}
            </Text>
          </View>

          <View>
            <View style={{}}>
              <Text
                style={{
                  color: "lightgreen",
                  fontWeight: "bold",
                }}
              >
                Youtube Link :
              </Text>
              <Text
                style={{
                  color: "white",
                  marginVertical: 5,
                }}
              >
                {item.original_video_url}
              </Text>
            </View>
            <View style={{}}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
