# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Ecommerce
## _Proyecto Final ReactJS con integración a Firebase_



## A continuación detallo los pasos a seguir para utilizar este proyecto:

## Instalación

Clona el repositorio

https://github.com/luisgb23/PFEcommerceGeymonat.git

```sh
cd PFEcommerceGeymonat
npm install
npm run dev
```

Para conectarse a la base de datos se deberan crear un proyecto en Firebase, dejo el enlace donde deben seguir el paso a paso:

https://firebase.google.com/?hl=es

Una vez creada la base de datos se debe crear un archivo .env donde agregar las variables de entorno con la nomenclatura: 
VITE_apiKey
VITE_authDomain
VITE_projectId
VITE_storageBucket
VITE_messagingSenderId
VITE_appId

## Run de la aplicación

Configurada la base de datos y las variables de entorno, correr la aplicación con le commando:

```sh
npm run dev
http://localhost:5173/
```

## Deploy

https://pf-ecommerce-geymonat.vercel.app/