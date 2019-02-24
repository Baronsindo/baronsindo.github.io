// #region Loding blog posts


$.ajax({
    url: 'Assets/MyPosts.json',
    type: "get",
    dataType: "json",

    success: function (data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].Tag == "Codes") {
            drawRow(data[i], i, "#fragCode");
        } else if (data[i].Tag == "Blog") {
            drawRow(data[i], i, "#fragBlog");
        }
    }

    $(".slideanim").addClass("slide");


}


function drawRow(rowData, i, frag) {

    console.log(frag);
    var row = $("<div />")
    $(frag).append(row);
    row.append($("<div class=\"col-md-4 col-sm-12 blg slideanim\">" +
        "<center> <img src=\"" + rowData.Image + "\" class=\"img-rounded blogimg\" data-toggle=\"modal\" data-target=\"#Mymodal" + i + "\"></center>" +
        "<h4 class=\"Title\"> <center>" + rowData.Title + " </h4>" +
        "<div class=\"modal fade\" id=\"Mymodal" + i + "\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-body\">" +
        "<h2><center>" + rowData.Title + "</center></h2>" +
        "<p>" + rowData.Content + " </center><br> <a href=\"#Mymodal" + i + "\">Share</a> </p>" +
        "</div></div></div></div></div>"
    ));
}

// #endregion

$(document).ready(function () {

    var get_modal = window.location.href.split('#');
    var mo = get_modal[1].toString();

    if ( mo != 'fragCode' && mo != 'fragBlog') {
        console.log("Hash is : "+get_modal[1]);
        $("#" + get_modal[1]).modal('show');
    }
})