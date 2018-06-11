<a class="piie2017" href="piie2017/saac/arasuite1/" data-toggle="tooltip" data-placement="bottom" title="Aquest contingut es correspon al treball realitzat durant el 2017. És possible que algunes parts estiguen desactualitzades i que estiguem treballant per millorar-les.">
PIIE 2017
</a>

<!--a href="#" data-toggle="tooltip" data-placement="bottom" title="Pajaritos!">pajaritos tralari</a-->

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>


<?php
require_once('markdownparser.php');

$text="#LliureX Connect

L'ús de tauletes i aplicacions en dispositius mòbils són cada vegada més freqüents als nostres centres. Les tauletes suposen un nou recurs, innovador, i que aporta una gran quantitat de recursos en forma d'apps, que no poden utilitzar-se a l'ordinador. Per una altra banda, el tamany i la versatilitat de les tauletes, possibiliten l'accés a les TIC a alumnes amb mobilitat reduïda o amb alguna discapacitat cognitiva o retard que fa que l'aparició d'ombres a la projecció de les PDI provoque confussions.

En aquest context, ens vam plantejar com poder fer que el treball que realitza un alumne a la tauleta es pugués compartir amb els companys a través del canó i la PDI. Després d'analitzar vàrias alternatives, es va proposar un model on l'ordinador de l'aula fera de pont entre la tauleta i el projector, i es connectara a la tauleta a través d'una connexió wifi. Per a això es va desenvolupar l'eina Lliurex Connect, que ajuden a la instal·lació necessària de les aplicacions necessàries a la tauleta, i que gestionava les connexions inalàmbriques, així com ens feia d'assistent per a la connexió tauleta-ordinador/ordinador-tauleta.

Per altra banda, les aplicacions necessàries a la tauleta són el Screen Cast, que permet enviar la pantalla de la tauleta a l'ordinador, i la XSDL Server, un servidor gràfic que permet mostrar en les tauletes Android aplicacions que s'executen a l'ordinador.

De tota manera, es va detectar cert retard a l'hora de sincronitzar ambdues aplicacions amb l'ordinador, de manera que quan s'utilitzàven les dos conjuntament, per tal d'executar aplicacions de l'ordinador en la tauleta i a més enviar el que s'està fent en la tauleta a l'ordinador, aquest retard implicava que el treball fos bastant complicat.

Aquest curs s'ha estat barallant altres alternatives, però seguim treballant per tal de trobar una solució amb la que el treball puga ser més fluid que amb la solució existent.

Si desitgeu utilitzar el LliureX Connect, trobareu tota la informació necessària [sobre la infrastructura necessària](piie2017/proposta/lliurex_connect/) i sobre la [instal·lació i ús de les eines de connexió](piie2017/proposta/lliurex_connect2/) al projecte del 2017, així com una [llista d'aplicacions educatives](piie2017/proposta/apps/) per a l'ús en tauletes.


";

$reader = new MDReader();

echo $reader->processText($text);

?>




