//工具类示例,调用直接util.initMenu();
(function($){
	var util = function(){}
	util.prototype = {
		//初始化菜单
		initMenu: function(menu){
			var $html = "";
			for(var i = 0;i < menu.length;i++){
				if(menu[i].isParent == 0){
					$html+="<li class='layui-nav-item' lay-unselect>"+
								"<a href='javascript:;' class='nav-menu-a' >"+
								"<i class='fa fa-"+menu[i].icon+"' style='font-size: 16px;'></i>  <span class='menu-text'>"+menu[i].name+"</span></a>"+
								"<dl class='layui-nav-child'>";
					var childs = menu[i].child;
					for(var j = 0;j < childs.length;j++){
						$html+='<dd class="child-menu" lay-unselect>'+
									'<a href="javascript:;" onclick=openTab("'+childs[j].tabIcon+'","'+childs[j].name+'","'+childs[j].url+'","'+childs[j].tabId+'"); class="nav-menu-a-child" >'+childs[j].name+'</a></dd>';
					}
					$html+="</dl></li>";
				}else{
					$html+='<li class="layui-nav-item" lay-unselect>'+
								'<a href="javascript:;" class="nav-menu-a" onclick=openTab("'+menu[i].tabIcon+'","'+menu[i].name+'","'+menu[i].url+'","'+menu[i].tabId+'");>'+
								'<i class="fa fa-'+menu[i].tabIcon+' style="font-size: 16px;"></i>  <span class="menu-text">'+menu[i].name+'</span></a>'+
								'</li>';
				}
			}
			$(".left-menu").append($html);
		},/** 加载外部css文件 */
		dynamicLoadCss: function(url) {
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.type='text/css';
			link.rel = 'stylesheet';
			link.href = url;
			head.appendChild(link);
		},/** iframe自适应 */
		iframeAuto: function() {
			$(window).on('resize', function () {
          var $content = $('.layui-tab-content');
          $content.height($(this).height() - 147);
          $content.find('iframe').each(function () {
              $(this).height($content.height());
          });
      }).resize();
		},/** 获取当前屏幕宽度 */
		getWidth: function(){
			return $(window).width();
		},/** 显示遮罩 */
		coverShade: function(){    
				var perfreebg = document.createElement("div");  
				perfreebg.setAttribute("id","perfreeBg");    
				perfreebg.style.background = "#000000";    
				perfreebg.style.width = "100%";    
				perfreebg.style.height = "100%";    
				perfreebg.style.position = "fixed";    
				perfreebg.style.top = "0";    
				perfreebg.style.left = "0";    
				perfreebg.style.zIndex = "1000";    
				perfreebg.style.opacity = "0.2";    
				perfreebg.style.filter = "Alpha(opacity=70)"; 
				perfreebg.setAttribute("onclick","offShade();")
				document.body.appendChild(perfreebg);    
		},/**取消遮罩*/    
		hideShade: function() {    
				var body = document.getElementsByTagName("body");    
				var perfreeBg = document.getElementById("perfreeBg");    
				body[0].removeChild(perfreeBg);    
		}  
	}
	window.util = new util();
})(window.jQuery);
