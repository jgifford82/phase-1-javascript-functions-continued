// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


// This is a function expression (or anonymous function). 
// Rather than a named function (function declaration), it's defined with a variable.
// The variable name is a pointer that can be used to invoke or call the anonymous function.
const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

// function wrapAdjective(flair = "*") {
//     const prompt = function(adj = "special") {
//         return `You are ${adj}!`
//     }
// }

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}