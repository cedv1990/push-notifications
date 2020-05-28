const applicationServerKey = (() => {
    const base64String = 'BABU69DGxW0-rzUdEYDGG2xHAMQROl5RV8QD6Zuxjdoj5RBOcZKGLKw4D_YglTMBjyuL5rdTPyl_I64rnKKuKkc'; //Public key generado (el mismo de server/push-manager.js). ¡No usarla!
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
})();

//Llamado del endpoint de persistencia de la suscripción
const saveSubscription = async subscription => {
    const SERVER_URL = 'http://localhost:4000/save-subscription'
    const response = await fetch(SERVER_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
    })
    return response.json();
};

//Muestra una notificación de escritorio
const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body
        // otras propiedades como: icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
};