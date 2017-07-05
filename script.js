$(document).ready(function(){
	/*$("#AA").hide();
	$('#ui-show').click(function() {
  		$('#ui-show').hide();
    	$('#AA').show();
	});
	$('#ui-close').click(function() {
    	$('#AA').hide();
    	$('#ui-show').show();
	});*/
	$(".answer").hide();
	$(".ques").click(function(){
		$(this).next(".answer").slideToggle();
	});
	$(".ques").addClass("ques-des")
});
function slideIn() {
	var elem=document.getElementById('AA');
	elem.style.transition="left 0.5s ease-in 0s";
	elem.style.left="0px";
	document.getElementById('ui-show').style.transition="opacity 0.1s";
	document.getElementById('ui-show').style.opacity=0;
}
function slideOut() {
	var elem=document.getElementById('AA');
	elem.style.transition="left 0.5s ease-out 0s";
	elem.style.left="-350px";
	document.getElementById('ui-show').style.transition="opacity 0.1s";
	document.getElementById('ui-show').style.opacity=1;
}
