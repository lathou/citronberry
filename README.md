# Citronberry

Javacript shortcuts: jquery like, but lighter.


## Select node(s)
**cb(*CSSselector*)**<br/>
Ex : var element = cb('.myClass');


## Class

| Methods                    | example                                        |                                                 |
| -------------------------- |------------------------------------------------| ------------------------------------------------|
|**getClass()**              | element.getClass();                | return a string |
| **hasClass(*class*)**      | element.hasClass(String);             | return a boolean   |
| **addClass(*class*)**      | element.addClass(String);                | add a class and return Element object  |
| **removeClass(*class*)**   | element.removeClass(String[,string]); <br/>element.removeClass(); | remove one or more classes <br/>or remove all classes<br/> and return Element object |
| **toggleClass(*class*)**      | element.toggleClass(String);                | if it already exists, remove the class, else, add the class and return Element object   |

