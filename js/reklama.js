const reklamaExit = document.getElementById('reklamaExit');
const reklama = document.getElementById('reklama');
const reklamaMobile = document.getElementById('reklamaMobile');
const reklamaExitMobile = document.getElementById('reklamaExitMobile');

reklamaExit.addEventListener('click', function(){
	reklama.style.opacity = '0';	
})

reklamaExitMobile.addEventListener('click', function(){
	reklamaMobile.style.display = 'none';	
})
