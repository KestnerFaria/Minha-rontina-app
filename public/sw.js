
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("message", e => {
  if (e.data.type === "NOTIFY") {
    self.registration.showNotification(e.data.title, {
      body: e.data.body
    });
  }
});
