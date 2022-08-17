// code your solution here
function saturdayFun(activity='roller-skate' ){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
let mondayWork=function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork()
function wrapAdjective(adjective){
    return function (inner){
        return `You are ${adjective}${inner}${adjective}!` }
}
wrapAdjective('*')('a hard worker')
wrapAdjective('||')('a dedicated programmer')
