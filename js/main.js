//https://developer.mozilla.org/ca/docs/Web/JavaScript/Referencia/Classes

class MyCMS{
    constructor(){
        //this.url="http://localhost/prac";
        this.hv=new helperView(this);
        this.nav=new navController(this);
    };

    getDoc(){
        //$.get( "http://127.0.0.1/elracotic/getdoc/example.md",
        $.get( window.location+"getdoc/example.md",
        function( data ) {
            console.log((data));
            $("#mdDoc").append(data);
            
          });
    }

    bindEvents(){
        var self=this;
        self.nav.bindEvents();
        self.hv.bindEvents();
    }


};

(function() {
    var CMS=new MyCMS();
    CMS.getDoc();
    CMS.bindEvents();
 })();         