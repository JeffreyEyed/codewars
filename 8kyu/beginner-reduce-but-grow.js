// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



function grow(x){
    if (x.length === 0){
      return 1
    }
  return x[0] * grow(x.slice(1))
}

//or

function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }

  //or

  const grow=x=> x.reduce((a,b) => a*b);

  //or

  const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };