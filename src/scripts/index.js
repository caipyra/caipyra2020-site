window.onload = function () {
    const nav = document.getElementById('header-nav');
    document.getElementById('mobile').onclick = function () {
        this.classList.toggle('close');
        nav.classList.toggle('active');

    }
}

function closeMenu(){
	const nav = document.getElementById('header-nav');
	const mob = document.getElementById('mobile');
	nav.classList.remove('active');
	mob.classList.remove('close');
}

var menu_bttn = document.querySelectorAll("[id='close_menu']");

for (let i = 0; i < menu_bttn.length; i++) {
  menu_bttn[i].addEventListener('click', function() {
    closeMenu();
  });
}
