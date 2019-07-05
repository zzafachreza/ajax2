$(document).ready(function(){

	// untuk loading pertama atau refresh

	$("#loading-image").show();
	var data = "data.php";
	$('#data-mahasiswa').load(data);
	$("#loading-image").fadeOut(1000);	



// fungsi add / insert
	$("#form-tambah").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah").serialize();
	
		$.ajax({
			url: "input.php",
			type: "post",
			data: dataform,
			beforeSend: function() {
              $("#loading-image").show();
           },	
			success: function(result) {


					$('#modal-tambah').modal('hide');
					$("#nama").val('');
					$("#jenis_kelamin").val('');
					$("#telepon").val('');
					$("#alamat").val('');
					$('#data-mahasiswa').load(data);
				
				
				$("#loading-image").fadeOut(1000);
			}
		});
	});


	// fungsi untuk membuak modal
	
	$(document).on('click','#edit',function(e){
		e.preventDefault();
		$("#modal-edit").modal('show');
		$.post('edit.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit").html(html);
			}   
		);
	});
	
	// fungsi untuk edit/update
	
	$("#form-edit").submit(function(e) {
		e.preventDefault();

		var dataform = $("#form-edit").serialize();
		$.ajax({
			url: "update.php",
			type: "post",
			data: dataform,
			beforeSend: function() {
              $("#loading-image").show();
           },
			success: function(result) {

					$('#modal-edit').modal('hide');
					$("#nama").val('');
					$("#jenis_kelamin").val('');
					$("#telepon").val('');
					$("#alamat").val('');
					$('#data-mahasiswa').load(data);
				
				$("#loading-image").fadeOut(1000);
			}
		});
	});
	


	// untuk hapus
	
	$(document).on('click','#hapus',function(e){
		e.preventDefault();
		$.post('hapus.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#loading-image").show();
				$('#data-mahasiswa').load(data);			
				$("#loading-image").fadeOut(1000);
			}   
		);
	});




	refreshTable();


});

	function refreshTable(){
        $('#data-mahasiswa').load('data.php', function(){
           setTimeout(refreshTable, 5000);
        });
    }