onload = function() {
	var oList = document.getElementById("list");
	
	// 复制一份图片
	oList.innerHTML += oList.innerHTML;
	
	
	var aLi = oList.getElementsByTagName("li");
	
	// 按钮的ul
	var oList2 = document.getElementById("list2"); 

	
	// 思路：
	//   (1) 定时更新
	//   (2) 点击按钮更新图片
	//   (3) 上一页、下一页需要考虑当前是否在滚动
	
	var t = 3000;
	var timer = setTimeout(move, t);
	
	var i = 0;
	function move() {
		i++;
		var iTop = -1 * i * 1800;
		
		startMove(oList, "left", iTop, next);
		
		//console.log("当前显示的下标：" + i);

         }
	function next() {
		if (i >= aLi.length / 2) {
			i = 0;
			// 瞬间回到第0张
			oList.style.left = "0px";
		}
		timer = setTimeout(move, t);
	}
	

//试一试哦
		var left1 = document.getElementById("left"); 
		var right1 = document.getElementById("right"); 
		left1.onclick = function() {
	          clearTimeout(timer);
	      		// 取出下标赋值给 i， 因为 move函数中 i++，
   		// 所以如果要移动 this.xxx 这张图，需要减1
   				if(i<=0){
   					i=3;
   					oList.style.left = "-5400px";
   				}
	            i = i -2;
	            	// 切换到i的【下一张】图片
         		move();
          }
		right1.onclick = function() {
	          clearTimeout(timer);
	      		// 取出下标赋值给 i， 因为 move函数中 i++，
   		// 所以如果要移动 this.xxx 这张图，需要减1
   				if(i>=4){
   					i=0;
   					oList.style.left = "0px";
   				}
         	move();
         }
		
		
}


