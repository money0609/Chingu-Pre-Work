window.onscroll = function() {
	
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		
		document.getElementById("scrollUp").style.display = "block";
		
	} else {
		
		document.getElementById("scrollUp").style.display = "none";
		
	}
};


function navToggle() {
  var navBar = document.getElementById("tmNavbar");
  var hasShow = navBar.classList.contains("show");
  
  if (hasShow) {
	navBar.classList.remove("show");
  } else {
	navBar.classList.add("show");
  }
}