let form=document.getElementById('my-form')
form.addEventListener('submit',savetoLocalStorage)
function savetoLocalStorage(e){
    e.preventDefault();
    let name=e.target.Name.value
    let email=e.target.Email.value
    // localStorage.setItem('Name',name)
    // localStorage.setItem('Email',email)
    let obj={
        name,email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showNewUserOnScreen(obj)
}
function showNewUserOnScreen(user){
    const parentNode=document.getElementById('userslist') 
    const childHtml=`<li> ${user.name} - ${user.email}</li>`
    parentNode.innerHTML=parentNode.innerHTML+childHtml
}