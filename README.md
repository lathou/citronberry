# Citronberry

Javacript shortcuts: jquery like, but lighter.


## Create new Instance
**cb(*CSSselector*)**<br/>
Ex : var element = cb('.myClass');


## Class

| Prototype functions        | example                                        |                                              |
| -------------------------- |------------------------------------------------| ---------------------------------------------|
|**getClass()**              | element.getClass();                | return a string |
| **hasClass(*String*)**     | element.hasClass('my class');             | return a boolean   |
| **addClass(*String*)**     | element.addClass('my class');                | add a class and return Element object  |
| **removeClass(*String [,string]*)**   | element.removeClass('class1', 'class2'); <br/>element.removeClass(); | remove one or more classes <br/>or remove all classes<br/> and return Element object |
| **toggleClass(*class*)**      | element.toggleClass('my class');                | if it already exists, remove the class, else, add the class and return Element object   |



## DOM Nodes

| Prototype functions        | example                                        |                                             |
| -------------------------- |------------------------------------------------| --------------------------------------------|
|**find(*String*)**              | element.find('my child class');                | return Element object |
