// *** DOM Manipulation Review (Creating, Adding, & Removing Elements) ***

// Using the div variable for all example in this lesson
const div = document.querySelector(`div`);

// APPEND & PREPEND (Adding Elements to the document/webpage)

// Append (Adds an element before the closing tag of a parent (AKA Selected) element)
/*
Syntax Example

parentElement.append(addedElement);
*/

// Example
// Creates a new p element and adds it before the closing tag of the div element
const p1 = document.createElement(`p`);
p1.innerText = `Append Example`;
div.append(p1);

// Prepend (Adds an element after the opening tag of a parent (AKA Selected) element)
/*
Syntax Example

parentElement.prepend(addedElement);
*/

// Example
// Creates a new p element and adds it after the opening tag of the div element
const p2 = document.createElement(`p`);
p2.innerText = `Prepend Example`;
div.prepend(p2);

// INSERT ADJACENT ELEMENT (Adding Elements to the document/webpage)
/*
Syntax Example

targetElement.insertAdjacentElement(`position`, addedElement);
*/
/*
The different values that can be used for the `position`...

1. beforebegin (Adds the element before the opening tag of the targetElement)
2. afterbegin (Adds the element after the opening tag of the targetElement. This works the same as prepend.)
3. beforeend (Adds the element before the closing tag of the targetElement. This works the same as append.)
4. afterend (Adds the element after the closing tag of the targetElement.)
*/

// Example 1
// Creates a new p element and adds it before the opening tag of the div element
const p3 = document.createElement(`p`);
p3.innerText = `Insert Adjacent Element beforebegin Example`;
div.insertAdjacentElement(`beforebegin`, p3);

// Example 2
// Creates a new p element and adds it after the closing tag of the div element
const p4 = document.createElement(`p`);
p4.innerText = `Insert Adjacent Element afterend Example`;
div.insertAdjacentElement(`afterend`, p4);

// REMOVING ELEMENTS
/*
Syntax Example

element.remove();
*/

// Example
// The div element is removed from the webpage/document. However, the p elements added before and after the div are still displayed on the webpage/document.
// div.remove();