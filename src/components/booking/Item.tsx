import React from "react";
import { ThemedText } from "../common/ThemedText";

type ItemProps = {
  item: string;
};

const Item = ({ item }: ItemProps) => <ThemedText>{item}</ThemedText>;

export default Item;
