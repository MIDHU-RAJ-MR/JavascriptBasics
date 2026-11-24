// function show(){
//     alert('Button is clicked!!!')
// }
// var head=document.getElementById('head1')
// head.addEventListener('mouseover',()=>{
//     head.style.color='brown'
// })
// function leave(){
//     head.style.color='black'
// }
// function display(eve){
//     console.log(eve.target.value);
// }
// var text=document.getElementById('text');
// function focusn(){
//     text.style.backgroundColor='lightblue'
// }
// var text=document.getElementById('text');
// function blurn(){
//     text.style.backgroundColor='red'
// }
// function submitted(){
//     alert('the form is submitted');
// }
// //regulae expression for validationg inputs
// let email=document.getElementById('email');
// let error=document.getElementById('error');
// let regex=/^([a-zA-Z0-9\.-_#]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
// function validate(){
// if(regex.test(email.value.trim())){
//     error.textContent='Email is valid';
//     error.style.color='green';
//     return true;

// }
// else{
//     error.textContent='Email is invalid';
//     error.style.color='red';
//     return false;
// }
// }

function verify(){
    let num=document.getElementById('num');
    let errmsg=document.getElementById('errmsg'); 
    try{
        let x=num.value;
        if (x<5) throw 'The number is too low'
        if (x>10) throw 'The number is too high'
    }catch(error){
        //template literal
        //console.log(`The error is ${error} `);
        errmsg.textContent=`the error is ${error}`;
    }
}

