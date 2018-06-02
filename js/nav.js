
class navController{
    constructor(cms){
        this.cms=cms;
    }

    bindEvents(){

        console.log("Binding events");

        var self=this;
        var links=document.querySelectorAll(".nav-link");
        for (var i=0; i<links.length;i++){
            links[i].addEventListener("click", function(e){
                var section=e.target.getAttribute("href");
                self.loadSection(section);
            });
        }
    }

    loadSection(section){
        var self=this;

        $.get( window.location+section,
        function( data ) {
           if ($("#mainContainer").children().length==0)
            {
                $("#mainContainer").append($(data));
                $("#mainContainer").children().fadeIn();

                // Rebinding new events
                self.cms.bindEvents();
                
            }
            else {
                $("#mainContainer").children().fadeOut(function(){
                $("#mainContainer").empty();
                $("#mainContainer").append($(data));
                $("#mainContainer").children().fadeIn();

                // Rebinding new events
                self.cms.bindEvents();
            });
            
            
            }
            

          });
    }
};


/*(function() {
    var nav=new navController();
    nav.bindEvents();

 })();         */