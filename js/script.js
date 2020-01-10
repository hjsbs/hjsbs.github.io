var spans = document.getElementsByTagName('span')

function doSetTimeout(i) {
  setTimeout(function(){ 
		spans[i].classList += ' animate-in'
	}, 250 * i)
}

window.addEventListener('load', function() {
    for (var i = 0; i < spans.length; i++) {
		doSetTimeout(i)
	}
})