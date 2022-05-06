document.querySelector('#firstHeading').innerText = "Cheng"

document.querySelector('#bodyContent').style = "display:none;"

document.querySelector('.mw-wiki-logo').style.backgroundImage = 'url(https://i.pinimg.com/originals/0c/1c/a1/0c1ca1955e2b0c5469ba17da2b1b9b96.jpg)'

document.querySelectorAll('p').forEach(x=>x.innerText = x.innerText.replace(/pug/ig, 'spud'))
// document.body.innerHTML = document.body.innerHTML.replace(/pug/g, "spud");

document.querySelector('a').getAttribute('href')

document.querySelectorAll('a').length

document.querySelectorAll('a').forEach(x=>x.innerText='Cheng')

document.querySelector('#logo').children[0].setAttribute('href', "http://www.google.ca")

document.body.style.fontFamily = "Papyrus"

document.querySelectorAll(".cal tr:not(:first-child) td").forEach((x,i)=>i%2==0?x.style.backgroundColor='grey':x)

// Remove all p and a nodes that contain the substring "es"
// document.querySelectorAll('p, a').forEach(node => {
// 	if (node.innerText.includes('es')) {
// 		let parent = node.parentElement;
// 		parent.remove(node);
// 	}
// });


document.querySelectorAll('.js-navigation-open.link-gray-dark').forEach(node=>node.setAttribute("style", "color: red !important;"))

document.querySelectorAll('path').forEach(x=>x.setAttribute('d',''))

img=document.querySelector('.markdown-body.entry-content.container-lg').children[0].children[0].children[0].cloneNode()
document.querySelector('.octicon.octicon-mark-github.v-align-middle').remove()
document.querySelector('.Header-link').append(img)
document.querySelector('.Header-link').style.maxWidth='50px'

let javascriptTag = document.querySelector('.topic-tag');
let parent = javascriptTag.parentNode;
document.querySelectorAll('.topic-tag').forEach(oldNode => {
	let replacement = javascriptTag.cloneNode(true);
	parent.replaceChild(javascriptTag.cloneNode(true), oldNode);
});