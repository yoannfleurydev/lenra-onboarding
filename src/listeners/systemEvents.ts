import { Api, event, props } from "@lenra/app-server";
import { Counter } from "../classes/Counter.js";
import { Item } from "../classes/Item.js";

export async function onEnvStart(_props: props, _event: event, api: Api) {
  console.log("onEnvStart");
  let counters = await api.data.find(Counter, {
    user: "global",
  });

  if (counters.length == 0) {
    await api.data.createDoc(new Counter(0, "global"));
  }
}

export async function onUserFirstJoin(_props: props, _event: event, api: Api) {
  console.log("onUserFirstJoin");
  let counters = await api.data.find(Counter, {
    user: "@me",
  });

  if (counters.length == 0) {
    await api.data.createDoc(new Counter(0, "@me"));
  }

  let items = await api.data.find(Item, {
    user: "@me",
  });
  if (items.length == 0) {
    await api.data.createDoc(new Item("Onboarding Lenra", "@me"));
    await api.data.createDoc(new Item("Using Lenra", "@me"));
    await api.data.createDoc(new Item("Profit 💰", "@me"));
  }
}

export async function onSessionStart(_props: props, _event: event, api: Api) {}

export async function onSessionStop(_props: props, _event: event, api: Api) {}

export async function onUserLeave(_props: props, _event: event, api: Api) {}

export async function onEnvStop(_props: props, _event: event, api: Api) {}
