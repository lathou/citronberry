function isAnId(selector) {
    return /^#/.test(selector);
}

function getElements(selector, parent) {
    if(isAnId(selector)) {
        return [document.getElementById(selector.substr(1))];
    } else{
        return parent.querySelectorAll(selector);
    }
}