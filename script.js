let div = document.getElementById('main').style
div.backgroundColor = " rgba(0, 136, 255, 0.399)"
div.width = '600px'
div.height = '500px'
div.padding = '15px'
div.marginLeft = '350px'
div.borderRadius = '20px'
div.overflowY = 'scroll'
let inp = document.getElementById('inp')
inp.style.outline = 'none'
inp.style.backgroundColor = 'rgba(0, 136, 255, 0.399)'
inp.style.width = '470px'
inp.style.height = '50px'
inp.style.border = 'none'
inp.style.borderBottom = '2px solid grey'
inp.style.margin = '10px'
inp.style.marginLeft = '50px'
inp.style.borderRadius = '40px'
inp.style.fontSize = '30px'
inp.style.padding = '5px'
inp.setAttribute('placeholder', 'ENTER YOUR TODO')
let styleButton = document.querySelector('button').style
styleButton.backgroundColor = ' rgb(77, 255, 0)'
styleButton.border = '2px solid rgb(77, 255, 0)'
styleButton.borderRadius = '15px'
styleButton.width = '100px'
styleButton.height = '50px'
styleButton.color = 'white'
styleButton.cursor = 'pointer'
styleButton.paddingBottom = '5px'
styleButton.marginLeft = "180px"
let ul = document.getElementById('todo')
function todo() {
    let li = document.createElement('li')
    ul.appendChild(li)
    let text = document.createTextNode(inp.value)
    li.appendChild(text)
    let del = document.createElement('button')
    ul.appendChild(del)
    let delText = document.createTextNode("DEL")
    del.appendChild(delText)
    del.style.backgroundColor = 'red'
    let edit = document.createElement('button')
    ul.appendChild(edit)
    ul.appendChild(edit)
    let editText = document.createTextNode("EDIT")
    let c = edit.appendChild(editText)
    ul.appendChild(edit)
    inp.value = ''
    edit.addEventListener('click', function () {
        if(confirm('Do you want to edit?')){
        let textToEdit = prompt('ENTER TEXT TOBE EDIT', li.innerHTML)
        li.innerHTML = textToEdit
        }
    })
    del.addEventListener("click", function () {
        if (confirm('Do you want to delete this item?')) {
            ul.removeChild(li)
            ul.removeChild(del)
            ul.removeChild(edit)
        }
    })
}
