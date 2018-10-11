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