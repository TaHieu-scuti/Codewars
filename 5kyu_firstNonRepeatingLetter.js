function firstNonRepeatingLetter(s) {
    var string = s.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return s.charAt(i);
        }
    }
    return '';
}

//the way better
// function firstNonRepeatingLetter(s) {
//     for(var i in s) {
//         if(s.match(new RegExp(s[i],"gi")).length === 1) {
//             return s[i];
//         }
//     }
//     return '';
// }