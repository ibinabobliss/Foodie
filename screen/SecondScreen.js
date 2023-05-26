import { ScrollView, View } from "react-native";
import React from "react";
import FoodDescription from "../components/FoodDescription";
import UseEfffect from "./utils/thirdaeeay";

const TopNavigation = () => {
  const data = UseEfffect;

  //const { isLoading, error, data } = UseFetch();
  console.log(data);
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      {data.map((item, index) => {
        return <FoodDescription item={item} key={index} />;
      })}
    </View>
  );
};

export default function SecondScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: 10,
        backgroundColor: "#f9fbe7",
        flex: 1,
      }}
    >
      <TopNavigation />
    </ScrollView>
  );
}
