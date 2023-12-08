<?php
include_once('conexion.php');
header('Access-Control-Allow-Origin: *');
$result=mysqli_query($mysqli,"select * from login") or die ('Error en el select');

$rows=array();

while($r=mysqli_fetch_assoc($result)){
 $rows[]=$r;
}

$respuesta=json_encode($rows);
echo $respuesta;
return $respuesta;

?>
