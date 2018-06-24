function include() {
  return new Promise((resolve, reject) => {
    let file, xhttp;
    let allElements = document.getElementsByTagName('*'); //get all elements on the page

    for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
        file = allElements[i].getAttribute("includefile");
        if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        allElements[i].innerHTML = this.responseText;
                    }
                    if (this.status == 400) {
                        allElements[i].innerHTML = "Page not found!";
                    }
                    allElements[i].removeAttribute('includefile');
                    //include();
                }
            }
            xhttp.open('GET', 'includes/' + file, true); // matching file names in includes folder
            xhttp.send();
            //return;
        }
console.log(i);
    }
   console.log("should return");
}).then(function(result) {
    var d = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("currentdate").innerHTML = day[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
  });}
async function setDate(){
    console.log("beginning sd");
    let v=await include();
    
    console.log("await over");
    
    return v;
                  }

 // initial function call
