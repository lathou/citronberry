//Todo : parent, siblings, closest, createElement, append, ...

Elements.prototype.find = function(selector) {
    if(this.nodeList) {
        return new Elements(selector, this.nodeList, this.selector);
    }
};
