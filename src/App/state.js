import { observable, computed, action, runInAction } from 'mobx'
import fetch from "../common/fetch.js"
export default class App {
  @observable brokerinfo = 'brokerinfo1'
  @observable length = 2;
  @observable amount = 2;
  @observable squared = "";
  @observable B = "b";
  @observable brokerinfoObj = {
    name:'gaorui',
    age:20
  }
  @computed get total11() {
      return this.length * this.amount+33;
  }
}