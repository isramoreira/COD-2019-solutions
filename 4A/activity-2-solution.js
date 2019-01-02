var integersToNumbers = {
  1: 'one', 
  2: 'two', 
  3: 'three', 
  4: 'four', 
  5: 'five',
  6: 'six', 
  7: 'seven', 
  8: 'eight', 
  9: 'nine', 
  10: 'ten'
}

function loopAndPrintNumbers(arrayOfIntegers) {
  //Your Code Goes Here
  arrayOfIntegers.forEach(function(integer) {
    //declare a variable to store what will be printed/console logged
    var integerPrintedForm; 
    
    //if-else block: if number is in the range of 1-10, find the English representation in integersToNumbers, else just print the number as is. Store value either way to integerPrintedForm
    if (integersToNumbers[integer]) { //alternatively: if (integer <= 10 && integer > 0)
      integerPrintedForm = integersToNumbers[integer];
    } else {
      integerPrintedForm = integer;
    }
    
    //log value of integerPrintedForm
    console.log(integerPrintedForm)
  });
}

