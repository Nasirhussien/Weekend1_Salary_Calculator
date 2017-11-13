var totalMonthlySalary = 0

$( document ).ready(function() {
    $( document ).ready(function() {
        console.log( "ready!" );
    }); 
    $('#inputs').append('<button id="sumbitButton">Submit!!</button>')
    $('#sumbitButton').on('click', function (){
        var firstNameInput = $('#employeeFirstName').val()
        var lastNameInput = $('#employeeLastName').val()
        var employeeNumber = $('#employeeNumber').val()
        var employeeTitle = $('#employeeTitle').val()
        var employeeSalary = $('#employeeSalary').val()
        var monthlySalary = ($('#employeeSalary').val() / 12)
        $('#resultBox').append ( '<p>' +' First Name: '+ firstNameInput  + '  Last Name:  ' + lastNameInput + '   Employee Number: ' + employeeNumber + '  Employee Title: ' + employeeTitle + ' $ ' + employeeSalary + '</p>' )
        totalMonthlySalary = Number(totalMonthlySalary + monthlySalary)
        // $('#monthlySalary').append(totalMonthlySalary)
        $('#monthlySalary').text('Monthly Salary: $' + totalMonthlySalary);
    })
})
