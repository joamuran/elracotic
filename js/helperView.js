
class helperView{
    constructor(cms){
        this.cms=cms;
    }

    bindEvents(){
        var self=this;
        //console.log("Binding events for menus");

        // Binding Links to Doc
        var helplinks=document.querySelectorAll("span.racotic_link_help");
        for (var i=0; i<helplinks.length;i++){
            // console.log("binding with "+i);
        
            helplinks[i].addEventListener("click", function(e){
                var helpsection=e.target.getAttribute("href");
                if (helpsection==null) helpsection=e.target.parentNode.getAttribute("href");
                self.loadHelp(helpsection);
            });
        }

        // Binding Resources Links
        var rsclinks=document.querySelectorAll("span.racotic_link_rsc");
        for (var i=0; i<rsclinks.length;i++){
            // console.log("binding with "+i);
        
            rsclinks[i].addEventListener("click", function(e){
                var rscsection=e.target.getAttribute("href");
                if (rscsection==null) rscsection=e.target.parentNode.getAttribute("href");
                self.loadRsc(rscsection);
            });
        }

        
    }

    createMenu(item, menuid, helpManual){
        var self=this;

        console.log(item);

        var ul=document.createElement("ul");
        ul.setAttribute("id", menuid);
        
        ul.visiblechild="none";
        ul.setAttribute("class", "list");
    
    

        for (var i in item){
            var text=document.createTextNode(item[i].item.title);
            var li=document.createElement("li");
            if (menuid!=="mainMenu") li.style.display="none";
            li.setAttribute("parent", menuid);
            li.appendChild(text);
            
        
            if(item[i].item.hasOwnProperty("items")){
                // If has own property items, we have to create submenu
                var submenu=self.createMenu(item[i].item.items, item[i].item.title, helpManual);
                li.setAttribute("class", "link");
                //$(submenu[0]).css("display", "block");
                li.appendChild(submenu);
            } else {
                // adding link to menu entry
                var filename=item[i].item.filename;
                if (filename=="") filename="__empty__";
                
                li.setAttribute("target", helpManual+"/"+filename);
                li.setAttribute("class", "mdDoc");
            }
            //console.log(item[i].item.items);
            //console.log(text);
            ul.appendChild(li);
            // console.log(default_locale[i].item.title);
        }
        return ul;
    };

    createMenu4Help(data, helpManual){
        var self=this;
        var menu=self.createMenu(JSON.parse(data)["ca"], "mainMenu", helpManual);
        return menu;
    }
    

    loadMDDoc(document){
        console.log("getting "+window.location+document);

        $.get( window.location+document,
        function( data ) {
            $("#content").empty();
            $("#content").append(data);
        });
    };

    loadHelp(helpManual){
        var self=this;

        console.log("Helper section for: "+helpManual);
        var self=this;
        $.get( window.location+helpManual,
        function( helpData ) {
            var menu=self.createMenu4Help(helpData, helpManual);

            $.get( window.location+"section/helperView",
                function( data ) {
                    $("#mainContainer").children().fadeOut(function(){
                    $("#mainContainer").empty();
                    $("#mainContainer").append($(data));
                    $("#HelperMenu").append(menu);
                    $("#mainContainer").children().fadeIn();

                    // Binding new events for links to help sections
                    // var DocLinks=document.querySelectorAll(".link");

                    $(".mdDoc").on("click", function(e){
                        e.stopPropagation();
                        
                        var manualSection=e.target.getAttribute("target");
                        if (manualSection==null) manualSection=e.target.parentNode.getAttribute("target");
                        self.loadMDDoc(manualSection);

                    });


                    $("li.link").on("click", function(e){
                        

                        console.log("clickl on linkl");
                        console.log(e.target);
            
                        //console.log(e.target.children[0].visiblechild);
                        // Setting children visibility

                        var selected=$(e.target);

                        console.log($(selected));
                        console.log($(selected).first().attr("visiblechild"));
                        console.log($(selected).first().css("display"));

                        
                        console.log ($($(selected).first().children()).children().first().css("display"));


                        if($($(selected).first().children()).children().first().css("display")!="none"){
                            $($(selected).first().children()).children().css("display", "none");

                            // WIP: Casca amb més d'un nivell d'anidament

                            /*$.each($($(selected).first().children()).children(), function(key, value){
                                
                                if($(value).attr("class")=="link") //$(value).children().css("display", "none");
                                    $($(value).first().children()).children().css("display", "none");
                            })*/
                        }
                        else{
                            $($(selected).first().children()).children().css("display", "list-item");

                            /*$.each($($(selected).first().children()).children(), function(key, value){
                                
                                if($(value).attr("class")=="link") //$(value).children().css("display", "none");
                                    $($(value).first().children()).children().css("display", "none");
                            })*/
                        }


                        //$($(temp0).first().children()).children().first().css("display")
                        //$($(temp0).first().children()).children().css("display", "none")

                        /*if (e.target.children[0].visiblechild==="none")
                            {
                                e.target.children[0].visiblechild="block";
                                console.log($(e.target.children[0]).children());
                                $(e.target.children[0]).children().css("display", "block");
                                $(e.target.children[0]).children().find(".link").css("display", "block");
                                //$(e.target.children[0]).find("ul > li").css("display", "block");
                                // WIP HERE
                                
                                //console.log($(e.target));
                                //console.log($(e.target).find("link"));

                                

                        } else {
                            e.target.children[0].visiblechild="none"
                            //$(e.target.children[0]).find("ul > li").css("display", "none");
                            $(e.target.children[0]).children().css("display", "none");
                            $(e.target.children[0]).children().find(".link").css("display", "none");
                        }*/



                         /*if (e.target.children[0].visiblechild==="none")
                            {
                                e.target.children[0].visiblechild="block";
                                console.log($(e.target.children[0]).children());
                                $(e.target.children[0]).children().css("display", "block");
                                $(e.target.children[0]).children().find(".link").css("display", "block");
                                //$(e.target.children[0]).find("ul > li").css("display", "block");
                                // WIP HERE
                                
                                //console.log($(e.target));
                                //console.log($(e.target).find("link"));

                                

                        } else {
                            e.target.children[0].visiblechild="none"
                            //$(e.target.children[0]).find("ul > li").css("display", "none");
                            $(e.target.children[0]).children().css("display", "none");
                            $(e.target.children[0]).children().find(".link").css("display", "none");
                        }*/
            
                      /*  for (var i=0; i<e.target.children[0].children.length; i++){    
                            //console.log(i);
                            //console.log(e.target.children[0].children[i]);
                            //console.log((typeof(e.target).children[0].children[i].children[0]));
                            
                            e.target.children[0].children[i].style.display=e.target.children[0].visiblechild;
                            if((typeof(e.target).children[0].children[i].children[0])!=="undefined")
                            {
                                console.log("!!!!!");
                                console.log(e.target.children[0].children[i].children[0].children);
                                for (var j=0; j<e.target.children[0].children[i].children[0].children.length; j++){
                                    
                                    console.log("*************");
                                    console.log(e.target.children[0].children[i].children[0]);
                                    console.log(j);
                                    e.target.children[0].children[i].children[0].children[j].style.display="block";
                                }
                            }

                        }*/

                    });

                     
                });
            });
             
            

        });

    }




