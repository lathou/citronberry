Wrapper = document.querySelector('.testWrapper');

beforeEach(function(){
	Wrapper.innerHTML = '';
});

describe('selection of DOM element',() => {
	it('selects a unique element with the css class selector', () => {
		element = document.createElement('div');
		element.className = 'uniqueElement';
		Wrapper.appendChild(element);
		
		$element = cb('.uniqueElement');
        expect($element.nodeList.length).toEqual(1);
		expect($element.nodeList[0]).toEqual(element);
	});

    it('selects a unique element with the css ID selector', () => {
        element = document.createElement('div');
        element.id = 'uniqueElement';
        Wrapper.appendChild(element);

        $element = cb('#uniqueElement');
        expect($element.nodeList.length).toEqual(1);
        expect($element.nodeList[0]).toEqual(element);
    });

    it('selects multiple elements with the css class selector', () => {
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
});