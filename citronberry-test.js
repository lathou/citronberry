//CLASS TESTS

//Select Element
var alone = new Element('.alone');
var aloneVanilla = document.querySelectorAll('.alone');
var several = new Element('.several');
var severalVanilla = document.querySelectorAll('.several');
var undefinedElement = new Element('.undefinedElement');
console.log('Get right nodeList: ' + (alone.nodeList === aloneVanilla));
console.log(alone.nodeList, aloneVanilla)

//Get class
var aloneVanillaClass = aloneVanilla[0].className;
console.log(
	'Get class of one element: ' + (alone.getClass() === aloneVanillaClass) + '\n' +
	'Get class of several elements: ' + (several.getClass() === undefined) + '\n' +
	'Get class of not found element: ' + (undefinedElement.getClass() === undefined) + '\n'
);

//Has class
console.log(
	'Verify if one element has a class: ' + alone.hasClass('alone') + '\n' +
	'Verify if one element has not the class: ' + !alone.hasClass('several') + '\n' +
	'Verify if several elements has a class: ' + (several.hasClass('several') === undefined) + '\n' +
	'Verify if not found elements has a class: ' + (undefinedElement.hasClass('undefinedElement') === undefined) + '\n' 
);

//Add class
alone.addClass('add');
several.addClass('add');
undefinedElement.addClass('add')
console.log(
	'Add class on one element: ' + (aloneVanilla[0].className === aloneVanillaClass + ' add') + '\n' +
	'Add class on several elements: ' + ((severalVanilla[0].className === 'several remove add') && (severalVanilla[1].className === 'several add'))
);
alone.addClass('alone');
several.addClass('remove');
console.log(
	'Don\'t add class on element that has already the class: ' + (aloneVanilla[0].className === aloneVanillaClass + ' add' ) + '\n' +
	'Don\'t add class on several elements if that has already the class: ' + ((severalVanilla[0].className === 'several remove add') && (severalVanilla[1].className === 'several add remove'))
);

//Remove class
alone.removeClass('remove');
several.removeClass('remove');
undefinedElement.removeClass('undefinedElement')
console.log(
	'Remove all target class on one element: ' + (aloneVanilla[0].className === 'alone add' ) + '\n' +
	'Remove all target class on several elements: ' + ((severalVanilla[0].className === 'several add') && (severalVanilla[1].className === 'several add'))
);


