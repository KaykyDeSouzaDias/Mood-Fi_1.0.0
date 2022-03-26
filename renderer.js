const { ipcRenderer } = require("electron")


/* --MAIN SCREEN-- */


/* YOUTUBE API TO CHANGE LIVESTREAM AT VIDEO CONTAINER */

  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('videoYT', {
      videoId: '5qap5aO4i9A',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      event: {
        'onReady':onPlayerReady
      }
    });
  }
  function onPlayerReady (e) {
    player.setVolume(e);
  }


/* VOLUME SLIDER */

audioSlider(true);

/* Audio slider progress */
function audioSlider(color) {
  
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  
    if(color){
      e.style.setProperty('--progressColor', '#FFD201');
      e.style.setProperty('--thumb', '#FFD201');
    }else{
      e.style.setProperty('--progressColor', '#005BAA');
      e.style.setProperty('--thumb', '#005BAA');
    }
  
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

}


  /* FLOAT ACTION BUTTON FOR PERSONAL SOCIAL MEDIAS */

  function FloatBtnToggle() {
    var float = document.querySelector('.personalBtn');
    float.classList.toggle('active')
  }

  function myYT_func() {
    ipcRenderer.send("myYT");
  }
  function myGithub_func() {
    ipcRenderer.send("myGithub");
  }
  function myLinkedin_func() {
    ipcRenderer.send("myLinkedin");
  }


/* --SIDE NAV-- */


/* WINDOW RESIZE OPTIONS */

function minimize() {
  ipcRenderer.send("minimize");
}
function maximize() {
  ipcRenderer.send("maximize");
}
function closebtn() {
  ipcRenderer.send("close");
}


/* OPEN/CLOSE SIDE NAV */

document.getElementById("sideNavBar").onclick = function(){
  document.getElementById("mySidenav").style.width = "500px";
}
document.getElementById("closeSideNav").onclick = function(){
  document.getElementById("mySidenav").style.width = "0";
}


/* SIDE NAV OPTIONS FILTER */

/* Filter the content between Discover/References/Settings */
var optionBtns = document.querySelectorAll(".sideNavOptions");
var options = document.querySelectorAll(".option");
Array.from(optionBtns).forEach(item => {
   item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("selected");
      selected[0].className = selected[0].className.replace(" selected", "");
      item.className += " selected";

      var value = item.id;
      options.forEach(div =>{
        div.style.display = "none";
        if(div.getAttribute('data-filter') == value){
          div.style.display = "block";
        }
      })
   });
});


/* -DISCOVER- */


/* LIVESTREAMS FILTER */

