<?php

class actions {

    /**
     * constructor
    */
    public function __construct()
    {
        // nothing todo
    }

    /**
     * get Datas
     */
    public function getData($name_title, $email_title, $term_title)
    {
        $name = $this->mail = $_POST['st_name'];
        $email = $this->mail = $_POST['email_address'];
        $term = $this->mail = $_POST['term_name'];
        $table = array();

        if($term != 'tak' || empty($term)) {
            $term = 'nie';
        }

        return $table = [$name_title => $name, $email_title => $email, $term_title => $term];
    }

    /**
     * print Datas
    */
    public function printData($data)
    {
        foreach($data as $key => $val) {
            echo $key.': '.$val.'<br/>';
        }
    }

    /**
     * print json
    */
    public function printJson($data, $name_title, $email_title, $term_title)
    {
        $table = array();

        array_push($table, $data);
        
        return 'json: '.$json = json_encode($table, JSON_PRETTY_PRINT);
    }
} 