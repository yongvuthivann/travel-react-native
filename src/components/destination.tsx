import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { destinationData } from "../constants";
import DestinationCard from "./card/destination-card";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Destination() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => (
        <DestinationCard navigation={navigation} item={item} key={index} />
      ))}
    </View>
  );
}
