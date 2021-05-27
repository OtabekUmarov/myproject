const exitModal = document.getElementById('exitModal');
const exitModalSign = document.getElementById('exitModalSign');
const modalWrap = document.getElementById('modalWrap');
const modalWrapSign = document.getElementById('modalWrapSign');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const smsIcon = document.getElementById('smsIcon');
const message = document.getElementById('message');
const exitMessage = document.getElementById('exitMessage');
const messageTime = document.getElementById('messageTime');
const messageMinut = document.getElementById('messageMinut');
const write = document.getElementById('write');
const send = document.getElementById('send');
const writeSend = document.getElementById('writeSend');
const allMessage = document.getElementById('allMessage');

writeSend.addEventListener('click', function(){
	send.style.display = 'block';
	send.innerText = write.value;
	write.value = "";
});

write.addEventListener('click', function(){
	function myFunction(x) {
		if (x.matches) { 
			allMessage.style.height = '250px';
		} else {
			allMessage.style.height = '420px';
		}
	}

	var x = window.matchMedia("(max-width: 768px)");
	myFunction(x)
	x.addListener(myFunction)
});

date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
messageTime.innerHTML = hours;
messageMinut.innerHTML = minutes;


function sms(){
	smsIcon.addEventListener('click', function(){
		message.style.height = '100%';
		message.style.padding = '10px';
		smsIcon.style.opacity = '0';
		message.style.zIndex = '999'
	});
}
sms();
exitMessage.addEventListener('click', function(){
	message.style.height = '0';
	message.style.padding = '0px';
	smsIcon.style.opacity = '1';

});
exitModal.addEventListener('click', function(){
	modalWrap.style.top = '-150%';
	mobileBars.style.opacity = '1';

});
exitModalSign.addEventListener('click', function(){
	modalWrapSign.style.top = '-150%';
	mobileBars.style.opacity = '1';

});
function loginMove(){
	login.addEventListener('click', function(){
		modalWrap.style.top = '0px';
		mobileBars.style.opacity = '0';

	});
}
loginMove();

function signupMove(){
	signup.addEventListener('click', function(){
		modalWrapSign.style.top = '0px';
		mobileBars.style.opacity = '0';
	});
}
signupMove()

// zakaz modalllllllllllllllllllllllllllll


const carSelect = document.getElementById('carSelect');
const succesDiv = document.getElementById('succesDiv');
const navbatTime = document.getElementById('navbatTime');
const exitSucces = document.getElementById('exitSucces');
const succes = document.getElementById('succes');
const box = document.getElementsByClassName('box');
const select2 = document.getElementsByClassName('select2');
const radioCheck = document.getElementsByClassName('form-check-input');
for (let i = 0; i < radioCheck.length; i++){
	radioCheck[i].onclick = function(){

		box[i].classList.add('active');
		box[i - 1].classList.remove('active');
		box[i + 1].classList.remove('active');
		if (i == 0) {
			alert('salom');
			select2.classList.remove('active');
		}
	}
}
date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();


function check(number){
	if (number < 10) return '0' + number;
	else return number;
}
succes.addEventListener('click', function(){
	succesDiv.style.opacity = '1';
	succesDiv.style.height = '100%';
	navbatTime.innerText = hours + ':' + check(minutes);
});

exitSucces.addEventListener('click', function(){
	succesDiv.style.height = '0';
	succesDiv.style.opacity = '0';
});


// zakaz modalllllllllllllllllllllllllllll




