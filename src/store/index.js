import { observable, useStrict, action, runInAction } from 'mobx'

useStrict(false)

export class Shared {
  @observable test = 'test'
}