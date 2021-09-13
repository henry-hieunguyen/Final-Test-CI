shortLink = (url)=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            let result = JSON.parse(xhttp.response);
            if(result){
                console.log("Link short 1" + result.result.short_link);
                console.log("Link short 2" + result.result.short_link2);
                console.log("Link short 3" + result.result.short_link3);
            }
        }
    };
    xhttp.open("GET", `https://api.shrtco.de/v2/shorten?url=${url}`, true);
    xhttp.send();
}