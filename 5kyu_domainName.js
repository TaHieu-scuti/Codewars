function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

//2
// function domainName(url){
//     return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
// }
