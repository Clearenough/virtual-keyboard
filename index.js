import { keyboard } from "./js/keyboard.js";

const div = document.createElement('div');
div.classList.add('wrapper')
document.querySelector('body').appendChild(div)

const keyboard_wrapper = document.createElement('div')
keyboard_wrapper.classList.add('keyboard')
div.append(keyboard_wrapper)


function addTextarea(){
  const textarea = document.createElement('textarea')
  textarea.rows = 25
  textarea.cols = 50
  div.append(textarea)
}


function createButtonsRow(rowNumber){
  const buttonsRow = document.createElement('div')
  buttonsRow.classList.add('buttons-row')

  for(let key in keyboard[rowNumber]){
    let button = createButton(key, rowNumber)
    buttonsRow.append(button)
  }


  keyboard_wrapper.append(buttonsRow)

}

function createButton(name, rowNumber){
  const button = document.createElement('div')
  button.classList.add('keyboard-key')
  button.classList.add(name)

  const createLang = (lang) =>{
    const span = document.createElement('span')
    span.classList.add(lang)
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const span4 = document.createElement('span')
    span1.classList.add('caseDown')
    span1.textContent = keyboard[rowNumber][name][lang][span1.className]
    span2.classList.add('caseUp')
    span2.textContent = keyboard[rowNumber][name][lang][span1.className]
    span3.classList.add('caps')
    span3.textContent = keyboard[rowNumber][name][lang][span1.className]
    span4.classList.add('shiftCaps')
    span4.textContent = keyboard[rowNumber][name][lang][span1.className]
    span.append(span1, span2, span3, span4)
    return span
  }

  const spanRu = createLang('ru')
  const spanEn = createLang('en')

  button.append(spanRu, spanEn)
  return button
}

function keyboardState(lang, state){
  let span = document.querySelectorAll('span')
  span.forEach(a => {
    if(!a.classList.contains(lang)){
      a.classList.add('hidden')
    }
    if(a.classList.contains(state)){
      a.classList.toggle('hidden')
    }
  })
}

function createKeyboard(){
  addTextarea()
  for(let i = 1; i < 6; i++){
    createButtonsRow(i)
  }
  keyboardState('ru', 'caseDown')
}
createKeyboard()

document.addEventListener('keydown', e => {
  if(e.code === 'CapsLock'){
    keyboardState('ru', 'caseUp')
  }
})