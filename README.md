# Notificaciones push

El siguiente ejemplo muestra una forma fácil de implementar notificaciones push mediante el uso de [NodeJS](https://nodejs.org/es/) y [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API).

Encontrará 2 proyectos:
+ [server](server)
+ [client](client)

## 1. Iniciar el servidor NodeJS

Este proyecto creará un servidor en [NodeJS](https://nodejs.org/es/) capaz de generar [notificaciones push](https://es.wikipedia.org/wiki/Tecnolog%C3%ADa_push).

Una vez descargado el proyecto, deberá seguir estos pasos:

1. Instalar los paquetes de npm.

    ```cmd
    ...> cd server
    ...\server> npm install
    ```

2. Crear las llaves que se usarán para suscribir los clientes al servidor.

    ```cmd
    ...\server> web-push generate-vapid-keys
    ```
    El comando anterior arrojará algo como esto:

    ```text
    =======================================

    Public key: 
    BABU69DGxW0-rzUdEYDGG2xHAMQROl5RV8QD6Zuxjdoj5RBOcZKGLKw4D_YglTMBjyuL5rdTPyl_I64rnKKuKkc

    Private key:
    SWDFhVNnV2clDdQiFls2k7AWtr3dkK5oU5YWdaNPVsM

    =======================================
    ```
    **Nota:** No use estas llaves, genere las propias para su ejercicio.

3. Ahora, debe copiar la llave pública y pegarla en la propiedad `publicKey` en el archivo [push-manager.js](server/push-manager.js). Pegar esta llave también en la constante `base64String` del archivo [service-functions.js](client/service-functions.js).

4. Luego, debe copiar la llave privada y pegarla en la propiedad `privateKey` en el archivo [push-manager.js](server/push-manager.js).

5. Ejecutar los comandos de inicio del servidor NodeJS:

    ```cmd
    ...\server> node index.js
    ```

6. Si todo sale bien, mostrará un aviso que la aplicación NodeJS ya está corriendo en [http://localhost:4000](http://localhost:4000):

    ```cmd
    Ejemplo de aplicación para notificaciones push, corriendo en http://localhost:4000
    ```

## 2. Iniciar el sitio web (client)

Este proyecto consta de una página (*index.html*), una hoja de estilos muy sencilla (en verdad muy sencilla, *index.css*), 3 archivos javascript (*index.js, service-functions.js, service.js*) y un archivo JSON (*datos.json*).

Para su ejecución, puede utilizar cualquier tipo de servidor web, por ejemplo [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## 3. ¿Cómo sé que funciona?

Una vez realizado los 2 pasos anteriores, deberá:

1. Abrir la app web en el navegador y luego abrir la consola del navegador (`F12`).
2. Verificar que la consola muestre el mensaje: `Respuesta de la suscripción: {message: "success"}`. Este mensaje se mostrará solo cuando se registre el service worker. Si ya está registrado y se actualiza la página, no se mostrará, lo cual **no** significa que esté mal.
3. Verificar que la caché de la app web (`my-cache`) contenga el elemento `datos.json`.
4. Abrir otra pestaña del navegador (`ctrl+t`) u otra instancia (`ctrl+n`).
5. En esta nueva pestaña, realizar la solicitud de envío de notificación al servidor NodeJS con la uri [http://localhost:4000/send-notification](http://localhost:4000/send-notification).
6. Volver a la pestaña de la app web. Es probable que requiera conceder accesos a la web de recibir notificaciones.
7. Si la app web ya tiene permisos de notificaciones, al realizar el paso 5, debió generarse una notificación de escritorio en su pc con la siguiente información: `Título: "Mensaje desde node", Cuerpo: "Comando enviado: my-command"`
8. Verificar que la caché de la app web (`my-cache`) ya no contenga el elemento `datos.json`.
9. Si el punto 8 fue correcto, la notificación push funcionó!

### Notas:

- Puede probar la ejecución del punto 5 sin tener la app web abierta, el service worker igual estará escuchando las notificaciones push, lo que hará que el punto 8 se pueda verificar al abrir de nuevo la app web.
- Para reiniciar la prueba, deberá quitar el registro del Service Worker, limpiar la caché de la app web y volver al paso 1.