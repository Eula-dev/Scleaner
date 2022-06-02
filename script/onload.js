chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var site_name = message.site_name;
    alert(site_name);

    if (site_name == "zenn.dev") {
        zenn();
    }else if (site_name == "qiita.com") {
        qiita();
    }else if (site_name == "dev.classmethod.jp") {
        classmethod();
    }
    
    sendResponse("true");
});




















function getTagNameChildNodes($target,$tag) {
    var $array = Array();
    var e = $target.childNodes;
    var i = -1;
    var j = 0;
    while (++i < e.length) {
        if(e[i].nodeType == 1) {
            if(e[i].nodeName.toLowerCase() == $tag) {
                $array[j] = e[i];
                j++;
            }
        }
    }
    return $array;
}

function classmethod() {
    var target = document.getElementsByClassName("container")[0];
    var target = getTagNameChildNodes(target, "header")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = document.getElementsByClassName("container")[0];
    var target = getTagNameChildNodes(target, "footer")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("side side-right")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("main")[0];
    target.style.width = "100%";
    target.style.maxWidth = "unset";
    target.style.paddingTop = "30px";

    var target = document.getElementsByClassName("content")[0];
    target.style.width = "100%";
    target.style.maxWidth = "unset";

    var target = document.getElementsByClassName("side-left")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("share")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("meta")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = document.getElementsByClassName("eyecatch")[0];
    target.style.margin = "0 auto";
    target.style.borderRadius = "10px";
    target.remove();

    var target = document.getElementsByClassName("inner_ad")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = document.getElementsByClassName("share-navigation")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("footer-banner")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("related")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("content-inner")[0];
    // target.style.backgroundColor = "#202020";
    target.style.width = "unset";
    target.style.maxWidth = "unset";
    target.style.margin = "unset";
    
    
}
function qiita() {
    var target = document.getElementsByClassName("allWrapper")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("p-items_wrapper")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    
    var target = document.getElementsByClassName("p-items_options")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementsByClassName("p-items_toc")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementById("globalfooter");
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = document.getElementsByClassName("p-items_main")[0];
    target.style.gridColumn = "6/3";

    var target = document.getElementsByClassName("p-items_wrapper")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    target.style.display = "unset";

    var target = document.getElementsByClassName("p-items_main")[0];
    var target = getTagNameChildNodes(target, "div");
    if (target.length == 9) {     
        for (let index = 0; index < target.length-2; index++) {
            target[index+2].remove();
        }
        var target = getTagNameChildNodes(target[1], "div");
        target[2].remove();
        target[1].remove();
    } else if (target.length == 8) {     
        for (let index = 0; index < target.length-1; index++) {
            target[index+1].remove();
        }
        var target = getTagNameChildNodes(target[0], "div");
        target[2].remove();
        target[1].remove();
    } else if (target.length == 7) {     
        for (let index = 0; index < target.length-1; index++) {
            target[index+1].remove();
        }
        var target = getTagNameChildNodes(target[0], "div");
        target[2].remove();
        target[1].remove();
    }
}

// function qiita() {
//     var target = document.getElementsByClassName("allWrapper")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     // target.style.backgroundColor = "#202020";
//     target.remove();

//     var target = document.getElementsByClassName("p-items_options")[0];
//     // target.style.backgroundColor = "#202020";
//     target.remove();

//     var target = document.getElementsByClassName("p-items_toc")[0];
//     // target.style.backgroundColor = "#202020";
//     target.remove();
    
//     var target = document.getElementsByClassName("p-items_main")[0];
//     target.style.gridColumn = "6/3";

//     var target = document.getElementsByClassName("p-items_wrapper")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     // target.style.backgroundColor = "#202020";
//     target.remove();

//     var target = document.getElementsByClassName("p-items_wrapper")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     target.style.display = "unset";

//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();

//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     var target = getTagNameChildNodes(target, "div")[2];
//     target.remove();
//     var target = document.getElementsByClassName("p-items_main")[0];
//     var target = getTagNameChildNodes(target, "div")[0];
//     var target = getTagNameChildNodes(target, "div")[1];
//     target.remove();


//     var target = document.getElementsByClassName("st-footer_container")[0];
//     target.remove();
    
//     var elem = document.createElement('div');
//     elem.id = 'url_area';
//     elem.innerHTML = location.href;
//     document.body.appendChild(elem);

//     var elem = document.createElement('style');
//     elem.innerHTML = "#url_area{position: fixed; top: 0px; left: 0px; background-color: #202020; color: #fff; padding: 5px 10px; 5px 10px}";
//     document.head.appendChild(elem);
// }


function zenn() {
    // ヘッダー 削除
    var target = document.getElementById('__next');
    var target = getTagNameChildNodes(target, "header")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "aside")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    
    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "aside")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "section")[0];
    // target.style.backgroundColor = "#202020";
    target.style.width = "100%";

    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "section")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "aside")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "section")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "aside")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementById('__next');
    var target = getTagNameChildNodes(target, "footer")[0];
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementById('related-contents');
    // target.style.backgroundColor = "#202020";
    target.remove();

    var target = document.getElementById('discuss');
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = document.getElementById('share');
    // target.style.backgroundColor = "#202020";
    target.remove();
    
    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    target.style.maxWidth = "unset";

    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    // target.style.paddingBottom = "unset";
    
    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "section")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    target.style.paddingBottom = "unset";

    var target = getTagNameChildNodes(document.getElementById('__next'), "article")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[1];
    var target = getTagNameChildNodes(target, "section")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    var target = getTagNameChildNodes(target, "div")[0];
    target.style.maxWidth = "unset";

    var elem = document.createElement('div');
    elem.id = 'url_area';
    elem.innerHTML = location.href;
    document.body.appendChild(elem);

    var elem = document.createElement('style');
    elem.innerHTML = "#url_area{position: fixed; top: 0px; left: 0px; background-color: #202020; color: #fff; padding: 5px 10px; 5px 10px}";
    document.head.appendChild(elem);


    var elems = document.getElementsByClassName("md-img");
    for (let elem of elems) {
        elem.style.maxWidth = "80%";
    }
}