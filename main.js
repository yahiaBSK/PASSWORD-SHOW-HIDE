
var input = document.querySelector("#pass")
var submit = document.querySelector("#submit")
var passIcon = document.querySelector("#pass-icon")
var passShow = document.querySelector("#pass-show")
var passHide = document.querySelector("#pass-hide")

//      ON CLICK INPUT    ==>

input.addEventListener('mouseenter', function () {
  passIcon.style.color = "grey"
  input.style.boxShadow = "0 0 0 1.5px grey"
})

//      ON LEAVE INPUT    ==>

input.addEventListener('mouseleave', function () {
  if (input.value.length == 0) {
    
    passIcon.style.color = "rgba(0, 0, 0, 0.30)"
    input.style.boxShadow = "0 0 0 1.5px rgba(0, 0, 0, 0.30)"
    passHide.style.visibility = "hidden"
    passShow.style.visibility = "hidden"
    input.type = "password"
  }else{
    passIcon.style.color = "grey"
    input.style.boxShadow = "0 0 0 1.5px grey"
  }
})

//      ON INPUT     ==>

input.addEventListener('input',function(){
  if (input.value.length > 0) {
    if (input.type == "password") {
      passShow.style.opacity = "1"
      passShow.style.visibility = "visible"
      passHide.style.visibility = "hidden"
    }else{
      passShow.style.opacity = "0"
      passShow.style.visibility = "hidden"
      passHide.style.visibility = "visible"
    }
  }else{
    passShow.style.opacity = "0"
    passShow.style.visibility = "hidden"
    passHide.style.opacity = "0"
    input.type = "password"
}})

//     ON CLICK SHOW-PASS     ==>

passShow.addEventListener('click',function(){
  input.type = "text"
  passShow.style.opacity = "0"
  passHide.style.visibility = "visible"
  passHide.style.opacity = "1"
})

//     ON CLICK HIDE-PASS     ==>

passHide.addEventListener('click',function(){
  input.type = "password"
  passShow.style.opacity = "1"
  passShow.style.visibility = "visible"
  passHide.style.opacity = "0";
  passHide.style.visibility = "hidden"
})