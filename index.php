<?php 

// Getting routes
require_once('controller.php');

try {
    $MyController = new Controller();
    $MyController->processCall();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}


?>