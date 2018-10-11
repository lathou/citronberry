//Todo : siblings, closest, createElement, append, ...
//Todo : fix : all nodeList are not arrays or nodeList
//Todo : fix : some context nodenames are undefined

Elements.prototype.find = function(selector) {
    if(this.nodeList) {
        return new Elements(selector, {context : this.nodeList, contextSelector: this.selector, contextType: 'children'});
    } else {
        console.warn('CitronBerry : Can\'t find children of undefined');
    }
};

Elements.prototype.closest = function(selector) {
    if(this.nodeList) {
        if(this.nodeList.length === 1) {
            return new Elements('', {context : this.nodeList[0], contextSelector: this.selector, contextType: 'parent'}, [this.nodeList[0].closest(selector)])
        } else {
            console.warn('CitronBerry : Can\'t find parent of multiple children');
        }
    } else {
        console.warn('CitronBerry : Can\'t find parent of undefined');
    }
};

