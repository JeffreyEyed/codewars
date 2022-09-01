// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }

//or


const removeExclamationMarks = s => s.replace(/!/g, '')