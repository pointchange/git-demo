window.addEventListener('load', function() {
	/* 名片 */
	const wrapperImg = document.querySelector('.wrapper img');
	wrapperImg.addEventListener('click', function() {
		this.classList.toggle('active');
	});
	//解决了鼠标移动图片没有缩小的bug;
	wrapperImg.addEventListener('mouseleave', function() {
		this.classList.remove('active');
	});
	
	//aplay
	/* const ap = new APlayer({
	    container: document.getElementById('aplayer'),
	    fixed: true,
		audio: [{
	        name: 'name',
	        artist: 'artist',
	        url: 'http://music.163.com/song/media/outer/url?id=449818741.mp3',
	        cover: 'cover.jpg'
	    }]
	}); */
	
	/* 随机颜色 */
	var span = document.querySelector('.contented article span');
	var card_container = document.querySelector('.container');
	// 要求： 随机生成颜色RGB  核心点 ：（0,0,0)   rgb  每一组的数字取值范围是  0~255 
	// 需要随机生成 0~255 之间的整数
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;// 返回我们要的颜色
	}
			
	function getRandomColor() {
		var c1 = getRandom(0, 255);
		var c2 = getRandom(0, 255);
		var c3 = getRandom(0, 255);
		return 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')'
	}
	console.log(getRandomColor());
	// 下面的代码我们不研究 只是 给你演示我们写的程序没有错误 
	
	var body_color = document.body.style.backgroundColor = getRandomColor();

	span.style.backgroundColor = getRandomColor();
	console.log('linear-gradient(135deg, '+getRandomColor()+', rgb(255, 255, 255))');;
	card_container.style.background = 'linear-gradient(135deg, ' + body_color + ', rgb(255, 255, 255))';
	
	var card = document.querySelector('.card');
	var card_top = card.offsetTop;
	console.log(card_top);
	document.addEventListener('scroll', function() {
		if (window.pageYOffset >= card_top) {
			card.style.position = 'fixed';
			card.style.top = '10px';
		} else {
			card.style.position = '';
			
		}
	});
	
	
	/* 内容 */
	
})

