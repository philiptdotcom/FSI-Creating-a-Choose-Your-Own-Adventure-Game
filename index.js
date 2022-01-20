let question1 = 'Do you head left or right?'
let question2 = 'You come across a stranger.... Do you follow it, or continue on your path?'
let question3 = 'You come across a snoring dragon... Do you go to the treasure or dragon?'

let firstAnswer = window.prompt(`${question1}`)
// console.log(firstAnswer)
// console.log(firstAnswer==='left')
if (firstAnswer==='left'){let secondAnswer=window.prompt(`${question1}`)
} else if(firstAnswer==='right') {
    let secondAnswer = window.prompt(`${question3}`)
}
