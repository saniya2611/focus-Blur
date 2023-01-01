// alert("hxhhb");

const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const email = document.getElementById("email")




const onfocusHandler = (eve) => {
    eve.target.style.border = "3px solid #FFD700"
}

const onblurHandler = (eve) =>{
    eve.target.style.border = "1px solid #ced4da";
    //console.log(eve.target.value)  // never use innertext / innerHTML on form control...value should be use 
    let input = eve.target;
    if(input.value.length === 0){
        console.log(input.nextElementSibling);
        input.nextElementSibling.classList.remove('d-none');
    }else{
        input.nextElementSibling.classList.add('d-none');
        input.nextElementSibling.style.fontWeight = 700;
    }
}

const onfouseHandling =(eve) => {
    eve.target.style.border = "3px solid #FFD700 "
}
const onBlurHandling =(eve) =>{
    eve.target.style.border = "1px solid #ced4da"
    let input = eve.target
    if(input.value.length === 0){
        console.log(input.nextElementSibling);
        input.nextElementSibling.classList.remove('d-none')
    }else{
        input.nextElementSibling.classList.add('d-none')
        eve.target.nextElementSibling.style.fontWeight = 700;
    }
    
}

const onFocusingHandler = (eve) => {
    eve.target.style.border = "3px solid #FFD700"
}

const onbluringHandler =(eve) => {
    eve.target.style.border = "1px solid #ced4da"
    let input = eve.target;
    if((input.value.includes('@') === true) &&
    (input.value.includes('.') ===true)&&
    (input.value.indexOf('@') >= 2) &&
    (input.value.indexOf('.')-input.value.indexOf('@') >= 3)&&
    (input.value.length)-(input.value.indexOf('.')) > 4
    ){
        input.nextElementSibling.nextElementSibling.classList.remove('d-none')
    }else{
        eve.target.nextElementSibling.classList.remove("d-none");
        eve.target.nextElementSibling.style.color = "black" ;
        eve.target.nextElementSibling.style.fontWeight = 700;
    }
    
}







fName.addEventListener('focus', onfocusHandler)
fName.addEventListener("blur", onblurHandler)
lName.addEventListener("focus", onfouseHandling)
lName.addEventListener("blur", onBlurHandling)
email.addEventListener("focus", onFocusingHandler)
email.addEventListener("blur", onbluringHandler)