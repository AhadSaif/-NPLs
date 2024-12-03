function isUrlValid(userInput) {
var regexQuery = "/(http(s)?://.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/";
var url = new RegExp(regexQuery,"g");
if (url.test(userInput)) {
alert('Great, you entered an E-Mail-address');
return true;
}
return false;
}
