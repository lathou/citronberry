//Todo : change element for elements or nodes ?
//Todo : verify if element already exist before return a new object

function isAnId(selector) {
	return /^#/.test(selector);
}

function getElements(selector) {
	if(isAnId(selector)) {
		return [document.getElementById(selector.substr(1))];
	} else{
        return document.querySelectorAll(selector);
	}
}

function Element(selector){
	const _this = this;
	this.selector = selector;
	this.nodeList = getElements(_this.selector);
}

Element.prototype.getClass = function() {
    if (this.nodeList.length === 1) {
        return this.nodeList[0].className;

    } else if (this.nodeList.length > 1){
        console.warn('CitronBerry : Can\'t get class of several elements');

	} else if (this.nodeList.length === 0) {
        console.warn('CitronBerry : Can\'t get class of undefined');
    }
};

Element.prototype.hasClass = function(className) {
    if (this.nodeList.length === 1) {
        return this.nodeList[0].classList.contains(className);

    } else if (this.nodeList.length > 1){
        console.warn('CitronBerry : Can\'t compare classes of several elements');

    } else if (this.nodeList.length === 0) {
        console.warn('CitronBerry : Can\'t compare classes of undefined');
    }
};

Element.prototype.addClass = function(className) {
	if (this.nodeList.length > 0) {
		this.nodeList.forEach((nodeElement) => {
			nodeElement.classList.add(className)
		});
	} else {
        console.warn('CitronBerry : Can\'t add class on undefined');
	}

    return this;
};

Element.prototype.removeClass = function(...className) {
    if (this.nodeList.length > 0) {
        this.nodeList.forEach((nodeElement) => {
            className.length ?
                nodeElement.classList.remove(...className) : nodeElement.className = '';
        });
    } else {
    	console.warn('CitronBerry : Can\'t remove class of undefined');
    }

    return this;
};


//node
Element.prototype.find = function(selector) {
    return
}

//events

//DOM

