// SCENARIO 1:

document.querySelector("#grandParent")
.addEventListener('click', () => {
    console.log("GRAND PARENT")
})
document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("PARENT")
})
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("CHILD")
})

// SCENARIO 2:

document.querySelector("#grandParent")
.addEventListener('click', () => {
    console.log("GRAND PARENT")
}, true)   // -> this 'useCapture' boolean is false by default
// P.S. : I know we can see that, but just to show off that I know the param's name😜
document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("PARENT")
}, true)
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("CHILD")
}, true)

// SCENARIO 3: Truth always comes first(literally,'cause trickle down - bubble up)

document.querySelector("#grandParent")
.addEventListener('click', () => {
    console.log("GRAND PARENT")
}, true)
document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("PARENT")
}, false)
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("CHILD")
}, true)

// STOP PROPAGATION:

document.querySelector("#grandParent")
.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("GRAND PARENT")
}, true)
document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("PARENT")
}, false)
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("CHILD")
}, true)