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
    document.getElementById('email').value=''
    document.getElementById('name').value=''
    if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
    }
    const parentNode=document.getElementById('userslist') 
    const childHtml=`<li id=${user.email}> ${user.name} - ${user.email} 
                    <button onclick=deleteUser('${user.email}')>Delete user</button>
                    <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
                    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHtml
}
function editUserDetails(emailId, name, phonenumber){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;
    deleteUser(emailId)
 }
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId)
    removeUserFromScreen(emailId); 
}
function removeUserFromScreen(emailId){
    const parentNode=document.getElementById('userslist')
    const childNodeToBeDeleted=document.getElementById(emailId) 
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}