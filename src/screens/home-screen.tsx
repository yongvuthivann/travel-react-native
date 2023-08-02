import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Categories, Destinaiton, SortCategory } from "../components";

const ios = Platform.OS === "ios";
const marginTop = ios ? "mt-3" : "mt-10";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`space-y-6 ${marginTop}`}
      >
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ width: wp(12), height: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon color="gray" size={20} strokeWidth={3} />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* sort category */}
        <View className="mb-4">
          <SortCategory />
        </View>

        {/* destinations */}
        <View className="mb-4">
          <Destinaiton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
