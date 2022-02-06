let emojis = ['🤓', '👻', '😈']
const emojiContainer = document.getElementById("emoji-container")
const addStart = document.getElementById("unshift-btn")
const addEnd = document.getElementById("push-btn")
const deleteStart = document.getElementById("shift-btn")
const deleteEnd = document.getElementById("pop-btn")
const input = document.getElementById("emoji-input")

function format(){
    emojiContainer.innerHTML = ''
for(let i = 0; i < emojis.length; i++){
    const emojisSpan = document.createElement('span')
    emojisSpan.textContent = emojis[i]
    emojiContainer.append(emojisSpan)
}
}

format()

addEnd.addEventListener('click', function(){
    if(input.value){
        emojis.push(input.value)
        input.value = ''
        format()
    }
})

addStart.addEventListener('click', function(){
    if(input.value){
        emojis.unshift(input.value)
        input.value =''
        format()
    }
})

deleteEnd.addEventListener('click', function(){
    emojis.pop()
    format()
})

deleteStart.addEventListener('click', function(){
    emojis.shift()
    format()
})