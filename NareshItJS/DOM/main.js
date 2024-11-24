
// let h = document.getElementById('id')

// console.log(h[0])

// let c = document.getElementsByClassName('Hello')
// console.log(c[0])


console.log(document.getElementById(myHead2))
console.log(document.getElementsByClassName('box')[0])
console.log(document.getElementsByClassName('myHead'))
console.log(document.getElementsByTagName('div'))

const ele = document.querySelector('.myHead') //#myHead2 => id selector ==> it can always select on fist which is belogns to given queiries h1 selected but seonc h1 isn't selected 
// document.querySelectorAll('h1') it can select all select which is belogns to given tag name 
console.log(ele)


const ele1 =document.querySelector('h2')

ele1.textContent='Hello everyone I am DOM'