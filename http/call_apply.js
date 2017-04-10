// 申明环境字面量
var pet = {
 word: '...',
 speak: function (say) {
 	console.log(say + ' ' + this.words)
 }
}

var dog = {
	words: 'Wang'
}
// 通过call改变了执行上下文，将pet.speak指向了dog
// call将执行的对象（第一个参数），作为执行的上下文
pet.speak.call(dog,'Speak')