var $fadeOutButton = $('.fadeout')
var $fadeInButton = $('.fadein')
var $text = $('.text')
var $text2 = $('.text2')
var fadeOut = function (element, ms) {
  var opacity = 1
  var timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer)
      element.style.display = 'none'
    }
    element.style.opacity = opacity
    opacity -= 0.1
  }, ms/10)
}
var fadeIn = function (element, ms) {
  var opacity = 0.1
  element.style.display = 'block'
  element.style.opacity = opacity
  var timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer)
    }
    element.style.opacity = opacity
    opacity += 0.1
  }, ms/10)
}
var fadeOutHandler = function () {
  // $text.fadeOut(3000)
  fadeOut($text[0], 3000)
}

var fadeInHandler = function () {
  // $text2.fadeIn(3000)
  fadeIn($text2[0], 3000)
}

$fadeOutButton.click(fadeOutHandler)
$fadeInButton.click(fadeInHandler)
