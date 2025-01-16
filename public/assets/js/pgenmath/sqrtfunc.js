// Problem Templates for SQUARE ROOT FUNCTIONS

function halfParabolaProp1() {
  // a*sqrt(x-h)+k
  const fNameArr = ['f', 'g', 'h']
  var fName = fNameArr[Math.random() * fNameArr.length]
  var a = Math.random() * 20 - 10
  var h = Math.random() * 20 - 10
  var k = Math.random() * 20 - 10
  var qn = `State the vertex of \\(${fNameArr}(x)=${a}\\sqrt{x+${h}}+${k}\\). Enter your answer in the form (a,b) without spaces.`
  var ans = `\\((${-h},${k})\\)`
  return [qn, ans]
}