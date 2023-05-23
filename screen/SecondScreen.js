import { ScrollView, View } from "react-native";
import React from "react";
import secondarray from "./utils/secondarray";
import FoodDescription from "../components/FoodDescription";

const TopNavigation = () => {
  const data = secondarray;
  return (
    <View>
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
      style={{ padding: 10, backgroundColor: "#f9fbe7", marginTop: 30 }}
    >
      <TopNavigation />
    </ScrollView>
  );
}
