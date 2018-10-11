Wrapper = document.querySelector('.testWrapper');

beforeEach(function(){
	Wrapper.innerHTML = '';
});

describe('dom manipulation functionalities: ', () => {

	describe('find function',() => {
		it('returns unique child of unique parent with css selector', () => {
            uniqueParent = document.createElement('div');
            uniqueParent.className = 'uniqueParent';
            Wrapper.appendChild(uniqueParent);
            child = document.createElement('div');
            child.className = 'uniqueChild';
            uniqueParent.appendChild(child);

            $uniqueParent = cb('.uniqueParent');
            expect($uniqueParent.find('.uniqueChild').nodeList[0]).toEqual(child);
        });

        it('returns children of unique parent with css class selector', () => {
            uniqueParent = document.createElement('div');
            uniqueParent.id = 'uniqueParent';
            Wrapper.appendChild(uniqueParent);
            child1 = document.createElement('div');
            child1.className = 'child';
            child2 = document.createElement('div');
            child2.className = 'child';
            uniqueParent.appendChild(child1);
            uniqueParent.appendChild(child2);

            $uniqueParent = cb('#uniqueParent');
            $children = $uniqueParent.find('.child');
            expect($children.nodeList.length).toEqual(2);
            expect($children.nodeList[0]).toEqual(child1);
            expect($children.nodeList[1]).toEqual(child2);
        });
	});
});