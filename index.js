// Your code here


function createEmployeeRecord(array) {
    
    return  { 
    
        firstName: array[0],
        familyName: array[1],
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: [],

}

    
}

   function createEmployeeRecords(arrayOfEmployeeRecords){ 
       return (arrayOfEmployeeRecords.map(employee => {

            return createEmployeeRecord(employee);


            
        }))
   }

   function createTimeInEvent(employeeRecordsObj, dateStamp) {
    
    let [date, hour] = dateStamp.split(" ")
    employeeRecordsObj.timeInEvents.push({
        type: "TimeIn",
        hour:  parseInt(hour, 10),
        date: date
    })
        return employeeRecordsObj;
   }

   function createTimeOutEvent(employeeRecordObj, dateStamp) {

    let [date, hour] = dateStamp.split(" ");
    employeeRecordObj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return employeeRecordObj;
   }


    function hoursWorkedOnDate(employeeRecordObj, dateStamp) {
        let timeIn = employeeRecordObj.timeInEvents.find(obj => obj.date === dateStamp)
            
            

            console.log(timeIn);
        

        let timeOut = employeeRecordObj.timeOutEvents.find(obj => obj.date === dateStamp)
            
        console.log(timeOut);

        return parseInt((timeOut.hour - timeIn.hour)/100)
            }

    
    function wagesEarnedOnDate(employeeRecordObj, dateStamp) { // function wagesEarnedOnDate, has acess to the employee record
        // obj, and also has dateStamp passed in as argument
             let payRate = employeeRecordObj.payPerHour
             // payRate is a vairiable that is equal to the pay perhour key of employeeRecordObj
             console.log(hoursWorkedOnDate(employeeRecordObj,dateStamp) * payRate)
           return  parseFloat(hoursWorkedOnDate(employeeRecordObj,dateStamp) * payRate);
             
           // this returns the wages earned on a specific date, by passing in the function hoursWorkedonDate, which calculates the amount of hours that the employee has worked
           // by passing in a date stamp and a record object of the employee, getting a result, and multiplying that result by the 
           // payRate. 
            }

            console.log(wagesEarnedOnDate);
            //

    
    function allWagesFor(employeeRecordObj) {
            let arrayOfDates = employeeRecordObj.timeInEvents.map(dayRecord => dayRecord.date);
                // initializes a variable, called arrayofdates, and sets it equal to an Array of dates, 
                // by selection the timeInEvents object, within the employeeRecord object, and using the mapMethod
                // to create a new array, populated by taking ... dayRecord to loop through the timeInEvents object 
                // and create a copy of the values inside the date key, and returns them into the arrayofDates vairiable that
                // I declared.
           console.log(arrayOfDates);
             let totalWages = arrayOfDates.reduce((total, day) => { console.log(total)
                        // totalWages is a sum of all the wages an employee accumulated, by 
                        // using the .reduce() method on the arrayOfDates array, and 
                    // setting total as accumulator, and day as the placeholder that is doing the looping
                    // then we retun return the previousValue, + the initial value.... 
                    // but previous value can be added onto, which in this case, we took our 
                // total vairiable and added the function ... wagesEarnedonDate, and passed in the 
                // employee record obj, and also instead of a date stamp. we pass in the day.... which is 
            // the placeholder that is looping through the arrayofDates array. 
                    return total + wagesEarnedOnDate(employeeRecordObj, day)
                }, 0);
                // lastly we just set the initial value to 0, and placed it as second paramater in the reduce()
                // method... can be declared as vairiable and added to previous variable, or done this way.

           return totalWages;
    }
    
    function calculatePayroll(arrayOfEmployeeRecords) { 
        // we want Calculate payroll to return sum of pay owed to all emplooyees for all dates, as a number.


        //we are going to use wagesEarnedOnDate function, to accumulate the values of all the dates worked 
        // by the employee in the record, used as context. 

        let everyonesWages = arrayOfEmployeeRecords.reduce((total, employee) => {return total + allWagesFor(employee)}, 0);
           
            console.log(arrayOfEmployeeRecords);
          return everyonesWages;  
    }
 
        
// map or for each

       
    