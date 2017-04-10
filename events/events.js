// EventEmitter支持多个事件监听器，最大值是10个；超过会给出告警，超过会可能会导致内存泄漏

var EventEmitter = require('events').EventEmitter

var lift = new EventEmitter()
// 当然这个最大值是配置的
lift.setMaxListeners(11)

function water (who) {
	console.log('给 ' + who + ' 倒水')
}
//on也可以用addEventListener取代
lift.on('求安慰', water)
lift.on('求安慰', function (who){
	console.log('给' + who + 'two')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'three')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'four')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'five')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'six')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'sween')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'eigth')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'nine')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'ten')
})
lift.on('求安慰', function (who){
	console.log('给' + who + 'Eleven')
})
// 时间没有事件时是不会触发监听函数的调用的
lift.on('求抱抱', function (who){
	console.log('给' + who + 'Twelve')
})

// 移除一个事件,第二个匿名函数是不行的，要用具名函数
// lift.removeListener('求安慰', function (who) {
// 	console.log('给' + who + 'one')
// })
lift.removeListener('求安慰', water)
// 批量移除监听器,不传参则会移除掉所有的监听事件；如果传参则仅删除该函数
lift.removeAllListeners('求安慰')

var hasConfortListener = lift.emit('求安慰','boy')
var hasLovedListener = lift.emit('求抱抱','girl')
var hasPlayedListener = lift.emit('求加工资','员工')

// 验证事件是否被监听过
console.log(hasConfortListener)
console.log(hasLovedListener)
console.log(hasPlayedListener)

// 获取某个事件被监听的数量，两种方法获取
console.log(lift.listeners('求安慰').length)
console.log(EventEmitter.listenerCount(lift, '求安慰'))


