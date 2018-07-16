//Todo : change element for elements or nodes ?
//Todo : verify if element already exist before return a new object

function Element(selector){
	var _this = this;
	this.selector = selector
	this.nodeList = document.querySelectorAll(_this.selector);

	//Class
	this.getClass = function() {
		var nodeList = _this.nodeList;

		if(nodeList.length === 1) {
			return nodeList[0].className;
		} else if (nodeList.length > 1) {
			console.warn('CitronBerry : Can\'t get className of several elements');
		} else if (nodeList.length === 0) {
			console.warn('CitronBerry : Can\'t get className of undefined');
		}

		return;	
	}

	this.hasClass = function(className) {
		if(_this.getClass()) {
			var classArray =  _this.getClass().split(' ');
			return (classArray.indexOf(className) !== -1);			
		}

		return;
	}

	this.addClass = function(className) {
		_this.nodeList.forEach(function(nodeElement) {
			var classArray = nodeElement.className.split(' ');
			if(classArray.indexOf(className) === -1) {
				nodeElement.className += ' ' + className;
			}
		});

		return _this;
	}

	this.removeClass = function(className) {
		_this.nodeList.forEach(function(nodeElement) {
			if(className) {
				var classArray = nodeElement.className.split(' ');
				while (classArray.indexOf(className) !== -1) {
					id = classArray.indexOf(className);
					classArray.splice(id, 1);
				}
				nodeElement.className = classArray.join(' ');				
			} else {
				nodeElement.className = '';
			}
		});
		//Todo : remove several classNames ?

		return _this;
	}


	//node
	this.find = function(selector) {
		return
	}

	//events

	//DOM

}