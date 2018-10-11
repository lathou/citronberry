
//Todo : change element for elements or nodes ?
//Todo : verify if element already exist before return a new object

const cb = (selector) => {
	return new Element(selector);
};

function Element(selector){
	const _this = this;
	this.selector = selector;
	this.nodeList = getElements(_this.selector);
}