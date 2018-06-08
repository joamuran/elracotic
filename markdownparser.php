<?php 

require __DIR__ . '/vendor/autoload.php';
use Michelf\MarkdownExtra;

class MDReader {

    /*public function getDoc() {
        $my_html = MarkdownExtra::defaultTransform("#Títol\n##Subtitol");
        return $my_html;
        
     }*/

    public function getDoc($filename) {
        // Returns HTML code for markdown file specified

        if (file_exists("docs/$filename"))
            $content=file_get_contents("docs/$filename");  
        else $content="# File does not exists.\n $filename has not been created yet.";

        
        $my_html = MarkdownExtra::defaultTransform($content);
        
        return $my_html;
        
     }


     public function getDocFromHelp($help, $page) {
        // Returns HTML code for markdown file specified

        //error_log($filename);
        //$imgBasePath="/elracotic/views/help/";
    
        // Reemplaçar  "/elracotic" per "/" en producció

        $APP_BASE_PATH="/elracotic";
        $imgBasePath=$APP_BASE_PATH."/views/help/";
        error_log($imgBasePath);
        
        if (file_exists("views/help/$help/$page"))
            $content=file_get_contents("views/help/$help/$page");
        else $content="# File does not exists.\n $page has not been created yet.";
        $my_html = MarkdownExtra::defaultTransform($content);


        $my_html = preg_replace('/<img src="([^\"]*)"/i', '<img src="'.$imgBasePath.$help.'/images/$1"', $my_html);
        //$my_html = preg_replace('/<img src="([^\"]*)"/i', '<img style="width:100%" src="'.$imgBasePath.$help.'/images/$1"', $my_html);

        //$my_html = preg_replace('/<img src=s\/([^\"]*)"/i', '<img src2="$1"', $my_html);
        //$my_html = preg_replace('/<img src="images\\/([^\\"]*)"/i', '<img src="/pajarito/$1"', $my_html);
        
        
        return $my_html;
        
     }



     public function processText($text) {
        // Returns HTML code for markdown text
        $my_html = MarkdownExtra::defaultTransform($text);
        return $my_html;
     }



}


?>
