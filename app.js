//Bekezdés eltűntetése/megjelenítése adott gombokra kattintva

document.getElementById("hide").addEventListener("click", function(){

    var text = document.getElementById("text");

    //text.classList.remove("show");
    text.classList.add("hide");
});

document.getElementById("show").addEventListener("click", function(){

    var text = document.getElementById("text");

    /*text.classList.remove("hide");
    text.classList.add("show"); */

    text.classList.remove("hide");
});


//+
document.getElementById("text").addEventListener("mouseover", function(){

    //document.getElementById("text").classList.add("colorchange");
    this.classList.add("colorchange");
})
document.getElementById("text").addEventListener("mouseleave", function(){

    //document.getElementById("text").classList.add("colorchange");
    this.classList.remove("colorchange");
})


