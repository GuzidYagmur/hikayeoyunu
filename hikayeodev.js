alert("Merhaba hikayeme hoşgeldiniz. Hadi maceramıza başlayalım");
alert("Gizemli bir ormanda uyanıyorsun. Hafızan silinmiş gibi hissediyorsun ve elinde bir harita var. Haritanın üzerinde Bu yol seni gerçeklere götürecek, ama seçimlerin kaderini belirleyecek yazıyor. Önünde iki yol var.");

let choice1 = Number(prompt("Haritayı takip etmek istiyor musun? Evet-1/Hayır 2"));
if(choice1===1){
    alert("Haritayı takip etmeye karar veriyorsun ve bir dere kenarına ulaşıyorsun. Orada eski bir sandık var.");
   
   let choice2 = Number(prompt("Dere kenarındaki sandığı açmak ister misin? Evet-1/Hayır 2"));
   if(choice2===1){
    alert("Sandığın içinde bir anahtar buluyorsun. Harita üzerinde başka bir noktayı işaret ediyor. Oraya gitmek için yola koyuluyorsun.");
    let choice3 = Number(prompt("Anahtarın işaret ettiği yere gitmek ister misin?"));
    if(choice3===1){
      alert("Anahtarla açtığında içeride eski bir büyü kitabı var. Kitabı okuman gerekiyor.");
      alert("Oyun Sonu: Kitap eski bir büyü içeriyor. Güç kazanıyorsun ama hafızanı tamamen kaybediyorsun.");
      
    }
    else{
        alert("Haritayı bırakıp başka bir yöne gidiyorsun. Ormanda kaybolup aç kalıyorsun...");
        
    }
   }
   else{
    alert("Sandığı bırakıp yürümeye devam ediyorsun. Bir köprüye ulaşıyorsun. Köprü eski ve tehlikeli görünüyor.");
    let choice4 = Number(prompt("Köprüyü geçmek istiyor musun? Evet-1/Hayır-2"));
    if(choice4===1){
        alert("Köprüden geçerken bir tahta kırılıyor ve suya düşüyorsun. Suda gizemli bir yaratıkla karşılaşıyorsun");
        alert("Oyun Sonu:  Yaratık seni derin bir denizaltı dünyasına götürüyor. Orada yeni bir hayat başlıyorsun...");
        

    }
    else{
        alert("Köprüyü geçmekten vazgeçip koşarak evine dönüyorsun. Korkak!!");
        
    }

   }








}
else{
    alert("Haritayı bırakıp rastgele bir yöne yürüyorsun. Karanlık bir mağaraya ulaşıyorsun.");
let choice3 = Number(prompt("Mağaraya girmek ister misin? Evet-1, Hayır-2"));
if(choice3===1){
alert("Mağarada bir yılan seni takip etmeye başlıyor. Yolda bir meşale buluyorsun.");
let choice5 = Number(prompt("Meşaleyi almak ister misin? Evet-1/Hayır-2"));
if(choice5===1){
    alert("Meşale ile yılanı korkutup mağaranın derinliklerine ulaşıyorsun. Eski bir hazine buluyorsun. Ancak hazine lanetli olabilir.");
    alert("Oyun Sonu:Hazine lanetli çıktı! Kısa sürede zenginlik içinde ama mutsuz bir hayat sürüyorsun.");
    
}
else{
    alert("Yılan seni korkutup mağaradan kaçmana neden oluyor.");
    alert("Çıktığında mağaranın kapısının kapandığını gördün hikaye senin için burada bitti!");
    
}
}
else{
    alert("Mağaranın önünden dönüp başka bir yola giriyorsun. Bir ses seni bir kulübeye yönlendiriyor.");
    let choice6=Number(prompt("Kulübeye girmek ister misin? Evet-1/Hayır-2"));
    if(choice6===1){
        alert(" Kulübede yaşlı bir kadın sana bir kehanet söylüyor: Seçimlerin seni ya kurtuluşa ya da felakete götürecek. Kadının verdiği bir haritayla devam ediyorsun.");
        alert("Oyun Sonu: Kadının verdiği harita seni bambaşka bir maceraya sürükledi sonunda unutulmaz bir kahraman olarak anılacaksın!");
       
    }
    else{
        alert("Kulübeyi geçip yürümeye devam ediyorsun. Ormanda bir göl buluyorsun.");
        alert("Oyun Sonu: Gölün içinde bir portal buluyorsun ve başka bir dünyaya geçiyorsun! Hikayen orada devam edecek... ");
        
    }
}




}
