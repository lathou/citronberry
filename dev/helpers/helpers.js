function isAnId(selector) {
    return /^#/.test(selector);
}

function getElements(selector, parents) {
    if(isAnId(selector) && parents === document) {
        return [document.getElementById(selector.substr(1))];

    } else if( parents === document) {
        return document.querySelectorAll(selector);

    } else {
        const nodeList = [];
        parents.forEach((parent) => {
            nodeList.push(...parent.querySelectorAll(selector));
        });
        return nodeList;
    }
}