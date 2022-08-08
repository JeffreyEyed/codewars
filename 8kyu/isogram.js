// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }


  //or


  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }


  //or answer I found 


function isIsogram(str){
	//if empty return true.
if (str.isEmpty) {
return true;
} else {
// All lower case.
str = str.toLowerCase();
}
//split string into individual characters.
var array = str.split('');
var sortedArr = array.slice().sort();
for (var i = 0; i < array.length; i++) {
//if duplicate is found return false.
if (sortedArr[i + 1] == sortedArr[i]) {
return false;
}
}
//else return true
return true;
}