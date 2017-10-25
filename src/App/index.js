import React, { PureComponent }from 'react'
import { render } from 'react-dom'
import { Provider, observer,inject } from 'mobx-react'
import { observable, computed, action, runInAction ,extendObservable} from 'mobx'

import State from './state.js'
@inject("shared","colors")
@observer
export default class extends PureComponent {
	@observable price = 10;
	@observable amount = 1;
	constructor() {
	    super()
	    this.obState = new State()
	    extendObservable(this, {
            price1: 20,
            amount1: 2,
            get total() {
            	console.log("get"+this.price * this.amount)
                return this.price * this.amount
            },
            // also valid:
            total: computed(function() {
                return this.price1 * this.amount1
            })
        })
	}
	@computed get total1() {
        return this.price * this.amount*100;
    }
	componentDidMount(){
		let _this = this;
		console.log("this.total1="+this.total1)
		setTimeout(function(){
			_this.obState.brokerinfoObj.name="xiaohang"
		},1000)
		setTimeout(function(){
			_this.obState.B="B"
		},3000)
		setTimeout(function(){
			_this.obState.length=10
		},3000)
		setTimeout(function(){
			_this.props.colors.foreground="#asdf"
		},2000)
		setTimeout(function(){
			_this.price1=30
		},2000)
		setTimeout(function(){
			_this.price=30
		},2000)
	}
	render (){
		return (
			<div>
				<div>价格{this.obState.brokerinfo}</div>
				<div>BB:{this.obState.B}</div>
				<div>姓名{this.obState.brokerinfoObj.name}</div>
				<div>price:{this.price}/{this.price1}</div>
				<div>amount:{this.amount}/{this.amount1}</div>
				<div>total:{this.total}</div>
				<div>total1:{this.total1}</div>
				<div>total11:{this.obState.total11}</div>

			</div>
			)
	}
}