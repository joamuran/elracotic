    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="">El Racó TIC d'EE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">

            <?php
                $sectionsJSON = file_get_contents("./sections.json");
                
                try{
                $sections = json_decode($sectionsJSON, true);
                } catch (Exception $e) {
                    error_log($e);
                }

                /*$jsonIterator = new RecursiveIteratorIterator(
                    new RecursiveArrayIterator($sections),
                    RecursiveIteratorIterator::SELF_FIRST);*/
                
                /*$jsonIterator = new RecursiveIteratorIterator(
                    new RecursiveArrayIterator($sections),
                    RecursiveIteratorIterator::SELF_FIRST);*/

                foreach ($sections as $item => $val) {
                    ?>
                    <li class="nav-item active">
                    <div class="nav-link" href="section/<?php echo ($val['index']); ?>"><?php echo $item;?>
                      <span class="sr-only">(current)</span>
                    </div>
                  </li>
                  <?php
                }
            ?>

            <!--li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li-->


          </ul>
        </div>
      </div>
      <!--script src="js/nav.js"></script-->
    </nav>
