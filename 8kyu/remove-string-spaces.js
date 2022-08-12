// Simple, remove the spaces from the string, then return the resultant string.


const noSpace = x => x.replace(/ /g, "")  ////////using regex

//or


function noSpace(x){
    return x.replace(/ /g, "")  /////also with regex
}

//or

function noSpace(x){
    return x.split(' ').join('')
}