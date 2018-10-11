function getSelectorType(selector) {
    if(/^#/.test(selector)) {
        return 'id';
    } else if (/^\./.test(selector)) {
        return 'class';
    }
}

function getElements(selector, parents) {
    if(getSelectorType(selector) === 'id' && parents === document) {
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

function getContextString({context, contextSelector, contextType}) {
    console.log(context)
    return ((context) ? context.nodeName : '') + (contextSelector ? contextSelector : '') + ' ' + contextType;
}