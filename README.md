# Notificaciones push

El siguiente ejemplo muestra una forma fácil de implementar notificaciones push mediante el uso de [NodeJS](https://nodejs.org/es/) y [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API).

Encontrará 2 proyectos:
+ [server](tree/master/server)
+ [client](tree/master/client)

## 1. Arrancar el servidor NodeJS

Este proyecto creará un servidor en [NodeJS](https://nodejs.org/es/) capaz de generar [notificaciones push](https://es.wikipedia.org/wiki/Tecnolog%C3%ADa_push).

Una vez descargado el proyecto, deberá ejecutar los siguientes comandos:

```powershell
PS ...> cd server
PS ...\server> npm install
PS ...\server> node index.js
```

... luego, si todo sale bien, mostrará un aviso que la aplicación NodeJS ya está corriendo ([http://localhost:4000](http://localhost:4000)):

```powershell
Ejemplo de aplicación para notificaciones push, corriendo en http://localhost:4000
```

## Proyecto client

Este proyecto consta de una página (*index.html*), una hoja de estilos muy sencilla (en verdad muy sencilla, *index.css*), 3 archivos javascript (*index.js, service-functions.js, service.js*) y un archivo JSON (*datos.json*).

Para su ejecución, puede utilizar cualquier tipo de servidor web, por ejemplo [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).