//Todo : DOM : parent, siblings, find, closest, createElement, append, ...

Elements.prototype.find = function(selector) {
    return new Elements(selector, this.nodeList[0]);
};
