
class LibraryKiosk {
   open(app) {
      console.log(`Opening ${app}`);
   }
   connectTo(website) {
      console.log("Connecting to " + website);
   }
}

class ProxyLibraryKiosk {
   constructor() {
      this._libraryKiosk = new LibraryKiosk();
      this._blockedSites = ["fb.com", "instagram.com", "snapchat.com", "google.com", "gmail.com"];
      this._blockedApps = ["camera", "photos", "music", "settings"];
   }

   open(app) {
      if (this._blockedApps.includes(app)) {
         console.error(`You can't access the ${app}`);
      } else {
         this._libraryKiosk.open(app);
      }
   }

   connectTo(website) {
      if (this._blockedSites.includes(website)) {
         console.error(`Access to ${website} denied`);
      } else {
         this._libraryKiosk.connectTo(website);
      }
   }
}

const libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open("photos");
libraryKiosk.open("Chrome");
libraryKiosk.connectTo("booksportal.com");
libraryKiosk.connectTo("google.com"); 