
//Todo : verify if element already exist before return a new object

const cb = (selector) => {
	return new Elements(selector);
};

function Elements(selector, context = {context : document, contextSelector: '', contextType: 'children'}, nodeList){
	const _this = this;
	this.selector = selector;
	this.nodeList = nodeList ? nodeList : getElements(_this.selector, context.context);
	this.selectorContext = getContextString(context);
	console.log(_this.selectorContext)
}

//Todo : Events