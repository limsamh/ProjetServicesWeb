function afficheMenu(obj) {

    var idMenu = obj.id;
    var idSousMenu = 'sous' + idMenu;
    var sousMenu = document.getElementById(idSousMenu);

    /*****************************************************/
    /**    on cache tous les sous-menus pour n'afficher    **/
    /** que celui dont le menu correspondant est cliqué **/
    /** où 4 correspond au nombre de sous-menus         **/
    /*****************************************************/
    for (var i = 1; i <= 4; i++) {
        if (document.getElementById('sousmenu' + i) && document.getElementById('sousmenu' + i) != sousMenu) {
            document.getElementById('sousmenu' + i).style.display = "none";
        }
    }

    if (sousMenu) {
        //alert(sousMenu.style.display);
        if (sousMenu.style.display == "block") {
            sousMenu.style.display = "none";
        }
        else {
            sousMenu.style.display = "block";
        }
    }

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*
var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["text"];
        var parentid = item["parentid"];
        var id = item["id"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, item: item };
            source[id] = items[id];
        }
    }
    return source;
}

var source = builddata();

window.alert(source);


var buildUL = function (parent, items) {
    $.each(items, function () {
        if (this.label) {
            // create LI element and append it to the parent element.
            var li = $("<li>" + this.label + "</li>");
            li.appendTo(parent);
            // if there are sub items, call the buildUL function.
            if (this.items && this.items.length > 0) {
                var ul = $("<ul></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }
        }
    });
}
var ul = $("<ul></ul>");

ul.appendTo("#jqxMenu");
buildUL(ul, source);*/
