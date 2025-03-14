export function createTextElement(elementType, text) {

    const element = document.createElement(elementType);

    const node = document.createTextNode(text);

    element.appendChild(node);

    return element;

}