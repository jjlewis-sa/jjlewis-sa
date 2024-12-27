<?php
    $visitors = GET['visitors'];
    $arr = array('visitors' => $visitors);
    
    $visitordata = json_encode($arr);
    
    file_put_contents('count.json', $visitordata);

?>