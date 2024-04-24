
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Front-End Developer","Front-End Developer","Front-End Developer","Front-End Developer","Front-End Developer"];
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }

        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);
});

const toggle_btn = document.querySelector('.toggle-btn');
const nav_links = document.querySelector('#homePageFooter>nav>div>div');
const nav_container = document.querySelector('#homePageFooter>nav>div');

toggle_btn.addEventListener('click', () => {
    toggle_btn.classList.toggle('active');
    nav_links.classList.toggle('active');
    nav_container.classList.toggle('active');
})