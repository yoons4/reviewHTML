const originalEmail = "example.com@hotmail.com";
const matchEmail = "/\d[A-Za-z0-9.-%]+\.[A-Za-z0-9.-%]+@[A-Za-z0-9]{2,}/";
let validDecision = matchEamil.match(originalEmail);
document.getElementById("getNumber").innerHTML = validDecision;