function no() {
    console.log(1)
    no_btn = document.getElementById("no_btn");
    no_btn.style.marginTop = `${Math.floor(Math.random() * 200) - 500}px`;
}

function yes() {
    console.log(2)
    no_btn = document.getElementById("no_btn");
    yes_btn = document.getElementById("yes_btn");
    no_btn.style.display = "none";
    yes_btn.style.display = "none";
    main_text = document.getElementById("main_text");
    main_text.innerHTML = "Спасибо что в меня веришь!";
    gif = document.getElementById("main_gif");
    gif.src="static/second.gif";
    soon = document.getElementById("soon");
    soon.style.display = "block";
}