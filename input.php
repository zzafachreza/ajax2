<?php

include"koneksi.php";

$nama = $_POST['nama'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$alamat = $_POST['alamat'];
$telepon = $_POST['telepon'];


$sql = "insert INTO mahasiswa SET
										nama = '$nama',
										jenis_kelamin = '$jenis_kelamin',
										alamat = '$alamat',
										telepon = '$telepon'
										";

$conn->query($sql);

?>

