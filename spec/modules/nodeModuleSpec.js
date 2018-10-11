Wrapper = document.querySelector('.testWrapper');

beforeEach(function(){
	Wrapper.innerHTML = '';
});

describe('dom manipulation functionalities: ', () => {

	describe('find function',() => {
		it('returns unique child of unique parent', () => {
            uniqueParent = document.createElement('div');
            uniqueParent.className = 'uniqueParent';
            Wrapper.appendChild(uniqueParent);

            child = document.createElement('div');
            child.id = 'uniqueChild';
            uniqueParent.appendChild(child);

            $uniqueParent = cb('.uniqueParent');
            expect($uniqueParent.find('#uniqueChild').nodeList[0]).toEqual(child);
        });

        it('returns children of unique parent', () => {
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

        it('returns unique child when there is multiple parents', () => {
            parent1 = document.createElement('div');
            parent1.className = 'multipleParent';
            parent2 = document.createElement('div');
            parent2.className = 'multipleParent';
            Wrapper.appendChild(parent1);
            Wrapper.appendChild(parent2);

            child = document.createElement('div');
            child.className = 'child';
            parent2.appendChild(child);

            $parents = cb('.multipleParent');
            $child = $parents.find('.child');
            expect($child.nodeList.length).toEqual(1);
            expect($child.nodeList[0]).toEqual(child);
		});

        it('returns multiple children with multiple parents', () => {
            parent1 = document.createElement('div');
            parent1.className = 'multipleParent';
            parent2 = document.createElement('div');
            parent2.className = 'multipleParent';
            Wrapper.appendChild(parent1);
            Wrapper.appendChild(parent2);

            child1 = document.createElement('div');
            child1.className = 'child';
            child2 = document.createElement('div');
            child2.className = 'child';
            parent1.appendChild(child1);
            parent2.appendChild(child2);

            $parents = cb('.multipleParent');
            $children = $parents.find('.child');
            expect($children.nodeList.length).toEqual(2);
            expect($children.nodeList[0]).toEqual(child1);
            expect($children.nodeList[0]).toEqual(child2);
        });
	});

    describe('closest function',() => {
        it('returns unique closest parent', () => {
            uniqueParent = document.createElement('div');
            uniqueParent.className = 'uniqueParent';
            Wrapper.appendChild(uniqueParent);

            child = document.createElement('div');
            child.id = 'child';
            uniqueParent.appendChild(child);

            $child = cb('#child');
            expect($child.closest('.uniqueParent').nodeList[0]).toEqual(uniqueParent);
        });
	});
});