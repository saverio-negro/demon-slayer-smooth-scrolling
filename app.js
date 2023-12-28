/*

MIT License

Copyright (c) 2023 Saverio Negro
Copyright (c) Go Make Things, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// Audio Player Settings
const player = document.querySelector('.player')
player.volume = 0.10;

// Implementing Smooth Scroll API
const scroll = new SmoothScroll('a[href*="#"]', {speed: 900})

// Implementing Intersection Observer API
// Target Elements
const sections = document.querySelectorAll('.card')
const listElements = document.querySelectorAll('.menu-container li')

// Defining the callback function to the 
// constructor of the "IntersectionObserver" class.

callback = (entries, observer) => {
    // Each entry describes an intersection change for one
    // observed target element.
    entries.forEach((entry) => {
        const index = entry.target.getAttribute('data-index')
        const listEl = listElements[index]
        const p = document.querySelector(`section[data-index="${index}"] p`)
        
        if (entry.isIntersecting) {
            // Manages the "li" element's background color
            listEl.style.backgroundColor = '#ED1C23'

        } else {
            // Manages the "li" element's background color
            listEl.style.backgroundColor = 'black'
        }
    })
}

// Creating the Intersection Observer Object
options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}
const observer = new IntersectionObserver(callback, options)

sections.forEach((section) => {
    observer.observe(section)
})

// Implementing Cursor Effect

const mouseCursor = document.querySelector('.cursor')
const navLinks = document.querySelectorAll('.menu-container ul li')
const anchorEls = document.querySelectorAll('.menu-container ul li a')

window.addEventListener('mousemove', (e) => {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
})

navLinks.forEach((link, index) => {
    link.addEventListener('mouseover', (e) => {
        const anchorEl = anchorEls[index]
        const anchorElText = anchorEl.getAttribute('href').substring(1)
        const url = new URL(`./images/${anchorElText}.png`, window.location.href)
        mouseCursor.style.setProperty('--cursor-background-image', `url(${url.pathname})`)
        mouseCursor.classList.add('link-grow')
        e.target.style.zIndex = "2"
    })

    link.addEventListener('mouseout', (e) => {
        mouseCursor.classList.remove('link-grow')
        const anchorEl = e.target.childNodes[0]
    })
})


