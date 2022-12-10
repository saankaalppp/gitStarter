// console.dir(document)
// console.log(document.domain)
//  console.log(document.URL)
//  console.log(document.title)
// document.title = 1422
// console.log(document.title)
 // console.log(document.all)
//  console.log(document.head)
//console.log(document.all[1])
//console.log(document.all[6])
// document.all[10].textContent="Hello"
//  console.log(document.forms[0])
// console.log(document.links)

// var headertitle =document.getElementById('header-title');
 //headertitle.style.BottomBorder="black"
// var header =document.getElementById('#main-header');
// console.log(headertitle.textContent='hello')
// headertitle.innerText='Goodbye'
// var items=document.getElementsByClassName('list-group-item')
// console.log(items[1])
// items[1].textContent="heya"
// conso
// header.style.borderBottom='solid 3px #000'

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].textContent='morning'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='blue'

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }

// var li=document.getElementsByTagName('li')
// console.log(li)
// li[1].textContent='morning'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='blue'

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }

// var header=document.querySelector('#main-header')
// header.style.BorderBottom='solid 4px #ccc'

// var input=document.querySelector('input')
// input.value="hello world"

// var submit=document.querySelector('input[type="submit"]')
// submit.value='send'

// var item=document.querySelector('.list-group-item')
// item.style.backgroundColor='blue'

// var nth=document.querySelector('.list-group-item:nth-child(2')
// nth.style.color='yellow'

var titles=document.querySelectorAll('.title')
console.log(titles)

titles[0].style.color='Green'
titles[0].style.fontWeight='bold'

var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')
for(var i=0;i<even.length;i++){
    odd[i].style.backgroundColor='#f4f4f4'
    even[i].style.backgroundColor='#ccc'
}