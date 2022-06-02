let elems = document.getElementsByClassName("button");
for (let elem of elems) {
    elem.addEventListener("click", () => {
        chrome.tabs.query({'active': true, 'currentWindow': true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {    
                site_name: elem.innerText,
            }, function(response) {
                alert("Sucsess")
            });
        });
    });
}




// zenndev.addEventListener("click", () => {

//     localStorage.first_xpath = first_xpath_area.value;
//     localStorage.last_xpath = last_xpath_area.value;

//     chrome.tabs.query({'active': true, 'currentWindow': true}, tabs => {
//         chrome.tabs.sendMessage(tabs[0].id, {
//             first_xpath: first_xpath_area.value,
//             last_xpath: last_xpath_area.value
//         }, function(response) {
//             alert(response);
//             var text = document.querySelector(".copy_text");
//             text.value = response;
//             text.select();
//             document.execCommand("copy");
//             alert("コピーしました");
//         });
//     });
// });

// first_xpath_area.value = localStorage.first_xpath;
// last_xpath_area.value = localStorage.last_xpath;

// first_xpath_area.addEventListener("change",function(){
//     localStorage.first_xpath = first_xpath_area.value;
// });
// last_xpath_area.addEventListener("change",function(){
//     localStorage.last_xpath = last_xpath_area.value;
// });

