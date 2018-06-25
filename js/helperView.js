
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

        // Binding Resources Links
        var rsclinks=document.querySelectorAll("span.racotic_link_video");
        for (var i=0; i<rsclinks.length;i++){
            // console.log("binding with "+i);
        
            rsclinks[i].addEventListener("click", function(e){
                var playlist=e.target.getAttribute("href");
                if (playlist==null) playlist=e.target.parentNode.getAttribute("href");
                self.loadVideo(playlist);
            });
        }


        
    }

    createMenu(item, menuid, helpManual){
        var self=this;

        //console.log(item);

        var ul=document.createElement("ul");
        ul.setAttribute("id", menuid);
        
        //ul.visiblechild="none";
        ul.setAttribute("visiblechild","none");
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
    

    loadMDDoc(doc){
        console.log("getting "+window.location+doc);

        $.get( window.location+doc,
        function( data ) {
            var printMe=$(document.createElement("div")).attr("doc", window.location+doc).addClass("linkToPrint");
            //alert(window.location+ " * "+doc);
            $("#content").empty();
            $("#content").append(printMe);
            $("#content").append(data);


            // Move to top of document
            document.getElementById("content").scrollTo(0,0);

            $(".link_to_help").on("click", function(ev){
                var target=$(ev.target).attr("href");
                $("[target='"+target+"']").click();
            });

            $(".linkToPrint").on("click", function(ev){
                var target=$(ev.target).attr("doc");
                //alert(target);
                var pdf=target.replace("/help/", "/getpdf/");
                document.location=pdf;
            });

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
                        e.stopPropagation();
                        
                        console.log("clickl on linkl");
                        console.log(e.target);
            
                        //console.log(e.target.children[0].visiblechild);
                        // Setting children visibility

                        var selected=$(e.target);

                        console.log(selected);

                        if($(selected).find("ul").attr("visiblechild")==="none"){
                            $(selected).find("ul").children().css("display", "list-item");
                            $(selected).find("ul").attr("visiblechild", "visible");
                            
                            $(selected).children().find("ul").attr("visiblechild", "none");
                            $(selected).children().find("ul").children().css("display", "none");
                        } else {
                            $(selected).find("ul").children().css("display", "none");
                            $(selected).find("ul").attr("visiblechild", "none");
                        }

                    });
 
                });
            });
            
        });

    }


    loadVideo(playlist){
        $.get( window.location+playlist,
            function( data ) {
                //console.log(rscData);
                $("#mainContainer").empty();
                var content="<h1>Videotutorials</h1>";
                content+="<p>En aquesta secció trobareu diversos videotutorials que expliquen el funcionament de l'eina ClassJam. Utilitzeu el botó de la part superior-esquerra del vídeo per desplegar la llista de vídeos del tutorial.</p>";
                content+="<div style='text-align:center'>";
                content+=data+"</div>";
                $("#mainContainer").html(content);
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

            // 

            //$.get( window.location+"section/rscView",
             //   function( data ) {
              
                        
         
            //});
             
            

        });

    }




};

