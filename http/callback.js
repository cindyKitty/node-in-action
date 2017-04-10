// function learn (something) {
//  console.log(something)
// }
// function we(callback, something) {
// 	something += ' is cool'
// 	callback(something)
// }
// //具名函数
// we(learn,'Node.js')
// //匿名函数
// we(function (something) {
//    console.log(something)
// },'Jade')

// //this练习
// // 这里的this指向的是pet对象
// var pet = {
//   word: '...',
//   speak: function () {
//   	console.log(this.word)
//   	console.log(this === pet)
//   }
// }
// pet.speak()
// // 这里的this指向的是global
//  function pet(words) {
//   this.words = words
//   console.log(this.words)
//   console.log(this === global)
// }
// pet('...')

//这里的this指向的是cat这个实例对象
function Pet(words) {
	this.words = words
	this.speak = function () {
		console.log(this.words)
		console.log(this)
	}
}
var cat = new Pet('miao')
cat.speak()