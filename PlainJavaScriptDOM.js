/**
 *  This Javascript file is dedicated to
 *  learning about plain Javascript methods
 *  that can manipulate the DOM like jQuery
 */

/**
 *  DOM Selection
 */

// Find all paragraphs with the class "summary" in the article with ID "first"
var n = $("article#first p.summary");
var n = document.querySelectorAll("article#first p.summary");

// ->> Alternates <<-

// fetches the first matching node only
document.querySelector(selector);

// fetches single node by id
document.getElementById("idname");

// fetches nodes matching an element
// tagname = "p", "a", etc.
document.getElementByTagName("tagname");

// fetches nodes with specific class names
document.getElementByClassName("class");

/**
 *  DOM Manipulation
 */

// ->> appending to the DOM <<-

// Jquery
$("#container").append("<p>more content</p>");

// plain JS
document.getElementById("container").innerHTML += "<p>more content</p>";

// alternate plain JS (safer but slower)
var p = document.createElement("p");
p.appendChild(document.createTextNode("more content"));
document.getElementById("container").appendChild(p);

// remove all child nodes
$('#container').empty();
document.getElementById('container').innerHTML = null;

// remove that specific element
$("#container").remove();
var c = document.getElementById("container");
c.parentNode.removeChild(c);





