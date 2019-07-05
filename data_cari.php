	<table id="tableHolder" class="table table-bordered">
		<tr>
			<th>
				Nama 
			</th>
			<th>
				Alamat 
			</th>
			<th>
				Opsi
			</th>
		</tr>
			<?php

				include"koneksi.php";
				$no = 1;
				echo $_POST['id'];
				$data = $conn->query("select*from mahasiswa where nama like '%".$_POST['id']."'");

				while ($row = $data->fetch(PDO::FETCH_OBJ))
				{
			?>
		<tr>
			<td>
				<?php echo $row->nama; ?>
			</td>
			<td>
				<?php echo $row->alamat; ?>
			</td>
			<td>
				<a class="btn btn-info" href="#" id="edit" data-id="<?php echo $row->id_mahasiswa; ?>"><i class="fa fa-pencil"></i></a>
				<a class="btn btn-danger" href="#" id="hapus" data-id="<?php echo $row->id_mahasiswa; ?>"><i class="fa fa-trash"></i></a> 
			</td>
		</tr>
		<?php
			}
		?>
	</table>