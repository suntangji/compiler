
var lang = $(".active").text();
if((lang == "python2")|| (lang == "python3")){
	var ace_lang = "python";
//console.log(ace_lang);
}
else if((lang == "c")|| (lang = "c++")){
	var	ace_lang = "c_cpp";
//console.log(ace_lang);
}
else if((lang == "go")){
	var	ace_lang = "go";
//console.log(ace_lang);
}
else if((lang == "java")){
	var	ace_lang = "java";
//console.log(ace_lang);
}
else if((lang == "php")){
	var	ace_lang = "php";
//console.log(ace_lang);
}
//$(document).ready(function(){
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");

editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
editor.setTheme("ace/theme/monokai");
var mode = "ace/mode/"+ace_lang;
editor.getSession().setMode(mode);
editor.resize();
document.getElementById('editor').style.fontSize='20px';
//alert(code);
//});
$("#btn_input").click(function () {
    $('#myModal').modal();
});
var user_input = ""
$('#btn_submit').click(function () {
	user_input = $('#txt').val(); 
	//alert(code);
		});
$('#myButton').on('click', function () {
    var $btn = $(this).button('loading');
    // business logic...
    //$('#display').modal();
    setTimeout(function () { $btn.button('reset'); },1000);
	//setTimeout(function () { $('#display').modal("hide");},10000);
    //$btn.button('reset');
});
$('#myButton').click(function () {
	var lang = $(".active").text();
	if(lang == 'c++') {
		lang = 'cpp';
	}
	var code = editor.getValue();
	var data = {
		"data":code,
		"lang":lang,
		"input":user_input
	};
	$.ajax({
    url:'/output/',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=UTF-8',
    dataType: 'json',  
    success: function(msg){
           //var ret = JSON.stringify(msg);
			//alert(msg.ok);
		   $('#output').text(msg.ok);
    $('#display').modal();
            },
	error: function (jqXHR, textStatus, errorThrown) {
            /*错误信息处理*/
        }
	})
});
$(function (){ 
			$("#myButton").popover({trigger:'hover',placement:'bottom'});
			});
$("#reset").click(function () {
		//location.reload();
		editor.setValue("");
		});
$("#save").click(function () {
		/**
		 *  * 下载文件
		 *   */
		var code = editor.getValue();
		var suffix = lang;
		if(suffix == 'c++'){
			suffix = "cc";
		}
		else if((suffix == "python2")||(suffix== "python3")){
			suffix = "py"
		}
		var blob = new Blob([code], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "test."+suffix);//filename.php为保存的文件名
		});
