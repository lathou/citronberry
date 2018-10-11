//Todo : change element for elements or nodes ?
//Todo : verify if element already exist before return a new object

function isAnId(selector) {
	return /^#/.test(selector);
}

function getNodeType(node) {
	if(node !== undefined && node.nodeType === 1) {
		return 'node';
	} else if(NodeList.prototype.isPrototypeOf(node)) {
		return 'nodeList';
	}
}

function getElements(selector) {
	if(isAnId(selector)) {
		return document.getElementById(selector.substr(1));
	} else{
        const elements = document.querySelectorAll(selector);
        return elements.length > 1 ? elements : elements[0];
	}
}

function Element(selector){
	const _this = this;
	this.selector = selector;
	this.node = getElements(_this.selector);
	this.nodeType = getNodeType(_this.node);

	//Class
	this.getClass = () => {
		switch (_this.nodeType) {
			case 'node':
                return _this.node.className;

			case 'nodeList' :
                console.warn('CitronBerry : Can\'t get class of several elements');
                break;

			case undefined :
                console.warn('CitronBerry : Can\'t get class of undefined');
                break;
        }
	};

	this.hasClass = (className) => {
        switch (_this.nodeType) {
            case 'node':
                return _this.node.classList.contains(className);

            case 'nodeList' :
                console.warn('CitronBerry : Can\'t compare classes of several elements');
                break;

            case undefined :
                console.warn('CitronBerry : Can\'t compare classes of undefined');
                break;
        }
	};

	this.addClass = (className) => {
        switch (_this.nodeType) {
            case 'node':
                _this.node.classList.add(className);
                break;

            case 'nodeList' :
                _this.node.forEach((nodeElement) => {
                    nodeElement.classList.add(className)
                });
                break;

            case undefined :
                console.warn('CitronBerry : Can\'t add class on undefined');
                break;
        }

		return _this;
	};

	this.removeClass = (className) => {
        switch (_this.nodeType) {
            case 'node':
            	className ?
                	_this.node.classList.remove(className) : _this.node.className = '';
                break;

            case 'nodeList' :
                _this.node.forEach((nodeElement) => {
                	className ?
						nodeElement.classList.remove(className) : nodeElement.className = '';
                });
                break;

            case undefined :
                console.warn('CitronBerry : Can\'t remove class on undefined');
                break;
        }

		//Todo : remove several classNames ?

		return _this;
	};


	//node
	this.find = function(selector) {
		return
	}

	//events

	//DOM

}