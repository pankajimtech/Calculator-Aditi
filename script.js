var x = document.getElementById("xinput");
var y = document.getElementById("yinput");
var addbutton = document.getElementById("addbutton");
var subtractbutton = document.getElementById("subtractbutton");
var multiplybutton = document.getElementById("multiplybutton");
var dividebutton = document.getElementById("dividebutton")
var result = document.getElementById("result")

// adding click event on the sum buttion
addbutton.addEventListener("click",function(){
  var sum = Number(x.value) + Number(y.value)
  result.textContent = "Answer = " + sum
})


// subtract click event on the sub buttion
subtractbutton.addEventListener("click",function(){
  var sub = Number(x.value) - Number(y.value)
  result.textContent = "Answer = " + sub
})


// multiply click event on the mul buttion
multiplybutton.addEventListener("click",function(){
  var mul = Number(x.value) * Number(y.value)
  result.textContent = "Answer = " + mul
})


// divide click event on the div buttion
dividebutton.addEventListener("click",function(){
  var div = Number(x.value) / Number(y.value)
  result.textContent = "Answer = " + div
})

