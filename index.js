


let s = '1a34'

let isValid = false
for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if ("0987654321".indexOf(ch) === -1) {
        isValid = false;
        break;
    } else {
        isValid = true;
    }

}

if (isValid) {
    console.log("valid");
} else {
    console.log("invalid");
}