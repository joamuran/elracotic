<?php 

require __DIR__ . '/vendor/autoload.php';
use Michelf\MarkdownExtra;
use Dompdf\Dompdf;
use Dompdf\Options;

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
    
        // Reemplaçar  "/elracotic" per "" en producció
        if ($_SERVER["HTTP_HOST"]=="127.0.0.1"){
            // running from 127.0.0.1
            $APP_BASE_PATH="/elracotic";
        } else {
            // running on www.elracotic.net
            $APP_BASE_PATH="";
        }

        
        $imgBasePath=$APP_BASE_PATH."/views/help/";
        error_log($imgBasePath);
        
        if (file_exists("views/help/$help/$page"))
            $content=file_get_contents("views/help/$help/$page");
        else $content="# File does not exists.\n $page has not been created yet.";
        $my_html = MarkdownExtra::defaultTransform($content);

        // La bona es esta
        //$my_html = preg_replace('/<img src="([^\"]*)"/i', '<img src="'.$imgBasePath.$help.'/images/$1"', $my_html);

        $my_html = preg_replace('/<img src="([^\"]*)"/i', '<img src="http://'.$_SERVER["HTTP_HOST"].$imgBasePath.$help.'/images/$1"', $my_html);
        
        return $my_html;
        
     }



     public function processText($text) {
        // Returns HTML code for markdown text
        $my_html = MarkdownExtra::defaultTransform($text);
        return $my_html;
     }

     public function processPDF($text) {
        // Returns HTML code for markdown text
        $my_html_prev = MarkdownExtra::defaultTransform($text);

        $my_html = '<html><head><link rel="stylesheet" type="text/css" href="http://127.0.0.1/elracotic/css/helperView.css">
        </head><body>'.$my_html_prev.'</body></html>';

        // WIP HERE
        // Docs: https://codeengineered.com/blog/2014/convert-markdown-pdf-using-php/
        // https://github.com/alanshaw/markdown-pdf

        // Sembla que no pille els css, cal fer les imatges que respecten el tamany,
        // i acoplar estils en general


        error_log($my_html);
        // instantiate and use the dompdf class
        $dompdf = new Dompdf();

        $options = new Options();
        $options->setIsRemoteEnabled(true);
        $dompdf->setOptions($options);
        
        $dompdf->loadHtml($my_html);

        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser
        $dompdf->stream();



        //return $my_html;
     }



}


?>
