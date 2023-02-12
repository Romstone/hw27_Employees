class List
{
    constructor(selector)
    {
        this.listElement = document.querySelector(selector)
    }

    addItem = function (string)
    {
        let element = document.createElement('li')
        element.textContent = string
        this.listElement.append(element)
    }
}
