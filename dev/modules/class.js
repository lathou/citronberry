Elements.prototype.getClass = function() {
    if (this.nodeList.length === 1) {
        return this.nodeList[0].className;

    } else if (this.nodeList.length > 1){
        console.warn('CitronBerry : Can\'t get class of several elements');

	} else if (this.nodeList.length === 0) {
        console.warn('CitronBerry : Can\'t get class of undefined');
    }
};

Elements.prototype.hasClass = function(className) {
    if (this.nodeList.length === 1) {
        return this.nodeList[0].classList.contains(className);

    } else if (this.nodeList.length > 1){
        console.warn('CitronBerry : Can\'t compare classes of several elements');

    } else if (this.nodeList.length === 0) {
        console.warn('CitronBerry : Can\'t compare classes of undefined');
    }
};

Elements.prototype.addClass = function(className) {
	if (this.nodeList.length > 0) {
		this.nodeList.forEach((nodeElement) => {
			nodeElement.classList.add(className)
		});
	} else {
        console.warn('CitronBerry : Can\'t add class on undefined');
	}

    return this;
};

Elements.prototype.removeClass = function(...className) {
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

Elements.prototype.toggleClass = function(className) {
    if (this.nodeList.length > 0) {
        this.nodeList.forEach((nodeElement) => {
        	nodeElement.classList.toggle(className);
        });
    } else {
        console.warn('CitronBerry : Can\'t toggle class of undefined');
    }

    return this;
};