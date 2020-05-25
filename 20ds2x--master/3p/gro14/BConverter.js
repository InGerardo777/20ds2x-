function baseConverter(decNumber, base){
 var remStack = new Stack(),
 rem,
 baseString = '',
 digits = '0123456789ABCDEF'; 

 while (decNumber > 0){    //checnado los numeros 
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
     decNumber = Math.floor(decNumber / base);

 }
 while (!remStack.isEmpty()){   //comprobante 
    baseString += digits[remStack.pop()];
 }
 return baseString;
}
console.log(baseConverter(100345, 1));
console.log(baseConverter(100345, 5));
console.log(baseConverter(100345, 9));
