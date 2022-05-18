var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'饮料'
			},
			{
				id:2,
				name:'水果'
			},
			{
				id:3,
				name:'粉类'
			},
			
		],
		dishesList:[
			[
				{
					name:"珍珠奶茶",
					price:10,
					num:1,
					id:1
				},
				{
					name:"冰乳玉麒麟",
					price:15,
					num:1,
					id:29
				},
				{
					name:"茉莉奶绿",
					price:12,
					num:1,
					id:2
				}
			],
			[
				{
					name:"苹果",
					price:5,
					num:5,
					id:3
				},
				{
					name:"香蕉",
					price:2,
					num:20,
					id:4
				}
			],
			[
				{
					name:"葱油拌面",
					price:18,
					num:1,
					id:5
				},
				{
					name:"腊肠爆炒牛河",
					price:20,
					num:1,
					id:6
				}
			],
			
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})