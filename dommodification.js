document.querySelector('h1').innerHTML = 'change the heading into a new text';
document.getElementById('fourth').innerHTML = 'Fourth element';


// <!-- additional examples for in-line style CSS overwriting using JS -->
// document.body.style.backgroundColor = '#201F2E';
// document.querySelector('.blue').style.fontFamily = 'Roboto';


let paragraph = document.createElement('p');
 
paragraph.id = 'info'; 
 
paragraph.innerHTML = 'The text inside the paragraph';
 
document.body.appendChild(paragraph);



first.parentNode.innerHTML = '<p>I am the parent and my inner HTML has been replaced!</p>';

//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