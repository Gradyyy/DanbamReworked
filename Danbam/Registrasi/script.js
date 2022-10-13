var form = document.forms["registerForm"]
var username = form["username"]
var password = form["password"]
var email = form["email"]
var gender = form["gender"]
var tos = form["tos"]
var dob = form["dob"]
var city = form["city"]

// if(location.search !=""){
    
//     var search = location.search.slice(1)
//     if(search.slice(0,4)=="err="){
//         var code =search.slice(4)
//         if(code==1){
//             document.getElementById("err-msg")
//         }
//     }
// }

form.addEventListener("submit",function(e){
    
    var error = false
    //username min 6 characters
    if(username.value.length <6){
        alert("Username must be atleast 6 characters")
        error=true
    }
    //passwor min 6-12 characters 
    if((password.value.length <6 || password.value.length >12)&& error==false){
        alert("Password must be between 6 to 12 characters")
        error = true
    }
    if(checkEmail(email.value)==false && error==false){
        alert("Email is invalid")
        error = true
    }
    if(gender.value == "" && error==false){
        alert("Gender must be chosen")
        error = true
    }
    if(city.value == "" && error==false){
        alert("City must be chosen")
        error = true
    }
    if(checkDob(dob.valueAsNumber)==false && error==false){
        alert("You must be 18 years old to register, Please try again")
        error = true
    }
    
    if(tos.checked == false && error==false){
        alert("You must agree with the TOS")
    }
    if(error == true) e.preventDefault()
})

function checkDob(dob){

    if(isNaN(dob)) return false
    //1. Tidak boleh waktu kedepan
    var minDate = new Date()
    minDate.setFullYear(minDate.getFullYear()-18)
    if(Dob-minDate.getTime()>0)return false

    return true
}
function checkEmail(email){
    //endswith @gmail.com / @yahoo.com
    if(!(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com")))
    return false

    //cuma boleh ada 1 @
    if(email.indexOf("@")!= email.lastindexOf("@"))
    return false
    // gaboleh ada . di sebelah@ (gaboleh a.@gmail.com)

    if(email[email.indexOf("@")-1] ==".")
    return false

    return true
}
// console.log(form)