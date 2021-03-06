<?php  
require_once('markdownparser.php');

class Controller {
    const server="localhost";
    private $_method;
    private $_arglist;
    private $_md;
     
    public function __construct() {
        $this->_md = new MDReader();
    }
           
     public function processCall() {  
        
       if (isset($_SERVER["REQUEST_URI"])) {  
        $url = explode('/', trim($_SERVER["REQUEST_URI"]));  
        $url = array_filter($url);   // Filter content for url with multiples ///
         


        if ($_SERVER["HTTP_HOST"]=="127.0.0.1"){
            // removing "elracotic" if we are on localhost
            array_shift($url);
        }

        $this->_method = strtolower(array_shift($url));  
        $this->_arglist = $url;


        switch($this->_method){
            case "getdoc":
                $doc=$this->_arglist[0]; // First argument is document.
                $text=$this->_md->getDoc($doc);
                echo $text;
            break;

            case "section":
                $section=$this->_arglist[0]; // First argument is section
                //file_get_contents("docs/$filename");
                require("views/".$section.".php");
            break;

            case "help":

            //error_log(count($this->_arglist));

            // Count argument list to distinguish if it's a general help or a page

            if (count($this->_arglist)==1){
                $help=$this->_arglist[0]; // First argument is help folder
                require("views/help/".$help."/index.json");
            } else {
                $reader = new MDReader();
                $help=$this->_arglist[0];
                $page=$this->_arglist[1];
                
                if ($this->_arglist[1]=="__empty__") {
                    $error_text="#Error \nPage not defined in index.";
                    echo $reader->processText($error_text);
                    return -1;
                }

                //$filename="views/help/".$help."/".$page;
                //error_log($filename);
                $text=$reader->getDocFromHelp($help, $page);
                echo $reader->processText($text);

            }

            break;


            case "videos":

                echo '<iframe width="640" height="360" src="https://www.youtube.com/embed/videoseries?list=PLCk7L5XSES_qm6PIB3DusxqL10_5eeJpS" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                    break;

            case "getpdf":
                // Count argument list to distinguish if it's a general help or a page
                //if (count($this->_arglist)==1){
                    
                    //$help=$this->_arglist[0]; // First argument is help folder
                    //require("views/help/".$help."/index.json");
                //} else {
                $reader = new MDReader();
                $help=$this->_arglist[0];
                $page=$this->_arglist[1];
                    
                if ($this->_arglist[1]=="__empty__") {
                    $error_text="#Error \nPage not defined in index.";
                    echo $reader->processText($error_text);
                    return -1;
                }

                $text=$reader->getDocFromHelp($help, $page);
                $HTMLText=$reader->processPdf($text, $page);

                




            break;

            case "resources":
                $rsc=$this->_arglist[0];
                require("views/rsc/".$rsc.".json");                
            break;


            case "downloadresource":
                $rsc=$this->_arglist[0];
                /*header('Content-Description: File Transfer');
                header('Content-Type: application/octet-stream');
                require("views/rsc/".$rsc);*/
                $file = "views/rsc/".$rsc;
                if (is_file($file))
                {
                    //sendHeaders($file, 'application/octet-stream', $rsc);
                    header('Content-Description: File Transfer');
                    header('Content-Type: application/octet-stream');
                    
                    $chunkSize = 1024 * 1024;
                    $handle = fopen($file, 'rb');
                    while (!feof($handle))
                    {
                        $buffer = fread($handle, $chunkSize);
                        echo $buffer;
                        ob_flush();
                        flush();
                    }
                    fclose($handle);
                    exit;
                }
            break;

            default:
                require("views/skel.php"); // Skel is main view


        }

       }
       else echo ("no url");
       
    }
}

    