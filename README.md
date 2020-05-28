# Notificaciones push

El siguiente ejemplo muestra una forma fácil de implementar notificaciones push mediante el uso de [NodeJS](https://nodejs.org/es/) y [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API).

Encontrará 2 proyectos:
+ [server](server)
+ [client](client)

## 1. Iniciar el servidor NodeJS

Este proyecto creará un servidor en [NodeJS](https://nodejs.org/es/) capaz de generar [notificaciones push](https://es.wikipedia.org/wiki/Tecnolog%C3%ADa_push).

Una vez descargado el proyecto, deberá ejecutar los siguientes comandos:

```cmd
...> cd server
...\server> npm install
...\server> node index.js
```

... luego, si todo sale bien, mostrará un aviso que la aplicación NodeJS ya está corriendo ([http://localhost:4000](http://localhost:4000)):

```cmd
Ejemplo de aplicación para notificaciones push, corriendo en http://localhost:4000
```

## 2. Iniciar el sitio web (client)

Este proyecto consta de una página (*index.html*), una hoja de estilos muy sencilla (en verdad muy sencilla, *index.css*), 3 archivos javascript (*index.js, service-functions.js, service.js*) y un archivo JSON (*datos.json*).

Para su ejecución, puede utilizar cualquier tipo de servidor web, por ejemplo [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
