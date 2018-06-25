<?php
require_once('markdownparser.php');

$text="#Class Jam

Una de les pràctiques habituals en les aules d'infantil, primària i educació especial és la realització de l'assemblea o el racó d'aula. L'eina Class Jam ens dóna la possibilitat de realitar aquesta assemblea d'aula de forma interactiva amb la pissarra digital.

D'entre tot l'alumnat a qui va dirigida l'aplicació, aquesta té especial interès per als alumnes de centres d'educació especial, ja que aquests requereixen una major estimulació en tot allò que fan. El fet de realitzar aquestes primeres rutines del dia de forma interactiva i visual, pot ser força positiu per a ells.

## Què és l'eina Class Jam (Assemblea d'Aula)?
Es tracta d'una aplicació d'escriptori per a LliureX basada en tecnologia web, el que aporta una interfície d'usuari molt amigable i senzilla.

L'aplicació disposa de diferents components, que li aporten la funcionalitat, i que permeten:

* Triar el dia de la setmana,
* Decidir l'oratge d'avui,
* Establir l'estació de l'any,
* Escollir el mes actual,
* Passar llista, per veure quins companys han vingut a classe i quins s'han quedat a casa.
* Fer una revisió de les activitats que realitzaran durant el dia.
* Anticipar el menú que tindran al menjador.";

$reader = new MDReader();

echo $reader->processText($text);

?>

<div class="row">
    <!-- Go to help window -->
    <div class="col-lg-4 col-md-6 sb-preview text-center">
        <div class="card h-100">
            <span class="sb-preview-img racotic_link_help" href="help/class_jam">
            <img class="card-img-top" src="./views/media/classjam_manual.png" alt="ClassJam Manual" />
            </span>
            <div class="card-body">
                <h4 class="card-title">Class Jam Doc</h4>
                <p class="card-text">Consulta la documentació del Class Jam</p>
            </div>
            <div class="card-footer">
                <span href="help/class_jam" class="btn btn-secondary racotic_link_help">Vés-hi!</span>
            </div>
        </div>
    </div>


    <!-- Go to resources -->
    <div class="col-lg-4 col-md-6 sb-preview text-center">
        <div class="card h-100">
            <span class="sb-preview-img racotic_link_rsc" href="resources/class-jam-rsc">
            <img class="card-img-top" src="./views/media/classjam_assemblees.png" alt="ClassJam Manual" />
            </span>
            <div class="card-body">
                <h4 class="card-title">Jams (Assemblees)</h4>
                <p class="card-text">Descarregueu assemblees ja configurades per utilitzar.</p>
            </div>
            <div class="card-footer">
                <span href="resources/class_jam" class="btn btn-secondary racotic_link_rsc">Vés-hi!</span>
            </div>
        </div>
    </div>


    <!-- Go to videos -->
    <div class="col-lg-4 col-md-6 sb-preview text-center">
        <div class="card h-100">
            <span class="sb-preview-img racotic_link_video" href="videos/class_jam">
            <img class="card-img-top" src="./views/media/classjam_videotutorials.png" alt="ClassJam Manual" />
            </span>
            <div class="card-body">
                <h4 class="card-title">Videotutorials</h4>
                <p class="card-text">Consulteu els videotutorials.</p>
            </div>
            <div class="card-footer">
                <span href="help/class_jam" class="btn btn-secondary racotic_link_help">Vés-hi!</span>
            </div>
        </div>
    </div>



</div> <!-- row -->

