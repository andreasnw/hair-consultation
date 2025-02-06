import { StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import { useHairCare } from "@/src/context/HairCareContext";
import Item from "./Item";
import { useQuery } from "@apollo/client";
import { GET_DOCTORS } from "@/src/graphql/booking";

const RENDER_ITEM = 5;

const List = () => {
  const { data } = useQuery(GET_DOCTORS);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item}
      maxToRenderPerBatch={RENDER_ITEM}
      initialNumToRender={RENDER_ITEM}
      windowSize={RENDER_ITEM * 2 + 1}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
