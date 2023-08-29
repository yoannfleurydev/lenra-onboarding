import { Data } from "@lenra/app-server";

export class Item extends Data {
  title: string;
  user: string;

  constructor(title: string, user: string) {
    super();
    this.title = title;
    this.user = user;
  }
}
