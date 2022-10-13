const form=document.getElementById("ContactUs")



function vali(e){
    const formData = new FormData(form)
    const names = formData.get('nm')
    const email = formData.get('eml')
    const gender = formData.get('gndr')
    const location = formData.get('loc')
    const tos = formData.get('to')
    const message = formData.get('msg')
    let error = []

    function checkEmail(email){
        //endswith @gmail.com / @yahoo.com
        if(!(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com"))){
            return false
        }
        return true
    }
    function checkEmail2(email){
        if(email[email.indexOf("@")-1] =="."){
            return false
        }
        return true
    }
    function NameStartsWithCapital(names){
 
    if (names[0] >= 'A' && names[0] <= 'Z'){
        return true
    }
        
    else{
        return false
    }
        
    }
    if(!names){
        error.push("Please type in your name in the box bellow")
    }

    if(names.length <5 && names.length>0){
        error.push("Name must be atleast 5 characters")
    }
    if(NameStartsWithCapital(names)==false && names){
        error.push("Name at least start with capital letters")
    }
    if(!email){
        error.push("Please type in your E-Mail in the box bellow")
    }

    if(checkEmail(email)==false && email){
        error.push("Email is invalid. [Must use a Gmail or Yahoo Email Account]")
    }

    if(checkEmail(email)==true && checkEmail2(email)==false && email){
        error.push("Email is invalid. [There is a '.' digit in the email before @]")
    }
    
    if(!gender){
        error.push("Gender must be chosen")
    }

    if(!location){
        error.push("A location must be chosen")
    }

    if(!tos){
        error.push("You must agree with the TOS")
    }
    if(!message){
        error.push("Please type in your message in the box bellow!")
    }
    if(message.length <10 || message.length >300){
        error.push("Your Message must be around 10 to 300 characters")
    }

    if(error.length > 0){
        alert(error.join("\n"))
        e.preventDefault()
    }else{
        if(!confirm("Are you sure?")){
            e.preventDefault()
        }
        else {
            alert("Thank you for your message. We will reply to you immediately")
        }
    }
}

form.addEventListener('submit',vali)

