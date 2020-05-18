function isPalindrome(word) {
 var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
      s.push(word[i]);
     }
 var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
 if (word == rword) {
    return true;
 }
 else {
   return false;
    }
   }
   var word = "hello";
   if (isPalindrome(word)) {
    console.log(word + " es un palindrome.");
   }
   else {
    console.log(word + " no es un palindrome.");
   }
   word = "racecar"
   if (isPalindrome(word)) {
    console.log(word + " es un palindrome.");
   }
   else {
    console.log(word + " no es un palindrome.");
   }
