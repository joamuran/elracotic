
class navController{
    constructor(cms){
        this.cms=cms;
    }


    linkNavBar(e, self){
            var section=e.target.getAttribute("href");
            $("#landing_page").fadeOut("fast", function(){
                $(this).removeClass("masthead").empty().addClass("hidden_head");
                self.loadSection(section);
            });     

    }

    bindEvents(){

        console.log("Binding events");

        var self=this;
        var links=document.querySelectorAll(":not(.external-link).nav-link");
        for (var i=0; i<links.length;i++){
            links[i].removeEventListener("click", function (e){self.linkNavBar(e, self)});
            links[i].addEventListener("click", function(e){self.linkNavBar(e, self)});
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
            $("#mainContainer").empty($(data));
            $("#mainContainer").append($(data));

            
            // Potser ara que la pagina inicial ja te contingut, no cal mirar si és un cas o
           /*if ($("#mainContainer").children().length==0)
            {
                console.log("11111111111");
                //$("#mainContainer").fadeOut(function(){
                    $("#mainContainer").empty($(data));
                    $("#mainContainer").append($(data));
                    $("#mainContainer").fadeIn();
                    // Rebinding new events
                    self.cms.bindEvents();
                //})
            }
            else {
                console.log("2222222222222222");
                //$("#mainContainer").fadeOut(function(){

                    //$("#mainContainer").children().fadeOut(function(){
                    $("#mainContainer").empty();
                    $("#mainContainer").append($(data));
                    $("#mainContainer").fadeIn();

                    // Rebinding new events
                    self.cms.bindEvents();

                    //});
                //});
            }*/
          });
    }

}



/*(function() {
    var nav=new navController();
    nav.bindEvents();

 })();         */