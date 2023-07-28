import { randomUUID } from "crypto";

export class User {
  private _id: string;

  constructor(private _name: string, private _username: string, private _email: string, private _password: string) {
    this._id = randomUUID()
  }

  sendTweet() {}

  follow(user: User) {}

  showFeed() {}

  showTweets() {}
}