var klass = require('./klass')

klass.add('teacher_one', ['student1','student2'])

exports.add = function (klasses) {
	klasses.forEach(function (item,index) {
		var _klass = item
		var teacherName = item.teacherName
		var students = item.students

		klass.add(teacherName, students)
	})
	
}