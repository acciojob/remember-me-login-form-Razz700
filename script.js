//your JS code here. If required.
let btn=document.getElementById('submit');
let name=document.getElementById('username');
let pass=document.getElementById('password');
let check=document.getElementById('checkbox');
let existbtn=document.getElementById('existing');
function login(){
    if(check.checked){
        localStorage.setItem("Name",`${name.value}`);
        localStorage.setItem("Password",`${pass.value}`);
        alert("Logged in as ");
    }
    else{
        localStorage.clear();
        alert("Logged in as username");
    }
}
btn.addEventListener("click",()=>{
   if (name.value && pass.value) {
    if (localStorage.getItem("Name")==name.value && localStorage.getItem("Password")==pass.value) {
        existbtn.style.display="block";
        next();
    }
    else{
        login();
    }
   }	
});
function next(){
existbtn.addEventListener("click",()=>{
    if (localStorage.getItem("Name")==name.value && localStorage.getItem("Password")==pass.value) {
alert("Logged in as existing user");}
});}