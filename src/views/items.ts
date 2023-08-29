import { Flex, Text, Component, IComponent } from "@lenra/components";
import { Item } from "../classes/Item.js";

export default function (items: Item[]): Component<IComponent> | IComponent {
  return Flex([Text("plop")])
    .spacing(16)
    .mainAxisAlignment("spaceEvenly")
    .crossAxisAlignment("center");
}
