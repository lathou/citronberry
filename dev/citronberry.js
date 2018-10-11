
//Todo : verify if element already exist before return a new object

const cb = (selector) => {
	return new Elements(selector);
};

function Elements(selector, parent = document){
	const _this = this;
	this.selector = selector;
	this.nodeList = getElements(_this.selector, parent);
}

//Todo : Events