    loadRsc(rsc){
        var self=this;

        console.log("Resources section for: "+rsc);
        var self=this;
        $.get( window.location+rsc,
        function( rscData ) {
            //console.log(rscData);
            //var menu=self.createMenu4Help(helpData, helpManual);

            var resources=JSON.parse(rscData);
            console.log(resources);

            $("#mainContainer").empty();
            var sectionName=$(document.createElement("h1")).html("Assemblees");
            $("#mainContainer").append(sectionName);
            
            /*var backBt=$(document.createElement("div")).attr("href", "localhost").addClass("btn btn-sm btn-secondary").html("<< Torna enrere");
            $("#mainContainer").append(backBt);*/

            var hr=$(document.createElement("hr"));
            $("#mainContainer").append(hr);
            var sectionDesc=$(document.createElement("div")).addClass("bs-callout bs-callout-default").html("En aquesta secció podeu descarregar-se assemblees ja configurades i personalitzades a distints nivells i etapes.");
            $("#mainContainer").append(sectionDesc);
            var hr=$(document.createElement("hr"));
            $("#mainContainer").append(hr);


            for (var item in resources.ca[0].content.items){
                var id=resources.ca[0].content.items[item].id;
                var title=resources.ca[0].content.items[item].title;
                var description=resources.ca[0].content.items[item].description;
                var filename=resources.ca[0].content.items[item].filename;

                var row=$(document.createElement("div")).addClass("row");
                var divimg=$(document.createElement("div")).addClass("col-md-2 jam_img_rounded");
                
                var download_img=$(document.createElement("a")).attr("href", "downloadresource/"+filename);
                var img=$(document.createElement("img")).addClass("img-fluid").attr("src", "views/rsc/jam.png").attr("href", "downloadresource/"+filename);
                $(download_img).append(img);


                var divcontent=$(document.createElement("div")).addClass("col-md-8");
                var h1=$(document.createElement("h2")).html(title);
                var desc=$(document.createElement("p")).html(description);
                var download=$(document.createElement("a")).html("Download").addClass("btn btn-primary").attr("href", "downloadresource/"+filename);

                $(divcontent).append(h1, desc, download);
                $(divimg).append(download_img);
                $(row).append(divimg, divcontent);

                $("#mainContainer").append(row);
                var hr=document.createElement("hr");
                $("#mainContainer").append(hr);

            }

            /*var backBt=$(document.createElement("div")).addClass("btn btn-sm btn-secondary");
            var backBttext=$(document.createTextNode(" Torna enrere"));
            var backicon=$(document.createElement("span")).addClass("glyphicon glyphicon-chevron-left");
            $(backBt).append(backicon, backBttext);
            $("#mainContainer").append(backBt);*/


            //$.get( window.location+"section/rscView",
             //   function( data ) {
              
                        
         
            //});
             
            

        });

    }




};

