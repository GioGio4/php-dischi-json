<?php

// Recupero la lista dal file json 
$disk_list = file_get_contents(__DIR__ . "/../data/disk-list.json");

// Serve a far leggere al browser che è un file json 
header('Content-type: application/json');

// Stampa la lista dei dischi recuperati in precedenza 
echo $disk_list;