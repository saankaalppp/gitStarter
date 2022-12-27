var QS=document.querySelector('.list-group-item:nth-child(2')
QS.style.backgroundColor='green'
var QS1=document.querySelector('.list-group-item:nth-child(3')
 QS1.textContent=''


var fontC=document.querySelectorAll('.list-group-item')
fontC[1].style.fontColor="green"

var odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++)
{
    odd[i].backgroundColor='green'
}