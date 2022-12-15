let form=document.getElementById('my-form')
form.addEventListener('submit',savetoLocalStorage)
function savetoLocalStorage(e){
    e.preventDefault();
    let name=e.target.Name.value
    let email=e.target.Email.value
    localStorage.setItem('Name',name)
    localStorage.setItem('Email',email)
}