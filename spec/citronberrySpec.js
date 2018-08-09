Wrapper = document.querySelector('.testWrapper');

beforeEach(function(){
	Wrapper.innerHTML = '';
});

describe('selection of DOM element',() => {
	it('selects a unique element with the css selector', () => {
		element = document.createElement('div');
		element.className = 'uniqueElement';
		Wrapper.appendChild(element);
		
		$element = new Element('.uniqueElement');
		expect($element.nodeList).toEqual(element);
	});

	//Todo: select multiple elements
	//Todo: select with ID
});

describe('class functionalities: ', () => {

	describe('getClass function',() => {
		it('returns class of a unique element', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.getClass()).toEqual('uniqueElement');	
		});

		it('returns undefined on multiple elements', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement';
			multipleElement2.className = 'multipleElement';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.getClass()).toEqual(undefined);
		});

		it('returns undefined on undefined element', () => {
			$undefinedElement = new Element('.undefinedElement');
			expect($undefinedElement.getClass()).toEqual(undefined);
		});
	});

	describe('hasClass function',() => {
		it('returns true if unique element has the class', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement otherClass';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.hasClass('otherClass')).toEqual(true);	
		});

		it('returns false if unique element has not the class', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.hasClass('otherClass')).toEqual(false);
		});

		it('returns undefined if the function is called on multiple elements', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement otherClass';
			multipleElement2.className = 'multipleElement';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.hasClass('otherClass')).toEqual(undefined);
		});

		it('returns undefined if the function is called on undefined element', () => {
			$undefinedElement = new Element('.undefinedElement');
			expect($undefinedElement.hasClass('undefinedElement')).toEqual(undefined);
		});	
	});

	describe('addClass function',() => {
		it('adds class on unique element and returns the CB element', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.addClass('otherClass')).toEqual($uniqueElement);
			expect(uniqueElement.className).toEqual('uniqueElement otherClass');
		});

		it('adds class on multiple elements and returns the CB elements', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement multipleElement1';
			multipleElement2.className = 'multipleElement multipleElement2';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.addClass('otherClass')).toEqual($multipleElements);
			expect(multipleElement1.className).toEqual('multipleElement multipleElement1 otherClass');
			expect(multipleElement2.className).toEqual('multipleElement multipleElement2 otherClass');
		});

		it('does not add class on unique element that has already the class and returns the CB element', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement otherClass';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.addClass('otherClass')).toEqual($uniqueElement);
			expect(uniqueElement.className).toEqual('uniqueElement otherClass');
		});

		it('does not add class on multiple elements that have already the class and returns the CB element', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement multipleElement1 otherClass';
			multipleElement2.className = 'multipleElement multipleElement2';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.addClass('otherClass')).toEqual($multipleElements);
			expect(multipleElement1.className).toEqual('multipleElement multipleElement1 otherClass');
			expect(multipleElement2.className).toEqual('multipleElement multipleElement2 otherClass');
		});	
	});

	describe('removeClass function',() => {
		it('removes class on unique element and returns the CB element', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement otherClass';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.removeClass('otherClass')).toEqual($uniqueElement);
			expect(uniqueElement.className).toEqual('uniqueElement');
		});

		it('removes class on multiple elements and returns the CB elements', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement multipleElement1 otherClass';
			multipleElement2.className = 'multipleElement multipleElement2 otherClass';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.removeClass('otherClass')).toEqual($multipleElements);
			expect(multipleElement1.className).toEqual('multipleElement multipleElement1');
			expect(multipleElement2.className).toEqual('multipleElement multipleElement2');
		});

		it('removes all classes on unique element when it is called without class argument and returns the CB element', () => {
			uniqueElement = document.createElement('div');
			uniqueElement.className = 'uniqueElement';
			Wrapper.appendChild(uniqueElement);

			$uniqueElement = new Element('.uniqueElement');
			expect($uniqueElement.removeClass()).toEqual($uniqueElement);
			expect(uniqueElement.className).toEqual('');
		});

		it('removes all classes on multiple elements when it is called without class argument and returns the CB element', () => {
			multipleElement1 = document.createElement('div');
			multipleElement2 = document.createElement('div');
			multipleElement1.className = 'multipleElement multipleElement1 otherClass';
			multipleElement2.className = 'multipleElement multipleElement2 otherClass';
			Wrapper.appendChild(multipleElement1);
			Wrapper.appendChild(multipleElement2);

			$multipleElements = new Element('.multipleElement');
			expect($multipleElements.removeClass()).toEqual($multipleElements);
			expect(multipleElement1.className).toEqual('');
			expect(multipleElement2.className).toEqual('');
		});
	});
});