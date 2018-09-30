module.exports = function getZerosCount(number) {

  let zeros = 0;
  
  for (let i = 5; i <= number; i *= 5) {
    zeros += Math.trunc(number / i); 
  }
    
  return zeros;
}