# Proyecto de Gestión de Medicamentos

Este proyecto consta de dos versiones: una **móvil** y otra **web**, diseñadas para ayudar en la gestión y el seguimiento del consumo de medicamentos. A continuación, se detalla cómo instalar y ejecutar ambas versiones, así como las pantallas disponibles.

---

## Tabla de Contenidos
- [Introducción](#introducción)
- [Requisitos del Sistema](#requisitos-del-sistema)
- [Sección Móvil](#sección-móvil)
  - [Pantallas Móviles](#pantallas-móviles)
  - [Instalación y Ejecución](#instalación-y-ejecución)
  - [Instalación APK en Android](#instalación-apk-en-android)
- [Sección Web](#sección-web)
  - [Pantallas Web](#pantallas-web)
  - [Instalación y Ejecución](#instalación-y-ejecución-web)

---

## Introducción

Este proyecto tiene como objetivo mejorar la gestión de la toma de medicamentos y generar notificaciones automáticas para los usuarios. 

---

## Requisitos del Sistema

Para ejecutar correctamente las aplicaciones, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** versión 20.5.0 o superior.
- **Ionic CLI** (para la versión móvil).
- **Angular CLI** (para la versión web).

---

## Sección Móvil

### Pantallas Móviles

#### Pantallas de Andrés
- [Configuración](http://localhost:8100/configuracion)
- [Detalle Medicamentos](http://localhost:8100/detalle-medicamentos)
- [Lista de ordenes medicas](http://localhost:8100/tabs/tab1)

#### Pantallas de Fabián
- [Simular Notificación](http://localhost:8100/simular-notificacion)
- [Notificar Toma](http://localhost:8100/notificar-toma)
- [Detalle de la Orden](http://localhost:8100/detalle-orden)
- [Historial de Tomas](http://localhost:8100/historial-tomas)

### Instalación y Ejecución

Para instalar y ejecutar la versión móvil:

1. Ubícate en la carpeta `version-movil`:
   ```bash
   cd version-movil
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm i
   ```
3. Para iniciar la aplicación en desarrollo, ejecuta:
   ```bash
   ionic serve
   ```

#### Instalación APK en Android
  Se incluye un archivo .apk para la instalación directa en dispositivos Android.



## Sección Web

### Pantallas Webs

#### Pantallas de Andrés
- http://localhost:4200/login
- http://localhost:4200/crear-recordatorio-orden
- http://localhost:4200/listar-alarmas (Seccion ordenes medicas)

#### Pantallas de Fabián
- http://localhost:4200/cargar-orden
- http://localhost:4200/crear-recordatorio
- http://localhost:4200/listar-alarmas (Seccion alarmas individuales)

### Instalación y Ejecución

Para instalar y ejecutar la versión web:

1. Ubícate en la carpeta `version-web`:
   ```bash
   cd version-web
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm i
   ```
3. Para iniciar la aplicación en desarrollo, ejecuta:
   ```bash
   ng serve -o
   ```
