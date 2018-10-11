# Citronberry

Javacript shortcuts: jquery like, but lighter.


## Select node(s)
**new Element(*CSSselector*)**<br/>
Ex : var element = new Element('.myClass');


## Class

| Methods                    | example                                        |                                                 |
| -------------------------- |------------------------------------------------| ------------------------------------------------|
|**getClass()**              | var class = element.getClass();                | return a string                                 |
| **hasClass(*class*)**      | var hasClass = element.hasClass(String);             | return a boolean                                |
| **addClass(*class*)**      | element.addClass(String);                | add a class and return Element object                                     |
| **removeClass(*class*)**   | element.removeClass(String[,string]); <br/>element.removeClass(); | remove one or more classes <br/>or remove all classes<br/> and return Element object |

