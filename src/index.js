module.exports = function toReadable(number) {
    let numbersTo19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let numbersTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundred = 'hundred'
    let numberStr = String(number);
    // to 9
	if (numberStr.length == 1) {
        return numbersTo19[number];
    }
    // 10 to 19
    else if (numberStr.length == 2 && numberStr <= 19) {
		 return numbersTo19[numberStr];
    }
    // 10, 20, 30...
    else if (numberStr.length == 2 && numberStr[1] == 0) {
		 return numbersTen[numberStr[0]];
    }
    // 21 to 99 without 10,20,30...
    else if (numberStr.length == 2 && numberStr[1] !== 0) {
		 return `${numbersTen[numberStr[0]]} ${numbersTo19[numberStr[1]]}`
    }
    // 100, 200, 300...
     else if (numberStr.length == 3 && numberStr[1] == 0 && numberStr[2] == 0) {
			return `${numbersTo19[numberStr[0]]} ${hundred}`
    }
    // 101 to 109
    else if (numberStr.length == 3 && numberStr[1] == 0) {
		 return `${numbersTo19[numberStr[0]]} ${hundred} ${numbersTo19[numberStr[2]]}`
	} 
    // 111 to 119
    else if (numberStr.length == 3 && numberStr[1] == 1) {
		 return `${numbersTo19[numberStr[0]]} ${hundred} ${numbersTo19[parseInt(numberStr[2]) + 10]}`;
    }
    // 110, 120, 130...
    else if (numberStr.length == 3 && numberStr[2] == 0) {
		 return `${numbersTo19[numberStr[0]]} ${hundred} ${numbersTen[numberStr[1]]}`
    }
    // 121 to 999 without 110, 120, 130...
    else {
	  return `${numbersTo19[numberStr[0]]} ${hundred} ${numbersTen[numberStr[1]]} ${numbersTo19[numberStr[2]]}`
  }
}
