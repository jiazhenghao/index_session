$(document).ready(function(){
	$("#login").click(function(e){
		e.preventDefault();
		$.ajax({
			type:"post",
			url:"/login_session/",
			data:{"username":$("#username").val(),
					"password":$("#password").val(),
			},
			success:function(callback){
				console.log(callback);
				callback=jQuery.parseJSON(callback);
				if(callback.status==1){
					alert("登陆成功");
					//$.cookie("username", $("#username").val(), {path: '/' })
					window.location.href = "/hello_session/"
				}
				else{
					if(callback.error_code==1){
						alert("密码错误！");
					}
					else if(callback.error_code==2){
						alert("该用户尚未注册！");
					}
					
				}
				
			},
			async:true
		});
	});
	
	
});


