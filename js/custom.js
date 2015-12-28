function navbar(){
	var navbar = "";
	navbar += '<div class="container">';
	navbar += '<div class="navbar-header">';
	navbar += '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
	navbar += '<span class="sr-only">Toggle navigation</span>';
	navbar += '<span class="icon-bar"></span>';
	navbar += '<span class="icon-bar"></span>';
	navbar += '<span class="icon-bar"></span>';
	navbar += '</button>';
	navbar += '<a class="navbar-brand" href="home.html"><img alt="Brand" class="img-circle logo" src="images/logo.png" style="height:40px;width:40px;margin-top:10px"></a>';
	navbar += '</div>';
	navbar += '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
	navbar += '<ul class="nav navbar-nav">';
	navbar += '<li><a href="home.html">Home</a></li>';
	navbar += '<li><a href="index.html">Resume</a></li>';
	navbar += '</ul>';
	navbar += '<ul class="nav navbar-nav navbar-right">';
	navbar += '<li><a href="contact.html">Contact</a></li>';
	navbar += '</ul>';
	navbar += '</div>';
	navbar += '</div>';
	$('nav').append(navbar);
}

$(document).ready(function(){
	navbar();
});