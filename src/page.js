"use strict"
// import './page.scss'
window.onload = function() {
    var text = $('#text')
    console.log(text.html)
    text.text = _.upperCase(text.text)
}