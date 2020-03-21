module.exports = function toReadable (num) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    num = num.toString();

    if(+num === 0){
        return 'zero';
    }

    if(num < 20){
        return ones[num];
    }

    if(num.length == 2 && num >= 20){
        if(+num[1] === 0){
            return tens[num[0]];
        }

        return tens[num[0]] + ' ' + ones[num[1]];
    }

    if(num.length == 3 && num >=100){
        if(num.substring(1,3) >= 10 && num.substring(1,3) < 20){
            return ones[num[0]] + ' hundred ' + ones[num.substring(1,3)];
        }
        if(+num[1] === 0 && +num[2] === 0){
            return ones[num[0]] + ' hundred';
        }

        if(+num[2] === 0){
            return ones[num[0]] + ' hundred ' + tens[num[1]];
        }

        if(+num[1] === 0){
            return ones[num[0]] + ' hundred ' + tens[num[1]] + ones[num[2]];
        }

        return ones[num[0]] + ' hundred ' + tens[num[1]] + ' ' + ones[num[2]];
    }
}
