const container = document.hetElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click',()=>{
    container.classlist.add("Active");
});
loginBtn.addEventListener('click',()=>{
    container.classlist.add("Active");
});