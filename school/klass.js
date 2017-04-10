var student = require('./student')
var teacher = require('./teacher')

// teacher.add('Scott')

function add (teacherName,students) {
   teacher.add(teacherName)

   students.forEach(function (item,index){
   	 student.add(item)
   })
}
// 传统的模块实例；是module.exports的一个辅助方法；挂载属性和方法
exports.add = add
// 特殊的模块类型；真实存在的东西；最终返回的给调用者
// module.exports = add