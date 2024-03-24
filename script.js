const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirm=document.getElementById("confirm");
const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmValue=confirm.value.trim();

    if(usernameValue===''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }

    if(emailValue===''){
        setError(email,'Email is required')
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address')
    }
    else{
        setSuccess(email);
    }

    if(passwordValue===''){
        setError(password,'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password,"Password's length should be greater than 8 characters");
    }
    else{
        setSuccess(password);
    }

    if(confirmValue===''){
        setError(confirm,"This field shouldn't be empty");
    }
    else if(confirmValue!==passwordValue){
        setError(confirm,"Password doesn't match");
    }
    else{
        setSuccess(confirm);
    }
}

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e){
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(e);
}
