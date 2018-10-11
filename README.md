# Citronberry

Javacript shortcuts: jquery like, but lighter.


## Select node(s)
**new Element(*CSSselector*)**<br/>
Ex : var element = new Element('.myClass');


## Class

| Methods                    | example                                        |                                                 |
| -------------------------- |------------------------------------------------| ------------------------------------------------|
|**getClass()**              | var class = element.getClass();                | return a string                                 |
| **hasClass(*class*)**      | var hasClass = element.hasClass();             | return a boolean                                |
| **addClass(*class*)**      | element.addClass('myNewClass');                | add a class and return Element object                                     |
| **removeClass(*class*)**   | element.removeClass('myClass'); <br/>element.removeClass(); | remove a classes <br/>or remove all class<br/> and return Element object |

