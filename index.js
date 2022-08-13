function talk() {
	let know = {
		"Who are you": "Hello Codewith_random here!",
		"How are you": "Good :)",
		"What can I do for you": "Please Give us A Follow & Like.",
		"ok": "Thank You So Much",
		"Bye": "Okay!Will meet soon.."
	};
	let user = document.getElementById("userBox").value;
	document.getElementById("chatLog").innerHTML = user + "<br/>";
	if (user in know) {
		document.getElementById("chatLog").innerHTML = know[user] + "<br/>";
	} else {
		document.getElementById("chatLog").innerHTML = "Sorry,I did't undersrand <br/>";
	}
}
