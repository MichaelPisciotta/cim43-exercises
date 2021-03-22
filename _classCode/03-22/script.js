console.log('WIP');


//1.create link

let newLink = document.createElement('a');
// make our link have useful stuff inside. Set attribute works for any attribute 
newLink.setAttribute('href', '#');

newLink.setAttribute('class', 'readMore'); 

// innerHTML is for the text people see
newLink.innerHTML = 'Read more';
//console.log(newLink);



//2. find first paragraph
// allParagraphs is a list of every p tag on page
let allParagraphs = document.getElementsByTagName('p');
//firstParagraph gets that first item. In JS first-item positioned at 0
const firstParagraph = allParagraphs[0];
console.log(allParagraphs);



//3.add the link to that paragraph
// we made the link, it has all the good info, now we need to attach it to that first paragraph. Appending it is good for this
firstParagraph.appendChild(newLink);



//4. hide all but first paragraph
for (let i = 0; i <allParagraphs.length; i++) {
console.log(i);
}