"use strict"
import _ from 'lodash'
// import './page.scss'
window.onload = function() {
    var text = $('#text')
    console.log(text.html)
    text.text = _.upperCase(text.text)

    console.log(process.env.NODE_ENV)
    var text = document.getElementsByClassName('content-div')
    console.log(text.length)
    console.log(text[0].innerHTML, '1')
    var contentTest = _.repeat('karl ', 2)
    console.log(contentTest,453)
}