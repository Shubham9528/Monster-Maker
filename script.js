var color1 = ["#ff000000", "#ff4000", "#ff0000", "#ffbf00", "#C4CFFF", "#FFFB85", "#FFA6C1", "#A866FF", "#4D52FF", "#40FFBC", "#40FFBC", "#F8F9FA", "#E9ECEF", "#DEE2E6", "#CED4DA",
    "#ADB5BD", "#6C757D", "#495057", "#343A40",
    "#212529", "#007BFF", "#6C757D", "#28A745", "#DC3545", "#FFC107", "#17A2B8", "#F8F9FA",
    "#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD",
    "#6C757D",
    "#495057",
    "#343A40",
    "#212529",
    "#007BFF",
    "#6C757D",
    "#28A745",
    "#DC3545",
    "#FFC107",
    "#17A2B8",
    "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
    "#6C757D",
    "#495057",
    "#343A40",
    "#212529",
    "#007BFF",
    "#6C757D",
    "#28A745",
    "#DC3545",
    "#FFC107",
    "#17A2B8",
    "#F8F9FA",
    "#E9ECEF",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
];

$(".btn").click(function () {
    let id = $(this).attr("id");
    //alert(id+" button is clicked");

    if (id === "face") {
        var random = Math.floor(Math.random() * 6);
        //alert(random);
        $("img").attr("src", "images/" + random + ".png");
        $("img").attr("width", "270px");
        $("img").attr("height", "270px");
    }

    if (id === "color")
    {
        var random = Math.floor(Math.random() * color1.length);
        //alert(random);
        $(".msbody").css("background-color", color1[random]);

    }

    if(id=="horns")
 {
        var random = Math.floor(Math.random() * 6);
        $(".monsterHorns").css("box-shadow","0 20px  "+color1[random]);
    }
    if(id=="tail")
    {
        var random = Math.floor(Math.random() * 6);
        $(".monsterTail").css("border-color",color1[random]);
    }
  
})