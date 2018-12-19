$(document).ready(function(){
	
	$('.search-icon').click(function(){
		$('.custom-input').toggle("3000");
	});

	$('.all').click(function(){
		$('.all-collapse').toggle("3000");
		$('.designPhoto-collapse').hide("3000");
		$('.codePhoto-collapse').hide("3000");
		$('.photography-collapse').hide("3000");
		$('.appsPhoto-collapse').hide("3000");
		$('.all').addClass('recent-bgc');
		$('.design, .code, .photography, .apps').removeClass('recent-bgc')
	});

	$('.design').click(function(){
		$('.designPhoto-collapse').toggle("3000");
		$('.all-collapse, .codePhoto-collapse, .photography-collapse, .appsPhoto-collapse').hide("3000");
		$('.design').addClass('recent-bgc');
		$('.all, .code, .photography, .apps').removeClass('recent-bgc')
	});

	$('.code').click(function(){
		$('.codePhoto-collapse').toggle("3000");
		$('.all-collapse').hide("3000");
		$('.designPhoto-collapse').hide("3000");
		$('.photography-collapse').hide("3000");
		$('.appsPhoto-collapse').hide("3000");
		$('.code').addClass('recent-bgc');
		$('.all, .design, .photography, .apps').removeClass('recent-bgc')
	});

	$('.photography').click(function(){
		$('.photography-collapse').toggle("3000");
		$('.all-collapse').hide("3000");
		$('.designPhoto-collapse').hide("3000");
		$('.codePhoto-collapse').hide("3000");
		$('.appsPhoto-collapse').hide("3000");
		$('.photography').addClass('recent-bgc');
		$('.all, .design, .code, .apps').removeClass('recent-bgc')
	});

	$('.apps').click(function(){
		$('.appsPhoto-collapse').toggle("3000");
		$('.all-collapse').hide("3000");
		$('.designPhoto-collapse').hide("3000");
		$('.codePhoto-collapse').hide("3000");
		$('.photography-collapse').hide("3000");
		$('.apps').addClass('recent-bgc');
		$('.all, .design, .code, .photography').removeClass('recent-bgc')
	});

});