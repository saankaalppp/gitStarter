// var itemList=document.querySelector('#items')
// console.log(itemList.parentElement)    
// itemList.parentElement.style.backgroundColor='#f4f4f4'

// itemList.children[1].style.backgroundColor='Yellow'
// itemList.firstElementChild.textContent="Helloww"
// itemList.lastElementChild.textContent="Byeee"
//console.log(itemList.nextElementSibling)
// itemList.previousElementSibling.style.color="pink"

var newDiv=document.createElement('div')
newDiv.className='Hello'
newDiv.id='hello1'
newDiv.setAttribute('title','hello Div')

var newDivtext=document.createTextNode("hello world")
newDiv.appendChild(newDivtext)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1)