/* Filter lofi livestreams images with categories buttons */
var btns = document.querySelectorAll(".filterBtn");
var img = document.querySelectorAll(".liveLofi");
Array.from(btns).forEach(item => {
   item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      item.className += " active";

      var value = item.id;
      img.forEach(div =>{
        div.style.display = "none";
        if(div.getAttribute('data-filter') == value || value == "All"){
          div.style.display = "inline-table";
        }
      })
   });
});


  /* FUNCTION TO CHANGE VIDEO CONTAINER CONTENT */

  /* When clicked, open the live stream at video container */

  function livestreams(idLive){
    switch(idLive){
      
      case "VHS01":
        player.loadVideoById("3WBPGAzCcng")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/VHS/InYourChill(Vhs01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "Chill01":
        player.loadVideoById("5MNb7DzIStw")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/ChilledEmpire(Chill01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill02":
        player.loadVideoById("3H6_bcfts8g")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/ChilledEmpire(Chill02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill03":
        player.loadVideoById("o5mRPi5BO-M")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/ChilledEmpire(Chill03)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill04":
        player.loadVideoById("7NOSDKb0HlU")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/ChillHop(Chill04)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill05":
        player.loadVideoById("XDh0JcxrbPM")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/College(Chill05)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_LogoDark.png",
        document.getElementById("sideNavBar").style.color = "#005BAA",
        document.getElementById("floatBtnID").style.backgroundColor = "#005BAA",
        document.getElementById("volumeUp").style.color = "#005BAA",
        document.getElementById("volumeDown").style.color = "#005BAA",
        audioSlider(false)
        break;
      case "Chill06":
        player.loadVideoById("gmv54pfxk0Q")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/College(Chill06)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_LogoDark.png",
        document.getElementById("sideNavBar").style.color = "#005BAA",
        document.getElementById("floatBtnID").style.backgroundColor = "#005BAA",
        document.getElementById("volumeUp").style.color = "#005BAA",
        document.getElementById("volumeDown").style.color = "#005BAA",
        audioSlider(false)
        break;
      case "Chill07":
        player.loadVideoById("MCkTebktHVc")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/College(Chill07)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
        case "Chill08":
        player.loadVideoById("tCs48OFv7xA")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/DreamHop(Chill08)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_LogoDark.png",
        document.getElementById("sideNavBar").style.color = "#005BAA",
        document.getElementById("floatBtnID").style.backgroundColor = "#005BAA",
        document.getElementById("volumeUp").style.color = "#005BAA",
        document.getElementById("volumeDown").style.color = "#005BAA",
        audioSlider(false)
        break;
      case "Chill09":
        player.loadVideoById("e97w-GHsRMY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/InYourChill(Chill09)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill10":
        player.loadVideoById("Zgf4-fIUKec")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/LofiGeek(Chill10)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill11":
        player.loadVideoById("zamNv893kHI")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/LofiGeek(Chill11)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill12":
        player.loadVideoById("5qap5aO4i9A")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/LofiGirl(Chill12)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Chill13":
        player.loadVideoById("DWcJFNfaw9c")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Chill/LofiGirl(Chill13)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
        
      case "Coffee01":
        player.loadVideoById("DrmcAh2FRHQ")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Coffee/CoffeeShopVibes(Coffee01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Coffee02":
        player.loadVideoById("ORBwkXsUNEs")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Coffee/LofiGeek(Coffee02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Coffee03":
        player.loadVideoById("-5KAN9_CzSA")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Coffee/Steezyasfuck(Coffee03)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "HipHop01":
        player.loadVideoById("5yx6BWlEVcY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/HipHop/ChillHop(HipHop01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "HipHop02":
        player.loadVideoById("6ePPgPoMrjI")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/HipHop/College(HipHop02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_LogoDark.png",
        document.getElementById("sideNavBar").style.color = "#005BAA",
        document.getElementById("floatBtnID").style.backgroundColor = "#005BAA",
        document.getElementById("volumeUp").style.color = "#005BAA",
        document.getElementById("volumeDown").style.color = "#005BAA",
        audioSlider(false)
        break;
      case "HipHop03":
        player.loadVideoById("IjMESxJdWkg")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/HipHop/Nourish(HipHop03)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "HipHop04":
        player.loadVideoById("xgirCNccI68")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/HipHop/Steezyasfuck(HipHop04)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "Japanese01":
        player.loadVideoById("-9gEgshJUuY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/LofiGeek(Japanese01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Japanese02":
        player.loadVideoById("LfKXLfmIq4k")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/LofiGeek(Japanese02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Japanese03":
        player.loadVideoById("jWIqKujW0NY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/LofiGeek(Japanese03)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_LogoDark.png",
        document.getElementById("sideNavBar").style.color = "#005BAA",
        document.getElementById("floatBtnID").style.backgroundColor = "#005BAA",
        document.getElementById("volumeUp").style.color = "#005BAA",
        document.getElementById("volumeDown").style.color = "#005BAA",
        audioSlider(false)
        break;
      case "Japanese04":
        player.loadVideoById("3sp0wd8j8CQ")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/MrMomo(Japanese04)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Japanese05":
        player.loadVideoById("kZiT0J6lYRo")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/MrMomo(Japanese05)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Japanese06":
        player.loadVideoById("kJ3gKk-Zu-8"),
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Japanese/MrMomo(Japanese06)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "Programming01":
        player.loadVideoById("esX7SFtEjHg"),
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Programming/CodePioneers(Programming01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Programming02":
        player.loadVideoById("VIK2moz9eTQ")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Programming/CodePioneers(Programming02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "Space01":
        player.loadVideoById("G4BFBy_9xOg")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Space/LofiGeek(Space01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Space02":
        player.loadVideoById("ZSxeoa6YjbI")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Space/LofiGeek(Space02)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Space03":
        player.loadVideoById("Qt0-9mO-ZXY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Space/LofiGeek(Space03)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;
      case "Space04":
        player.loadVideoById("N-xNGZda6FY")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Space/TpyxaArt(Space04)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

      case "Anime01":
        player.loadVideoById("WDXPJWIgX-o")
        document.getElementById("allPage").style.backgroundImage = "url('imgs/lofiWallpapers/Anime/Nostalgic(Anime01)Exported.jpg')",
        document.getElementById("logo").src = "imgs/logo/MoodFi_Logo.png",
        document.getElementById("sideNavBar").style.color = "#FFD201",
        document.getElementById("floatBtnID").style.backgroundColor = "#FFD201",
        document.getElementById("volumeUp").style.color = "#FFD201",
        document.getElementById("volumeDown").style.color = "#FFD201",
        audioSlider(true)
        break;

    }
  }


/* -REFERENCES- */


/* EXTERNAL SOCIAL MEDIA LINKS OF LOFI LIVESTREAMS */

/* LOFI GIRL */
function lofiGirlYT_func() {
  ipcRenderer.send("lofiGirlYT");
}
function lofiGirlWebSite_func() {
  ipcRenderer.send("lofiGirlWebSite");
}
function lofiGirlPlaylist_func() {
  ipcRenderer.send("lofiGirlPlaylist");
}

/* CHILLED EMPIRE */
function chilledEmpireYT_func() {
  ipcRenderer.send("chilledEmpireYT");
}
function chilledEmpireDiscord_func() {
  ipcRenderer.send("chilledEmpireDiscord");
}
function chilledEmpireSpotify_func() {
  ipcRenderer.send("chilledEmpireSpotify");
}

/* CHILL HOP */
function chillHopYT_func() {
  ipcRenderer.send("chillHopYT");
}
function chillHopWebSite_func() {
  ipcRenderer.send("chillHopWebSite");
}
function chillHopPlaylist_func() {
  ipcRenderer.send("chillHopPlaylist");
}

/* CODE PIONEERS */
function codePioneersYT_func() {
  ipcRenderer.send("codePioneersYT");
}
function codePioneersWebSite_func() {
  ipcRenderer.send("codePioneersWebSite");
}
function codePioneersSpotify_func() {
  ipcRenderer.send("codePioneersSpotify");
}

/* COFFEE SHOP */
function coffeeShopYT_func() {
  ipcRenderer.send("coffeeShopYT");
}
function coffeeShopSpotify_func() {
  ipcRenderer.send("coffeeShopSpotify");
}

/* COLLEGE MUSIC */
function collegeMusicYT_func() {
  ipcRenderer.send("collegeMusicYT");
}
function collegeMusicInstagram_func() {
  ipcRenderer.send("collegeMusicInstagram");
}
function collegeMusicPlaylist_func() {
  ipcRenderer.send("collegeMusicPlaylist");
}

/* DREAM HOP */
function dreamHopYT_func() {
  ipcRenderer.send("dreamHopYT");
}
function dreamHopWebSite_func() {
  ipcRenderer.send("dreamHopWebSite");
}
function dreamHopPlaylist_func() {
  ipcRenderer.send("dreamHopPlaylist");
}

/* NOURISH */
function nourishYT_func() {
  ipcRenderer.send("nourishYT");
}
function nourishWebSite_func() {
  ipcRenderer.send("nourishWebSite");
}
function nourishSpotify_func() {
  ipcRenderer.send("nourishSpotify");
}

/* IN YOUR CHILL */
function inYourChillYT_func() {
  ipcRenderer.send("inYourChillYT");
}
function inYourChillWebSite_func() {
  ipcRenderer.send("inYourChillWebSite");
}
function inYourChillSpotify_func() {
  ipcRenderer.send("inYourChillSpotify");
}

/* LOFI GEEK */
function lofiGeekYT_func() {
  ipcRenderer.send("lofiGeekYT");
}
function lofiGeekInstagram_func() {
  ipcRenderer.send("lofiGeekInstagram");
}
function lofiGeekSpotify_func() {
  ipcRenderer.send("lofiGeekSpotify");
}

/* MR MOMO */
function mrMomoYT_func() {
  ipcRenderer.send("mrMomoYT");
}
function mrMomoDiscord_func() {
  ipcRenderer.send("mrMomoDiscord");
}
function mrMomoSpotify_func() {
  ipcRenderer.send("mrMomoSpotify");
}

/* NOSTALGIC */
function nostalgicYT_func() {
  ipcRenderer.send("nostalgicYT");
}
function nostalgicStore_func() {
  ipcRenderer.send("nostalgicStore");
}
function nostalgicPlaylist_func() {
  ipcRenderer.send("nostalgicPlaylist");
}

/* STEEZ YAS FUCK */
function steezYasFuckYT_func() {
  ipcRenderer.send("steezYasFuckYT");
}
function steezYasFuckWebSite_func() {
  ipcRenderer.send("steezYasFuckWebSite");
}
function steezYasFuckSpotify_func() {
  ipcRenderer.send("steezYasFuckSpotify");
}

/* TPYXA ART */
function tpyxaArtYT_func() {
  ipcRenderer.send("tpyxaArtYT");
}
function tpyxaArtWebSite_func() {
  ipcRenderer.send("tpyxaArtWebSite");
}
function tpyxaArtInstagram_func() {
  ipcRenderer.send("tpyxaArtInstagram");
}


/* -SETTINGS- */


/* CHANGE APP LANGUAGE (EN/PT-BR) */

/* Check, in the beginning, if the language data exists. If there's nothing, use the default value */
ipcRenderer.send("langSaved");

/* After checking if there's some data about the language, this function gets the data and applies it */
ipcRenderer.on("applyLang", function (event, data) {
  switch(data){
    case "en":
      document.getElementById("Discover").textContent = "Discover",
      document.getElementById("References").textContent = "References",
      document.getElementById("Settings").textContent = "Settings",

      document.getElementById("All").textContent = "All",
      document.getElementById("Chill").textContent = "Chill",
      document.getElementById("Coffee").textContent = "Coffee",
      document.getElementById("Hip Hop").textContent = "Hip Hop",
      document.getElementById("Anime").textContent = "Anime",
      document.getElementById("Japanese").textContent = "Japanese",
      document.getElementById("Programming").textContent = "Programming",
      document.getElementById("Space").textContent = "Space",
      document.getElementById("VHS").textContent = "VHS",

      document.getElementById("languageTitle").textContent = "Language:",
      document.getElementById("enLang").textContent = "English",
      document.getElementById("pt-brLang").textContent = "Portuguese",
      document.getElementById("darkLight").textContent = "Dark/Light Mode:",

      document.getElementById("langSelection").value = "en"
      break;
    case "pt-br":
      document.getElementById("Discover").textContent = "Descobrir",
      document.getElementById("References").textContent = "Referências",
      document.getElementById("Settings").textContent = "Ajustes",

      document.getElementById("All").textContent = "Tudo",
      document.getElementById("Chill").textContent = "Relaxar",
      document.getElementById("Coffee").textContent = "Café",
      document.getElementById("Japanese").textContent = "Japonês",
      document.getElementById("Programming").textContent = "Programação",
      document.getElementById("Space").textContent = "Espaço",

      document.getElementById("languageTitle").textContent = "Linguagem:",
      document.getElementById("enLang").textContent = "Inglês",
      document.getElementById("pt-brLang").textContent = "Português",
      document.getElementById("darkLight").textContent = "Modo Escuro/Claro:",

      document.getElementById("langSelection").value = "pt-br"
      break;
  }
});

/* Save the language option when the user changes it */
function Language(lang) {
  switch(lang){
    case "en":
      document.getElementById("Discover").textContent = "Discover",
      document.getElementById("References").textContent = "References",
      document.getElementById("Settings").textContent = "Settings",

      document.getElementById("All").textContent = "All",
      document.getElementById("Chill").textContent = "Chill",
      document.getElementById("Coffee").textContent = "Coffee",
      document.getElementById("Hip Hop").textContent = "Hip Hop",
      document.getElementById("Anime").textContent = "Anime",
      document.getElementById("Japanese").textContent = "Japanese",
      document.getElementById("Programming").textContent = "Programming",
      document.getElementById("Space").textContent = "Space",
      document.getElementById("VHS").textContent = "VHS",

      document.getElementById("languageTitle").textContent = "Language:",
      document.getElementById("enLang").textContent = "English",
      document.getElementById("pt-brLang").textContent = "Portuguese",
      document.getElementById("darkLight").textContent = "Dark/Light Mode:",

      ipcRenderer.send("saveLang", lang)
      break;
    case "pt-br":
      document.getElementById("Discover").textContent = "Descobrir",
      document.getElementById("References").textContent = "Referências",
      document.getElementById("Settings").textContent = "Ajustes",

      document.getElementById("All").textContent = "Tudo",
      document.getElementById("Chill").textContent = "Relaxar",
      document.getElementById("Coffee").textContent = "Café",
      document.getElementById("Japanese").textContent = "Japonês",
      document.getElementById("Programming").textContent = "Programação",
      document.getElementById("Space").textContent = "Espaço",

      document.getElementById("languageTitle").textContent = "Linguagem:",
      document.getElementById("enLang").textContent = "Inglês",
      document.getElementById("pt-brLang").textContent = "Português",
      document.getElementById("darkLight").textContent = "Modo Escuro/Claro:",

      ipcRenderer.send("saveLang", lang)
      break;
  }
}


/* CHANGE APP LANGUAGE (EN/PT-BR) */

/* Check, in the beginning, if the language data exists. If there's nothing, use the default value */
  ipcRenderer.send("themeSaved");

  /* After checking if there's some data about the language, this function gets the data and applies it */
  ipcRenderer.on("applyTheme", function (event, data) {
    if (data == "true"){
      document.getElementById("mySidenav").style.backgroundColor = "#181818";

      document.getElementById("closeNav").style.color = "#dee2e6";
      document.getElementById("minimize").style.color = "#dee2e6";
      document.getElementById("maximizeID").style.color = "#dee2e6";
      document.getElementById("exit").style.color = "#dee2e6";

      document.getElementById("Discover").style.color = "#dee2e6";
      document.getElementById("References").style.color = "#dee2e6";
      document.getElementById("Settings").style.color = "#dee2e6";

      document.getElementById("languageTitle").style.color = "#dee2e6";
      document.getElementById("darkLight").style.color = "#dee2e6";

      document.getElementById("lofiCardID").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID2").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID3").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID4").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID5").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID6").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID7").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID8").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID9").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID10").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID11").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID12").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID13").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID14").style.backgroundColor = "#263238";

      document.getElementById("lofiYT").style.color = "#dee2e6";
      document.getElementById("lofiYT2").style.color = "#dee2e6";
      document.getElementById("lofiYT3").style.color = "#dee2e6";
      document.getElementById("lofiYT4").style.color = "#dee2e6";
      document.getElementById("lofiYT5").style.color = "#dee2e6";
      document.getElementById("lofiYT6").style.color = "#dee2e6";
      document.getElementById("lofiYT7").style.color = "#dee2e6";
      document.getElementById("lofiYT8").style.color = "#dee2e6";
      document.getElementById("lofiYT9").style.color = "#dee2e6";
      document.getElementById("lofiYT10").style.color = "#dee2e6";
      document.getElementById("lofiYT11").style.color = "#dee2e6";
      document.getElementById("lofiYT12").style.color = "#dee2e6";
      document.getElementById("lofiYT13").style.color = "#dee2e6";
      document.getElementById("lofiYT14").style.color = "#dee2e6";

      document.getElementById("lofiDesktopStore").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore2").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore3").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore4").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore5").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore6").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore7").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore8").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore9").style.color = "#dee2e6";

      document.getElementById("lofiPlaylist").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist2").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist3").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist4").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist5").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist6").style.color = "#dee2e6";

      document.getElementById("lofiSpotify").style.color = "#dee2e6";
      document.getElementById("lofiSpotify2").style.color = "#dee2e6";
      document.getElementById("lofiSpotify3").style.color = "#dee2e6";
      document.getElementById("lofiSpotify4").style.color = "#dee2e6";
      document.getElementById("lofiSpotify5").style.color = "#dee2e6";
      document.getElementById("lofiSpotify6").style.color = "#dee2e6";
      document.getElementById("lofiSpotify7").style.color = "#dee2e6";

      document.getElementById("lofiInstagram").style.color = "#dee2e6";
      document.getElementById("lofiInstagram2").style.color = "#dee2e6";
      document.getElementById("lofiInstagram3").style.color = "#dee2e6";

      document.getElementById("lofiDiscord").style.color = "#dee2e6";
      document.getElementById("lofiDiscord2").style.color = "#dee2e6";

      document.getElementById("themeCheckbox").checked = true;

    }else if(data == "false"){
      document.getElementById("mySidenav").style.backgroundColor = "#FBFBFB";

      document.getElementById("closeNav").style.color = "#263238";
      document.getElementById("minimize").style.color = "#263238";
      document.getElementById("maximizeID").style.color = "#263238";
      document.getElementById("exit").style.color = "#263238";

      document.getElementById("Discover").style.color = "#383838";
      document.getElementById("References").style.color = "#383838";
      document.getElementById("Settings").style.color = "#383838";

      document.getElementById("languageTitle").style.color = "#383838";
      document.getElementById("darkLight").style.color = "#383838";

      document.getElementById("lofiCardID").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID2").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID3").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID4").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID5").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID6").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID7").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID8").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID9").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID10").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID11").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID12").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID13").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID14").style.backgroundColor = "#dee2e6";

      document.getElementById("lofiYT").style.color = "#383838";
      document.getElementById("lofiYT2").style.color = "#383838";
      document.getElementById("lofiYT3").style.color = "#383838";
      document.getElementById("lofiYT4").style.color = "#383838";
      document.getElementById("lofiYT5").style.color = "#383838";
      document.getElementById("lofiYT6").style.color = "#383838";
      document.getElementById("lofiYT7").style.color = "#383838";
      document.getElementById("lofiYT8").style.color = "#383838";
      document.getElementById("lofiYT9").style.color = "#383838";
      document.getElementById("lofiYT10").style.color = "#383838";
      document.getElementById("lofiYT11").style.color = "#383838";
      document.getElementById("lofiYT12").style.color = "#383838";
      document.getElementById("lofiYT13").style.color = "#383838";
      document.getElementById("lofiYT14").style.color = "#383838";

      document.getElementById("lofiDesktopStore").style.color = "#383838";
      document.getElementById("lofiDesktopStore2").style.color = "#383838";
      document.getElementById("lofiDesktopStore3").style.color = "#383838";
      document.getElementById("lofiDesktopStore4").style.color = "#383838";
      document.getElementById("lofiDesktopStore5").style.color = "#383838";
      document.getElementById("lofiDesktopStore6").style.color = "#383838";
      document.getElementById("lofiDesktopStore7").style.color = "#383838";
      document.getElementById("lofiDesktopStore8").style.color = "#383838";
      document.getElementById("lofiDesktopStore9").style.color = "#383838";

      document.getElementById("lofiPlaylist").style.color = "#383838";
      document.getElementById("lofiPlaylist2").style.color = "#383838";
      document.getElementById("lofiPlaylist3").style.color = "#383838";
      document.getElementById("lofiPlaylist4").style.color = "#383838";
      document.getElementById("lofiPlaylist5").style.color = "#383838";
      document.getElementById("lofiPlaylist6").style.color = "#383838";

      document.getElementById("lofiSpotify").style.color = "#383838";
      document.getElementById("lofiSpotify2").style.color = "#383838";
      document.getElementById("lofiSpotify3").style.color = "#383838";
      document.getElementById("lofiSpotify4").style.color = "#383838";
      document.getElementById("lofiSpotify5").style.color = "#383838";
      document.getElementById("lofiSpotify6").style.color = "#383838";
      document.getElementById("lofiSpotify7").style.color = "#383838";

      document.getElementById("lofiInstagram").style.color = "#383838";
      document.getElementById("lofiInstagram2").style.color = "#383838";
      document.getElementById("lofiInstagram3").style.color = "#383838";

      document.getElementById("lofiDiscord").style.color = "#383838";
      document.getElementById("lofiDiscord2").style.color = "#383838";

      document.getElementById("themeCheckbox").checked = false;

    } 
  });

  /* Save the language option when the user changes it */
  function ThemeMode() {
    if (document.getElementById("themeCheckbox").checked == true){
      document.getElementById("mySidenav").style.backgroundColor = "#181818";

      document.getElementById("closeNav").style.color = "#dee2e6";
      document.getElementById("minimize").style.color = "#dee2e6";
      document.getElementById("maximizeID").style.color = "#dee2e6";
      document.getElementById("exit").style.color = "#dee2e6";

      document.getElementById("Discover").style.color = "#dee2e6";
      document.getElementById("References").style.color = "#dee2e6";
      document.getElementById("Settings").style.color = "#dee2e6";

      document.getElementById("languageTitle").style.color = "#dee2e6";
      document.getElementById("darkLight").style.color = "#dee2e6";

      document.getElementById("lofiCardID").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID2").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID3").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID4").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID5").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID6").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID7").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID8").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID9").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID10").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID11").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID12").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID13").style.backgroundColor = "#263238";
      document.getElementById("lofiCardID14").style.backgroundColor = "#263238";

      document.getElementById("lofiYT").style.color = "#dee2e6";
      document.getElementById("lofiYT2").style.color = "#dee2e6";
      document.getElementById("lofiYT3").style.color = "#dee2e6";
      document.getElementById("lofiYT4").style.color = "#dee2e6";
      document.getElementById("lofiYT5").style.color = "#dee2e6";
      document.getElementById("lofiYT6").style.color = "#dee2e6";
      document.getElementById("lofiYT7").style.color = "#dee2e6";
      document.getElementById("lofiYT8").style.color = "#dee2e6";
      document.getElementById("lofiYT9").style.color = "#dee2e6";
      document.getElementById("lofiYT10").style.color = "#dee2e6";
      document.getElementById("lofiYT11").style.color = "#dee2e6";
      document.getElementById("lofiYT12").style.color = "#dee2e6";
      document.getElementById("lofiYT13").style.color = "#dee2e6";
      document.getElementById("lofiYT14").style.color = "#dee2e6";

      document.getElementById("lofiDesktopStore").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore2").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore3").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore4").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore5").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore6").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore7").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore8").style.color = "#dee2e6";
      document.getElementById("lofiDesktopStore9").style.color = "#dee2e6";

      document.getElementById("lofiPlaylist").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist2").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist3").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist4").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist5").style.color = "#dee2e6";
      document.getElementById("lofiPlaylist6").style.color = "#dee2e6";

      document.getElementById("lofiSpotify").style.color = "#dee2e6";
      document.getElementById("lofiSpotify2").style.color = "#dee2e6";
      document.getElementById("lofiSpotify3").style.color = "#dee2e6";
      document.getElementById("lofiSpotify4").style.color = "#dee2e6";
      document.getElementById("lofiSpotify5").style.color = "#dee2e6";
      document.getElementById("lofiSpotify6").style.color = "#dee2e6";
      document.getElementById("lofiSpotify7").style.color = "#dee2e6";

      document.getElementById("lofiInstagram").style.color = "#dee2e6";
      document.getElementById("lofiInstagram2").style.color = "#dee2e6";
      document.getElementById("lofiInstagram3").style.color = "#dee2e6";

      document.getElementById("lofiDiscord").style.color = "#dee2e6";
      document.getElementById("lofiDiscord2").style.color = "#dee2e6";

      ipcRenderer.send("saveTheme", "true");

    }else{
      document.getElementById("mySidenav").style.backgroundColor = "#FBFBFB";

      document.getElementById("closeNav").style.color = "#263238";
      document.getElementById("minimize").style.color = "#263238";
      document.getElementById("maximizeID").style.color = "#263238";
      document.getElementById("exit").style.color = "#263238";

      document.getElementById("Discover").style.color = "#383838";
      document.getElementById("References").style.color = "#383838";
      document.getElementById("Settings").style.color = "#383838";

      document.getElementById("languageTitle").style.color = "#383838";
      document.getElementById("darkLight").style.color = "#383838";

      document.getElementById("lofiCardID").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID2").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID3").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID4").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID5").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID6").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID7").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID8").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID9").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID10").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID11").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID12").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID13").style.backgroundColor = "#dee2e6";
      document.getElementById("lofiCardID14").style.backgroundColor = "#dee2e6";

      document.getElementById("lofiYT").style.color = "#383838";
      document.getElementById("lofiYT2").style.color = "#383838";
      document.getElementById("lofiYT3").style.color = "#383838";
      document.getElementById("lofiYT4").style.color = "#383838";
      document.getElementById("lofiYT5").style.color = "#383838";
      document.getElementById("lofiYT6").style.color = "#383838";
      document.getElementById("lofiYT7").style.color = "#383838";
      document.getElementById("lofiYT8").style.color = "#383838";
      document.getElementById("lofiYT9").style.color = "#383838";
      document.getElementById("lofiYT10").style.color = "#383838";
      document.getElementById("lofiYT11").style.color = "#383838";
      document.getElementById("lofiYT12").style.color = "#383838";
      document.getElementById("lofiYT13").style.color = "#383838";
      document.getElementById("lofiYT14").style.color = "#383838";

      document.getElementById("lofiDesktopStore").style.color = "#383838";
      document.getElementById("lofiDesktopStore2").style.color = "#383838";
      document.getElementById("lofiDesktopStore3").style.color = "#383838";
      document.getElementById("lofiDesktopStore4").style.color = "#383838";
      document.getElementById("lofiDesktopStore5").style.color = "#383838";
      document.getElementById("lofiDesktopStore6").style.color = "#383838";
      document.getElementById("lofiDesktopStore7").style.color = "#383838";
      document.getElementById("lofiDesktopStore8").style.color = "#383838";
      document.getElementById("lofiDesktopStore9").style.color = "#383838";

      document.getElementById("lofiPlaylist").style.color = "#383838";
      document.getElementById("lofiPlaylist2").style.color = "#383838";
      document.getElementById("lofiPlaylist3").style.color = "#383838";
      document.getElementById("lofiPlaylist4").style.color = "#383838";
      document.getElementById("lofiPlaylist5").style.color = "#383838";
      document.getElementById("lofiPlaylist6").style.color = "#383838";

      document.getElementById("lofiSpotify").style.color = "#383838";
      document.getElementById("lofiSpotify2").style.color = "#383838";
      document.getElementById("lofiSpotify3").style.color = "#383838";
      document.getElementById("lofiSpotify4").style.color = "#383838";
      document.getElementById("lofiSpotify5").style.color = "#383838";
      document.getElementById("lofiSpotify6").style.color = "#383838";
      document.getElementById("lofiSpotify7").style.color = "#383838";

      document.getElementById("lofiInstagram").style.color = "#383838";
      document.getElementById("lofiInstagram2").style.color = "#383838";
      document.getElementById("lofiInstagram3").style.color = "#383838";

      document.getElementById("lofiDiscord").style.color = "#383838";
      document.getElementById("lofiDiscord2").style.color = "#383838";

      ipcRenderer.send("saveTheme", "false");

    } 
  }