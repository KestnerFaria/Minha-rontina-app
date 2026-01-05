
export async function initNotifications() {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("/sw.js");
    if (Notification.permission !== "granted") {
      await Notification.requestPermission();
    }
  }
}
