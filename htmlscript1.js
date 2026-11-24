//access the element and store in variable
var head1 = document.getElementById('head1');
head1.style.textAlign='center';
head1.style.color='brown';
head1.style.backgroundColor='grey';
head1.textContent='Heading bleeehhh';
head1.innerText='again changed';
var group = document.getElementById('grp1');
group.innerHTML=`<p>its a paragraph <p>`;
let image=document.getElementById('image');
image.innerHTML=`<img src="download.jpeg">`;
// by calss name means you are accessing multiple elements
var list=document.getElementsByClassName('lichild');
list[0].textContent='pineapple';
// list[0].style.backgroundColor='red';
// list[1].style.backgroundColor='orange';
// list[2].style.backgroundColor='lightblue';
var par=document.getElementsByTagName('p');
par[0].style.fontFamily='Calibri';
//query selector
var query1=document.querySelector('input[type=date]');
query1.style.backgroundColor='blue';
var query2=document.querySelectorAll('.lichild');
//#tag is for id and . is for class
query2[0].style.backgroundColor='grey';