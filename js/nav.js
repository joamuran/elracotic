
class navController{
    constructor(cms){
        this.cms=cms;
    }

    bindEvents(){

        console.log("Binding events");

        var self=this;
        var links=document.querySelectorAll(":not(.external-link).nav-link");
        for (var i=0; i<links.length;i++){
            links[i].addEventListener("click", function(e){
                var section=e.target.getAttribute("href");
                $("#landing_page").fadeOut("normal", function(){
                    $(this).removeClass("masthead").empty().addClass("hidden_head");
                    self.loadSection(section);
                });     
            });
        }


        links=document.querySelectorAll(".external-link");
        for (var i=0; i<links.length;i++){
            links[i].addEventListener("click", function(e){
                var lnk=e.target.getAttribute("href");
                document.location=lnk;
                
            });
        }


    }

    loadSection(section){
        var self=this;

        $.get( window.location+section,
        function( data ) {

            // Potser ara que la pagina inicial ja te contingut, no cal mirar si és un cas o
           if ($("#mainContainer").children().length==0)
            {
                $("#mainContainer").fadeOut(function(){
                    $("#mainContainer").append($(data));
                    $("#mainContainer").fadeIn();
                    // Rebinding new events
                    self.cms.bindEvents();
                })
            }
            else {
                $("#mainContainer").fadeOut(function(){

                    $("#mainContainer").children().fadeOut(function(){
                    $("#mainContainer").empty();
                    $("#mainContainer").append($(data));
                    $("#mainContainer").fadeIn();

                    // Rebinding new events
                    self.cms.bindEvents();

                    });
                });
            }
          });
    }

}



/*(function() {
    var nav=new navController();
    nav.bindEvents();

 })();         */