let liDOM = document.getElementsByTagName("li"); // li elementlerini liDOM'a tanımladık
var i;
for (i = 0; i < liDOM.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM[i].appendChild(span);
}; // close button oluşturduk ve her li elementinin yanına tanımladık

// close butonuna tıklandığında this.elementi silecek fonksiyonu oluşturduk
var close = document.getElementsByClassName("close");
var i; // close classtaki elementleri close değişkenie tanımladık
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
};

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
// Li elementine tıklandığında class listi checked'a taşıyacak ve görev tamamlandı diyecek.

//ekle butonunu çalıştıralım
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Bir görev girmedin!");
    } else { document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";
// oluşturduğumuz elementler için tekrar close button oluşturduk.
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}


