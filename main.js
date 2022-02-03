const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  // Créer la fenêtre.
  win = new BrowserWindow({
    width: 700,
    height: 600,
    backgroundColor: "#d4ffe8",
    resizable: false,
  });
  //Charge le point de départ de l'application.
  win.loadURL(`file://${__dirname}/dist/jocangulectron/index.html`);

  //Action pour fermer la fenêtre de l'application.
  win.on("closed", function () {
    win = null;
  });
}

// Créer la fenêtre lors de l'initatialisation de l'application Electron.
app.on("ready", createWindow);

// Quitte l'apllciation lorsque toutes les fenêtres sont fermées.
app.on("window-all-closed", function () {
  // Fonctionnement spécifique à macOS.
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // processus de recréation de la fenêtre d'applciation (specifique à macOS).
  if (win === null) {
    createWindow();
  }
});
