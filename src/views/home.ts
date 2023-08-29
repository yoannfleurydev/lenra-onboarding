import { data, DataApi, props } from "@lenra/app-server";
import { Component, Flex, IComponent, View } from "@lenra/components";
import { views } from "../index.gen.js";
import { Item } from "../classes/Item.js";

export default function (
  _data: data,
  _props: props
): Component<IComponent> | IComponent {
  return Flex([
    View(views.items).data(DataApi.collectionName(Item), {
      user: "@me",
    }),
  ])
    .direction("horizontal")
    .spacing(16)
    .mainAxisAlignment("spaceEvenly")
    .crossAxisAlignment("center");
}
