self.importScripts('./service-functions.js');

const staticCacheName = 'my-cache';

const assets = [
    'datos.json' //Se agrega este archivo para verificar que se quite del caché al recibir el push desde servidor
];

//applicationServerKey definido en service-functions.js
const optionsSubscriber = { applicationServerKey, userVisibleOnly: true };

self.addEventListener('install', event =>
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => cache.addAll(assets))
    )
);

self.addEventListener('activate', async () => {
    try {
        const subscription = await self.registration.pushManager.subscribe(optionsSubscriber);
        const response = await saveSubscription(subscription); //saveSubscription definido en service-functions.js
        console.log('Respuesta de la suscripción:', response);
    } catch (err) {
        console.log('Error', err);
    }
});

self.addEventListener("push", async event => {
    if (event.data) {
        const { cmd } = await event.data.json();

        showLocalNotification("Mensaje desde node", `Comando enviado: ${cmd}`, self.registration); //showLocalNotification definido en service-functions.js

        //Al recibir el push, quitamos el archivo del caché
        caches.open(staticCacheName).then(cache => {
            cache.delete('datos.json');
        });

        console.log('Revise el almacenamiento en caché... datos.json ha sido removido!');
    } 
    else {
        console.log('No se enviaron datos!');
    }
});

//Sistema de control de caché. Si se quiere guardar cualquier solicitud (js, css, html, apis, etc) quitar comentarios.
/*self.addEventListener('fetch', event => {
    event.respondWith(
        caches
            .match(event.request, { ignoreVary: true })
            .then(cacheRes =>
                cacheRes ||
                fetch(event.request)
                    .then(fetchRes => {
                        if (fetchRes.status !== 404 && fetchRes.status !== 500) {
                            return caches.open(staticCacheName)
                                .then(cache => {
                                    cache.put(event.request.url, fetchRes.clone());
                                    return fetchRes;
                                });
                        }
                        return fetchRes;
                    })
            )
            .catch(event => {
                
            })
    );
});*/