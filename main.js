// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, webContents} = require('electron')
const path = require('path')
const shell = require('electron')
const { umask } = require('process')

const Store = require('electron-store');
const storage = new Store();

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight:600,
    minWidth:800,
    resizable:true,
    transparent:false,
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation:false,
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')


  /* WINDOW RESIZE OPTIONS */
  
  ipcMain.on("minimize", (event, data) => {
    mainWindow.minimize();
  });
  
  ipcMain.on("maximize", (event, data) => {
    if(mainWindow.isMaximized()){
      mainWindow.unmaximize();
    }else{
      mainWindow.maximize();
    }
  });
  /* Maximize button visual change */
  mainWindow.on('maximize', () => {
    mainWindow.webContents.executeJavaScript(`document.getElementById("maximize").className = "fa-solid fa-window-maximize fa-1x";`)
  });
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.executeJavaScript(`document.getElementById("maximize").className = "fa-regular fa-window-maximize fa-1x";`)
  });

  ipcMain.on("close", (event, data) => {
    mainWindow.close();
  });

  /* MY EXTERNAL SOCIAL MEDIA LINKS */

  ipcMain.on("myYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCjUBsUWjcN_cm1vOtnWLQCQ`);
  });
  ipcMain.on("myGithub", (event, data) => {
    require('electron').shell.openExternal(`https://github.com/KaykyDeSouzaDias`);
  });
  ipcMain.on("myLinkedin", (event, data) => {
    require('electron').shell.openExternal(`https://www.linkedin.com/in/kayky-de-souza-dias-514a431bb/`);
  });


  /* EXTERNAL SOCIAL MEDIA LINKS OF LOFI LIVESTREAMS */

  /* LOFI GIRL */
  ipcMain.on("lofiGirlYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow`);
  });
  ipcMain.on("lofiGirlWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://lofigirl.com/`);
  });
  ipcMain.on("lofiGirlPlaylist", (event, data) => {
    require('electron').shell.openExternal(`https://fanlink.to/lofigirl-music`);
  });

  /* CHILLED EMPIRE */
  ipcMain.on("chilledEmpireYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCxWNEhY-SNHRvF9Q2LWLK1g`);
  });
  ipcMain.on("chilledEmpireDiscord", (event, data) => {
    require('electron').shell.openExternal(`https://discord.com/invite/34SfKKWJsa`);
  });
  ipcMain.on("chilledEmpireSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/1zrtlf4hnwbntox304gl42zvb`);
  });

  /* CHILL HOP */
  ipcMain.on("chillHopYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg`);
  });
  ipcMain.on("chillHopWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://chillhop.com/`);
  });
  ipcMain.on("chillHopPlaylist", (event, data) => {
    require('electron').shell.openExternal(`https://chillhop.ffm.to/winter2021.oyd`);
  });

  /* CODE PIONEERS */
  ipcMain.on("codePioneersYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UC9rvsIHgzuiwTQ-yi0Qj2Mw`);
  });
  ipcMain.on("codePioneersWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://codepioneers.myspreadshop.com/`);
  });
  ipcMain.on("codePioneersSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/12140951657`);
  });

  /* COFFEE SHOP */
  ipcMain.on("coffeeShopYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCJIOFQLGwB3GH9K9waxwynQ`);
  });
  ipcMain.on("coffeeShopSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/8x2t71wi5csb4w3nvd2elqaur`);
  });

  /* COLLEGE MUSIC */
  ipcMain.on("collegeMusicYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCWzZ5TIGoZ6o-KtbGCyhnhg`);
  });
  ipcMain.on("collegeMusicInstagram", (event, data) => {
    require('electron').shell.openExternal(`https://www.instagram.com/collegemusic/`);
  });
  ipcMain.on("collegeMusicPlaylist", (event, data) => {
    require('electron').shell.openExternal(`https://collegemusic.fanlink.to/lofi`);
  });

  /* DREAM HOP */
  ipcMain.on("dreamHopYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCz9_4daWw-uWuqeB6_IkhMg`);
  });
  ipcMain.on("dreamHopWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://dreamhopmusic.com/`);
  });
  ipcMain.on("dreamHopPlaylist", (event, data) => {
    require('electron').shell.openExternal(`https://dreamhop.biglink.to/socialmedia`);
  });

  /* NOURISH */
  ipcMain.on("nourishYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/c/nourish`);
  });
  ipcMain.on("nourishWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://www.nourish.live/`);
  });
  ipcMain.on("nourishSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/nourish.`);
  });

  /* IN YOUR CHILL */
  ipcMain.on("inYourChillYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCncxHd8o_VhhHAJ7QqB5azg`);
  });
  ipcMain.on("inYourChillWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://inyourchill.com/`);
  });
  ipcMain.on("inYourChillSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/ersxxojg18hnzmir1jweb1oav`);
  });

  /* LOFI GEEK */
  ipcMain.on("lofiGeekYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCyD59CI7beJDU493glZpxgA`);
  });
  ipcMain.on("lofiGeekInstagram", (event, data) => {
    require('electron').shell.openExternal(`https://www.instagram.com/lofigeek/`);
  });
  ipcMain.on("lofiGeekSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/gnrxfzm8d2qxrxsfzs7ox76mp`);
  });

  /* MR MOMO */
  ipcMain.on("mrMomoYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UC2fVSthyWxWSjsiEAHPzriQ`);
  });
  ipcMain.on("mrMomoDiscord", (event, data) => {
    require('electron').shell.openExternal(`https://discord.com/invite/6SGnSpCkhy`);
  });
  ipcMain.on("mrMomoSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/5d1b0gqu0dfb3isrwhzmp7fmu`);
  });

  /* NOSTALGIC */
  ipcMain.on("nostalgicYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCPPGd9KtOnMKRoIQOHWAbow`);
  });
  ipcMain.on("nostalgicStore", (event, data) => {
    require('electron').shell.openExternal(`https://nostalgic-14.creator-spring.com/`);
  });
  ipcMain.on("nostalgicPlaylist", (event, data) => {
    require('electron').shell.openExternal(`https://ffm.to/anifi`);
  });

  /* STEEZ YAS FUCK */
  ipcMain.on("steezYasFuckYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg`);
  });
  ipcMain.on("steezYasFuckWebSite", (event, data) => {
    require('electron').shell.openExternal(`https://www.stzzzy.com/`);
  });
  ipcMain.on("steezYasFuckSpotify", (event, data) => {
    require('electron').shell.openExternal(`https://open.spotify.com/user/stzzzy`);
  });

  /* TPYXA ART */
  ipcMain.on("tpyxaArtYT", (event, data) => {
    require('electron').shell.openExternal(`https://www.youtube.com/channel/UCz2uLs6U6iSoyCKqqkLAa5A`);
  });
  ipcMain.on("tpyxaArtWebSite", (event, data) => {
    require('electron').shell.openExternal(`http://tpyxa.art/`);
  });
  ipcMain.on("tpyxaArtInstagram", (event, data) => {
    require('electron').shell.openExternal(`https://www.instagram.com/tpyxa.art/`);
  });


  /* ---OPTION MENU--- */

  /* Save language option */
  ipcMain.on("saveLang", (event, data) => {
    storage.set("lang", data);
  });
  
  /* Check if there's a language option data, if not use default value */
  ipcMain.on("langSaved", (event, data) => {
    const defaultLang = ["en"];
  
    const lang = storage.get("lang");
    if (lang) {
      event.sender.send("applyLang", lang);
      return lang;
    }
    else{
      storage.set("lang", defaultLang);
      event.sender.send("applyLang", lang);
      return defaultLang;
    }
  });
  
  /* Save theme option */
  ipcMain.on("saveTheme", (event, data) => {
    storage.set("theme", data);
  });
  
  /* Check if there's a theme option data, if not use default value */
  ipcMain.on("themeSaved", (event, data) => {
    const defaultTheme = ["true"];
  
    const theme = storage.get("theme");
    if (theme) {
      event.sender.send("applyTheme", theme);
      return theme;
    }
    else{
      storage.set("theme", defaultTheme);
      event.sender.send("applyTheme", theme);
      return defaultTheme;
    }
  });
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})