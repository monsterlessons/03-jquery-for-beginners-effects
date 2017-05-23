$('.submit').on('click', function () {
  console.log('clicked')
})

var $square = $('.square')
var enterHandler = function () {
  console.log('square enter')
  $square.addClass('active')
}
var leaveHandler = function () {
  console.log('square leve')
  $square.removeClass('active')
}

$square.mouseenter(enterHandler)
  .mouseleave(leaveHandler)

$('body').on('click', '.byJavascript', function () {
  console.log('clicked on js element')
})

$('body').append('<div class="byJavascript">Created by javascript</div>')
