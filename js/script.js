const exit = document.getElementById('exit');
const hide = document.getElementById('hide');
const sidebar = document.getElementById('sidebar');
const ulMini = document.getElementById('ulMini');
const mainContent = document.getElementById('mainContent');
const mobileBars = document.getElementById('mobileBars');


exit.addEventListener('click', function(){
	sidebar.style.left = '-220px';
	ulMini.style.left = '0px';
	ulMini.style.zIndex  = '9';
	mainContent.style.marginLeft = '45px'
	mobileBars.style.opacity = '1';

});
hide.addEventListener('click', function(){
	ulMini.style.left = '-55px';
	sidebar.style.left = '0px';
	ulMini.style.zIndex  = '1';
	sidebar.style.zIndex  = '5';
	mainContent.style.marginLeft = '220px'
});
mobileBars.addEventListener('click', function(){
			sidebar.style.left = '0px';
			mobileBars.style.opacity = '0';
		});

