<?php 
    require_once 'classes.php'; 

    $actions = new actions();

    $datas = $actions->getData('Imię', 'Email', 'Zgoda');
    $actions->printData($datas);

    $datas_json = $actions->getData('name', 'email', 'term');
    echo $actions->printJson($datas_json, 'name', 'email', 'term');

    file_put_contents('data.json', json_encode($datas_json, JSON_PRETTY_PRINT));
?>