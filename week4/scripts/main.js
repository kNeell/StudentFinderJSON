

$('#getStudentsButton').click(function(){

	$.getJSON("data/students.json",function(students){
		//console.log(students);
		students.forEach(function(s){
			$('.studentArea').append('<div class="student"><h2>' + s.firstName + " " + s.lastName +'</h2><ul><li>GPA: ' + s.gpa + '</li></ul><ul><li>AGE: ' + s.age + '</li></ul></div>');
		});
	});
});

$('#getPassingStudentsButton').click(function(){

	$.getJSON("data/students.json",function(students){

		var filteredPStudents = students.filter(function){
			return gpa >=2.0;
		}
		filteredPStudents.forEach(function(p){
			$('.studentArea').append('<div class="student"><h2>' + p.firstName + " " + p.lastName +'</h2><ul><li>GPA: ' + p.gpa + '</li></ul><ul><li>AGE: ' + p.age + '</li></ul></div>');
		})

	});
});

$('#getFailingStudentsButton').click(function(){

	$.getJSON("data/students.json",function(students){	

		var filteredFStudents = students.filter(function){
			return gpa < 2.0;
		}
		filteredFStudents.forEach(function(f){
			$('.studentArea').append('<div class="student"><h2>' + f.firstName + " " + f.lastName +'</h2><ul><li>GPA: ' + f.gpa + '</li></ul><ul><li>AGE: ' + f.age + '</li></ul></div>');
		})
	});
});

$('#getAdultStudentsButton').click(function(){

	$.getJSON("data/students.json",function(students){

		var filteredAStudents = students.filter(function){
			return age >= 18;
		}
		filteredAStudents.forEach(function(p){
			$('.studentArea').append('<div class="student"><h2>' + a.firstName + " " + a.lastName +'</h2><ul><li>GPA: ' + a.gpa + '</li></ul><ul><li>AGE: ' + a.age + '</li></ul></div>');
		})
	});
});



$('#clearStudentsButton').click(function(){
	$('.studentArea').html('');
});