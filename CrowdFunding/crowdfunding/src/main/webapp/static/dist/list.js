function loading() {
	$("#loading").loading({
		loadingWidth : 240,
		title : '加载中...',
		name : 'loading',
		discription : '马上就好',
		direction : 'column',
		type : 'origin',
		originDivWidth : 40,
		originDivHeight : 40,
		originWidth : 6,
		originHeight : 6,
		smallLoading : false,
		loadingMaskBg : 'rgba(0,0,0,0.2)'
	});
}

function select(owner) {
	$('#owner').val(owner);
}

// 模态框1
function confirm() {
	var owner = $.trim($('#owner').val());
	var coin = $.trim($('#coin').val());
	var password = $.trim($('#password').val());
	var file = $.trim($('#file').val());
	if (!owner || !coin || !password || !file) {
		alert('信息不完善！');
		return false;
	}

	// 读取文件
	var reader = new FileReader();
	reader.readAsText(document.getElementById("file").files[0], "UTF-8");
	reader.onload = function(e) {
		var content = e.target.result;

		// 异步提交
		$.ajax({
			url : "sendCoin",
			type : "POST",
			data : {
				"owner" : owner,
				"coin" : coin,
				"password" : password,
				"content" : content
			},
			beforeSend : function() {
				$("#tip").html('<span style="color:blue">正在处理...</span>');
				return true;
			},
			success : function(res) {
				if (res) {
					alert('操作成功');
				} else {
					alert('操作失败');
				}
				setTimeout(function() {
					$("#myModal").modal('hide')
				}, 1000);
			}
		});
	};
	return false;
}

// 模态框2
function confirm2() {
	var password = $.trim($('#password2').val());
	var file = $.trim($('#file2').val());
	if (!password || !file) {
		alert('信息不完善！');
		return false;
	}

	// 读取文件
	var reader = new FileReader();
	reader.readAsText(document.getElementById("file2").files[0], "UTF-8");
	reader.onload = function(e) {
		var content = e.target.result;

		// 异步提交
		$.ajax({
			url : "raiseFund",
			type : "POST",
			data : {
				"password" : password,
				"content" : content
			},
			beforeSend : function() {
				$("#tip2").html('<span style="color:blue">正在处理...</span>');
				return true;
			},
			success : function(res) {
				if (res) {
					alert('操作成功');
				} else {
					alert('操作失败');
				}
				setTimeout(function() {
					$("#myModal2").modal('hide')
				}, 1000);
			}
		});
	};
	return false;
}

// 模态框1
$(function() {
	$('#myModal').on('hide.bs.modal', function() {
		$("#owner").val('');
		$("#coin").val('');
		$("#password").val('');
		$("#file").val('');
		$("#tip").html('<span id="tip"> </span>');
	})
});

// 模态框2
$(function() {
	$('#myModal2').on('hide.bs.modal', function() {
		$("#password2").val('');
		$("#file2").val('');
		$("#tip2").html('<span id="tip2"> </span>');
	})
});