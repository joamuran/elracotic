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

$text="#Eines SAAC

Els sistemes de comunicació augmentativa i alternativa són utilitzats àmpliament per treballar amb alumnes amb TEA. 

Dins d'aquest àmbit, existeixen diverses eines per a sistemes mòbils Android i iOS. En l'àmbit dels sistemes d'escriptori, es disposa de l'eina comercial The Grid que abarca un gran ventall de possibilitats per a persones amb TEA, des de comunicadors predeterminats molt simples del tipus \"m'agrada/no m'agrada\" a sistemes per enviar missatgería instantània a través de pictogrames.
Els principals problemes del The Grid són per una banda el seu elevat cost, i per altra la seua llicència propietària.

Durant el projecte del 2017, vam estar revisant les possibilitats en quant a programari lliure que pogueren abarcar aquest camp, i vam proposar treballar amb la suite Arasuite i el Jocomunico.


## AraSuite en LliureX

L'AraSuite és un conjunt d'eines (AraWord i Tico), utilitzades per treballar en persones amb problemes de comunicació que requereixen de sistemes de comunicació augmentativa i alternativa que combinen pictogrames i paraules.

El TICO (Tableros Interactivos de Comunicación) està pensat especialment per treballar amb taulers de comunicació amb els que es pot actuar, utilitzats molt en entorns SAAC.

Entre les seues característiques, el TICO permet:

* Crear taulers de comunicació adaptats a les necessitats individuals i les necessitats i característiques de cada usuari,
* Personalització de pràcticament qualsevol element,
* Funció d'escànner per permetre l'accés complet a persones amb problemes motors greus,
* Generar i articular frases amb una estructura sintàctica semblant a la que utilitzada en la comunicació espontània oral

L'eina AraSuite es troba disponible a LliureX des de la versió 14, però no disposava d'exemples pràctics del seu ús i instal·lació en general, i del comunicador Tico en particular. Durant el curs passat, vam estar  realitzant diversos tutorials sobre l'eina.

Podeu consultar a l'enllaç PIIE 2017 la documentació sobre instal·lació i ús d'aquest conjunt d'eines.


## JoComunico en LliureX

El Jocomunico és una aplicació gratuïta i lliure (Creative Commons CC-BY-NC) de Comunicació Augmentativa i Alternativa (CAA) pensada per a persones amb trastorns greus de la parla que es comuniquen amb pictogrames.

El principal atractiu és que expandeix de manera automàtica el llenguatge telegràfic, derivat de l’ús de pictogrames, a llenguatge natural en català i en castellà. Per exemple, un conjunt de pictogrames com ara “jo anar escola demà”, es converteix en una frase natural: “Demà aniré a l’escola”. L'aplicació és pionera en aquest àmbit i, a més, ofereix una gran flexibilitat pel que fa a la construcció d’oracions i a la possibilitat d’afegir vocabulari personalitzat.

L’aplicació també disposa d’un sistema de predicció de pictogrames que aprèn de l’ús que en fa l’usuari però que també té en compte la informació semàntica dels pictogrames i part del context de la conversa.

A més, té un historial que guarda les últimes frases generades, alhora que permet la creació de carpetes, ja siga amb aquestes frases o amb altres introduïdes mitjançant el teclat. Aquesta funció redueix el temps de comunicació i ofereix la possibilitat de preparar converses amb antelació.

El projecte ha estat desenvolupat per Joan Pahisa, en el marc d'un doctorat, amb la col·laboració de la Fundació Adecco, Telefònica i Eriksson, a través del programa Talentum Startups.

Durant el projecte del 2017, es va realitzar l'adaptació de la primera versió de l'eina per a LliureX. Aquest setembre, va aparéixer la versió 2.0 de l'aplicació, però a dia d'avui encara s'està treballant en la seua adaptació a LliureX.

De tota manera, es pot utilitzar la versió 2.0 a través de la web [jocomunico.com](https://jocomunico.com/), i utilitzar els recursos elaborats durant el curs passat.

";

$reader = new MDReader();

echo $reader->processText($text);

?>




