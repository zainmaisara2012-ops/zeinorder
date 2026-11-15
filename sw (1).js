try{
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyD--9VNTvFlQNatb7Hwebo7R4U89HL6wpM",authDomain:"zienorder.firebaseapp.com",projectId:"zienorder",storageBucket:"zienorder.firebasestorage.app",messagingSenderId:"413824150655",appId:"1:413824150655:web:1f310da38b071f6146a34a"});
firebase.messaging();
}catch(e){}
const C='zo-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','icon-192.png'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));
});
