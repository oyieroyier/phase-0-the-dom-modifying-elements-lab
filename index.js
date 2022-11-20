// Write your code here!

/**
 * To remove an element from the DOM, simply call the remove() function
 	on the element itself.
	  
	The syntax is element.remove();
 */
main.remove();

/**
 * Creating a new element is done using the createElement() function.
 	Declare a variable and assign it a document.createElement() value.
 	The function takes in one argument which is an actual HTML tag that
	can be rendered in a browser e.g "p", "h1", "ul" etc.
	The argument must be wrapped inside quotes.

	Syntax is variable = document.createElement("elementName")
 */
const newHeader = document.createElement("h1");

/**
 * Setting an ID to an element.It is done using the setAttribute() function.
	The setAttribute() function takes two arguments:
	The first is simply the id identifier that tells your
	program you are assigning an ID to the element.
	The second argument is the actual value of that ID.

	Syntax is variableName.setAttribute("id", "idValue")
 */

newHeader.setAttribute("id", "victory");

/**
 * To add text content to an element, just reference the variable name
 	(PS: Not the actual tag rendered on the document)
 	and then call the textContent function on it.
	Add text wrapped inside quotation marks.
	  
	Syntax is variableName.textContent = "<Insert your text here>"
 */
newHeader.textContent = "Bob is the champion";
