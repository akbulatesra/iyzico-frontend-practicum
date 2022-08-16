//HTML Sayfasındaki elementlerin aktarılması

let taskDOM = document.getElementById("task"); //görev secildi
let ulDOM = document.getElementById("list"); // mevcut liste secildi
let liDOM = document.getElementsByTagName("li"); // butun liste elemanları secildi

// CLOSE BUTONU
for (let i=0; i< liDOM.length;i++) {
    let closeButton = document.createElement("span"); // yeni bir close butonu olusturmak icin
    closeButton.textContent= "X"; // buton icerigi
    closeButton.classList.add("close"); // class ekledim
    closeButton.onclick=deleteItem; // tiklandiginda silme fonksiyonu calisacak
    liDOM[i].append(closeButton); // butun liste elemanlarına buton eklendi
    liDOM[i].onclick=checkFunction // butun liste elemanlarına check fonksiyonu eklendi
}

//FONKSİYONLAR

function newElement() { //yeni eleman eklemek icin
    if (taskDOM.value == "") {
        $('.error').toast("show") //listeye bos ekleme yaparsa uyaracak
    }
    else {
        $('.success').toast("show") //listeye eleman eklenince belirecek
        let liDOM= document.createElement("li"); //yeni liste elementi olusturuldu
        liDOM.innerText=taskDOM.value; // inputun degeri liste elementine atandı
        ulDOM.appendChild(liDOM), // element listeye eklendi
        taskDOM.value="" // input degeri bosaltildi

        //sonradan eklenen elemanlar icin tekrar etmem gerekti, en basta bir kere taramisti cunku;
        let closeButton = document.createElement("span");
        closeButton.textContent= "X";
        closeButton.classList.add("close");
        closeButton.onclick=deleteItem;
        liDOM.append(closeButton);
        ulDOM.append(liDOM);
        liDOM.onclick=checkFunction
     } 
}

function deleteItem() { //eleman silmek icin fonksiyon
    this.parentElement.remove()
}

function checkFunction() { 
    this.classList.toggle("checked") // toggle kullandım cunku geri kaldırmak istersem diye
}

