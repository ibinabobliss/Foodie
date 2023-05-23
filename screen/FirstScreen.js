import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState } from "react";
import Fooditems from "../components/Fooditems";
import SecondScreen from "./utils/secondarray";

function TopNavigation() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text
          style={{
            color: "#ff6e40",
            fontSize: 24,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Welcome{" "}
        </Text>
      </View>
      <Image
        source={require("../assets/19.jpg")}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    </View>
  );
}

function SecondNavigation() {
  const [search, setSearch] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 34, fontWeight: "500", color: "black" }}>
        What do you want to cook today?
      </Text>
      <TextInput
        value={search}
        onChangeText={(item) => setSearch(item)}
        placeholder="what are your looking for "
        style={{
          color: "black",
          marginTop: 26,
          backgroundColor: "#eeeeee",
          width: "100%",
          padding: 13,
          borderRadius: 20,
        }}
      />
    </View>
  );
}

function ThirdNavigation() {
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={["Italian", "French", "Mexican"]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ marginHorizontal: 15 }} key={item}>
              <Text
                style={{
                  backgroundColor: "#bdbdbd",
                  padding: 15,
                  color: "#757575",
                  borderRadius: 20,
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

function ForthNavigation() {
  return (
    <View
      style={{
        marginTop: 27,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 22, color: "#263238", fontWeight: "bold" }}>
        Popular Meals
      </Text>
      <Text style={{ color: "#757575", marginTop: 8 }}>View all</Text>
    </View>
  );
}

function FifthNavigation() {
  // const { isLoading, error, data } = UseFetch();
  //console.log(error);
  //console.log(isLoading);
  // const error = null;
  const data = SecondScreen;
  const isLoading = false;
  const error = null;
  return (
    <ScrollView
      style={{ marginTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {isLoading ? (
        <ActivityIndicator
          size={"large"}
          style={{ alignItems: "center", justifyContent: "center" }}
        />
      ) : error ? (
        alert("there is an error ")
      ) : (
        data.map((item, index) => {
          return <Fooditems item={item} key={index} />;
        })
      )}
      {/*
     <View>
     <FlatList
       data={data}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) => {
         return (
           <View>
             <Text>hello</Text>
           </View>
         );
       }}
     />
   </View>
    */}
    </ScrollView>
  );
}
export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: 20,
        marginTop: 30,
        flex: 1,
        backgroundColor: "#f9fbe7",
      }}
    >
      <TopNavigation />
      <SecondNavigation />
      <ThirdNavigation />
      <ForthNavigation />
      <FifthNavigation />
    </ScrollView>
  );
}
