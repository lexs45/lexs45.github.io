
const inputusrname = document.getElementById("usrname")
const inputpass = document.getElementById("pass")
const inputRep_pass = document.getElementById("Rep_pass")
const inputemail = document.getElementById("email")
const inputage = document.getElementById("Age")
const buttonRegister= document.getElementById("button")
const divError = document.getElementById("divError")
const inputcheck = document.getElementById("checkBox")
const asynchronous = document.getElementById("asynchronous")
// localStorage.setItem('User Name', inputusrname)
// localStorage.setItem('Password', inputpass)
// localStorage.setItem('Konfirm_Password', inputRep_pass)
// localStorage.setItem('Email', inputemail)
// localStorage.setItem('Age', inputage)

buttonRegister.addEventListener("click", (event)=>{
    event.preventDefault();
    var errorText = ""
    const text = inputusrname.value;
    if(text.length< 5){
        // console.log("harus terdiri dari 2 kata")
        errorText = "Username length can't be less than 5 characters"

    }
    
    const password = inputpass.value
    if(password.length < 8){
        errorText = "Password length can't be less than 8 characters"
    }

    // if(!password.includes('1' && '2' && '3' && '4' && '5' && '6' && '7' && '8' && '9' && '10')){
    //     errorText = "password harus memiliki angka"
    // }

    const convpassword = inputRep_pass.value
    if(convpassword != password){
        errorText = "Password confirmation didn't match"
    }
    const number = inputage.value
    if(number < 13){
        errorText = "Must be older than 13 y.o"
    }

    const email = inputemail.value
    // if(!email.includes("@gmail.com") || email.length < 10){
    //     errorText = "Must be gmail account"
    // }
    const n = email.length;
    if(email[n-1]!= 'm' || email[n-2]!= 'o'  || email[n-3]!= 'c' || email[n-4]!= '.' || email[n-5]!= 'l'  || email[n-6]!= 'i' || email[n-7]!= 'a'  || email[n-8]!= 'm' || email[n-9]!= 'g' || email[n-10]!= '@'  ){
        errorText = "Must be gmail account"
    }

    const checkTerms = inputcheck.checked
    if(!checkTerms){
        errorText = "You have to agree on Terms and Condition"
    }

    if(errorText == ""){
        alert("Register Successful")
    }
    // if(usrname == "" && pass == "" && Rep_pass == "" && age == "" && email == ""){
    //     alert('Masukkan data dengan baik')
    // }else{
    //     if(pass != Rep_pass){
    //         alert('Password tidak sama')
    //     }else{
    //         alert('Regristasi berhasil')
    //     }
    //     if(pass.length < 6){
    //         alert('Password Minimal 6 digit')
    //     }
        
    // }
     divError.innerText = errorText
})

