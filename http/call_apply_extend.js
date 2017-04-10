var pet = {
 word: '...',
 speak: function (say) {
 	console.log(say + ' ' + this.words)
 }
}

function Dog(words){
	//把Pet里的this指向到当前的dog，同时dog也拥有了pet当前的方法
	Pet.call(this,words)
	// Pet.apply(this, arguments)
}

var dog = new Dog('Wang')
dog.speak()