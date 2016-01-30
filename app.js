	$(document).ready(function() {
		var empArray = [];

		var totalAnnualSalaries = 0;
		var monthlySalaries = 0;

		$('#employeeForm').on('submit', function(event) {
			event.preventDefault();
		 	
		 	//function to loop over values in array and store into our object values 
		 	var values = {};
		 	$.each($('#employeeForm').serializeArray(), function(i, field) {
	 	 		values[field.name] = field.value;
		 	});
		 	totalAnnualSalaries += parseInt(values['empSalary']);
	      	monthlySalaries = totalAnnualSalaries / 12;

		 	$('#employeeForm').find('input[type=text]').val('');
		 	$('#employeeForm').find('input[type=number]').val('');
		 	appendDom(values);
		 	appendTotal(monthlySalaries);
	 	});


		// function that appends input to dom.
		 function appendDom(empInfo) {
		 	$('#container').append('<div></div>');
		 	var $el = $('#container').children().last();

		 	$el.append('<p>' + empInfo.empFirstName + ' ' + empInfo.empLastName + ' ('+ empInfo.empIDNumber + ') ' + empInfo.empJobTitle + ' $' + empInfo.empSalary + '/year</p>');
		 	
		 }
		 function appendTotal(newMonthly) {
		 	$('#monthly').prop('disabled', false);
		 	$('#monthly').val(newMonthly);
		 	$('#monthly').prop('disabled', true);
		 }

	//console.log((empArray());

	});