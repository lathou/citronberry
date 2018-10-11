Wrapper = document.querySelector('.testWrapper');

beforeEach(function(){
	Wrapper.innerHTML = '';
});

describe('selection of DOM element',() => {
	it('selects a unique element with the class selector', () => {
		element = document.createElement('div');
		element.className = 'uniqueElement';
		Wrapper.appendChild(element);
		
		$element = cb('.uniqueElement');
        expect($element.nodeList.length).toEqual(1);
		expect($element.nodeList[0]).toEqual(element);
	});

    it('selects multiple elements with the class selector', () => {
        element1 = document.createElement('div');
        element2 = document.createElement('div');
        element1.className = 'multipleElement';
        element2.className = 'multipleElement';
        Wrapper.appendChild(element1);
        Wrapper.appendChild(element2);

        $element = cb('.multipleElement');
        expect($element.nodeList.length).toEqual(2);
        expect($element.nodeList[0]).toEqual(element1);
        expect($element.nodeList[1]).toEqual(element2);
    });

    it('selects a unique element with the ID selector', () => {
        element = document.createElement('div');
        element.id = 'uniqueElement';
        Wrapper.appendChild(element);

        $element = cb('#uniqueElement');
        expect($element.nodeList.length).toEqual(1);
        expect($element.nodeList[0]).toEqual(element);
    });

    it('selects a unique element with the tagName selector', () => {
        element = document.createElement('p');
        Wrapper.appendChild(element);

        $element = cb('p');
        expect($element.nodeList.length).toEqual(1);
        expect($element.nodeList[0]).toEqual(element);
    });

    it('selects multiple elements with the tagName selector', () => {
        element1 = document.createElement('p');
        element2 = document.createElement('p');
        element1.className = 'multipleElement';
        element2.className = 'multipleElement';
        Wrapper.appendChild(element1);
        Wrapper.appendChild(element2);

        $element = cb('p');
        expect($element.nodeList.length).toEqual(2);
        expect($element.nodeList[0]).toEqual(element1);
        expect($element.nodeList[1]).toEqual(element2);
    });
});