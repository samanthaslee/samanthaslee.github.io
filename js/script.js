var i = 0
document.getElementById("world").onclick = expand;
// document.getElementById("outtercircle").onclick = expand;
// document.getElementById("secondouttercircle").onclick = expand;
// document.getElementById("thirdouttercl").onclick = expand;

function expand () {
	if (i==0) {
		document.getElementById("menu").style.transform="scale(3)"
		document.getElementById("menu").style.transform="scale(45deg)"
		document.getElementById("world").style.width="200px"
		document.getElementById("world").style.left="42%"
		document.getElementById("world").style.top="55%"
		document.getElementById("outtercircle").style.transform="scale(3)"
		document.getElementById("outtercircle").style.transform="scale(45deg)"
		document.getElementById("secondouttercircle").style.transform="scale(3)"
		document.getElementById("secondouttercircle").style.transform="scale(45deg)"
		document.getElementById("thirdouttercircle").style.transform="scale(3)"
		document.getElementById("thirdouttercircle").style.transform="scale(45deg)"
		i = 1
	} else {
		document.getElementById("menu").style.transform="scale(0)"
		document.getElementById("menu").style.transform="scale(45deg)"
		document.getElementById("world").style.width="400px"
		document.getElementById("world").style.left="35%"
		document.getElementById("world").style.top="45%"
		document.getElementById("outtercircle").style.transform="scale(0)"
		document.getElementById("outtercircle").style.transform="scale(45deg)"
		document.getElementById("secondouttercircle").style.transform="scale(0)"
		document.getElementById("secondouttercircle").style.transform="scale(45deg)"
		document.getElementById("thirdouttercircle").style.transform="scale(0)"
		document.getElementById("thirdouttercircle").style.transform="scale(45deg)"

		i = 0
	}
}