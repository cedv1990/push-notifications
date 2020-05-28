const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importaciones de archivos de base de datos y push
const { sendPushNotification } = require('./push-manager');
const { saveSubscription, getSubscription } = require('./database-manager');

const port = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('No debería navegar acá, señor!'));

//Endpoint que persiste la suscripción del cliente
app.post('/save-subscription', async (req, res) => {
    const subscription = req.body;
    await saveSubscription(subscription);
    res.json({ message: 'success' });
});

//Endpoint que ejecuta el envío de las notificaciones a los suscriptores
app.get('/send-notification', async (req, res) => {
    const subscription = await getSubscription();

    const message = JSON.stringify({ cmd: 'my-command' });
    
    sendPushNotification(subscription, message);
    res.json({ message: 'message sent' });
});

app.listen(port, () => console.log(`Ejemplo de aplicación para notificaciones push, corriendo en http://localhost:${port}`));