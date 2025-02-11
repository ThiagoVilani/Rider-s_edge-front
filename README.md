# 🏍️ Tienda de Accesorios para Motociclistas
#### Este es un proyecto de e-commerce para la venta de accesorios para motociclistas. Incluye un frontend y un backend.
#### Este es el front, git del back: github.com/ThiagoVilani/Rider-s_edge-back

![Captura de pantalla 2024-12-10 132718](https://github.com/user-attachments/assets/3810fb61-b568-4e2c-a73b-132340827d05)

## 🚀 Tecnologías utilizadas
Backend:  
Node.js con Express  
Plantillas EJS  
MySQL con Sequelize (ORM)  
Railway  

Frontend:  
HTML, CSS y JavaScript puro (sin frameworks)  
Fetch API para consumir el backend  
Bootstrap  


## 📂 Estructura del proyecto  
/backend  
  ├── controllers/  
  ├── entity/  
  ├── routes/  
  ├── public/  
  ├── views/  
  ├── index.js  
/frontend  
  ├── html/ index.html    
  ├── styles/  
  ├── javascripts/  

    
## ⚙️ Instalación  
Clona el repositorio


### Instala las dependencias del backend:  
npm install:    
-cloudinary  
-crypto  
-dotenv  
-ejs  
-express  
-multer  
-mysql2  
-pdf-lib  
-sequelize  
-sweetalert2  
-xlxs


### Configura el archivo .env con las variables necesarias:
PORT=3000  
CLAVE_SECRETA=12345678901234567890123456789012  
  
MYSQL_HOST=junction.proxy.rlwy.net  
MYSQL_PORT=46100  
MYSQL_USER=root  
MYSQL_PASSWORD=YUNVSlmzyGYUdHMEqAWVILNgnqUvHFTL  
MYSQL_DB=railway  


## Inicia el backend:  
npm start  
Abre el frontend (index.html) en el navegador.  

## 📌 Funcionalidades  
✅ Listado solo de productos en stock para el cliente  
✅ Carrito de compras
✅ Descarga del ticket de compra en formato pdf

✅ Registro e inicio de sesión para administradores  
✅ Listado de todos los productos para los administradores  
✅ Activacion y desactivacion de productos solo por administradores  
✅ Modificacion de los productos solo por administradores  
✅ Creacion de nuevos productos solo por administradores  
✅ Descarga del listado de ventas en excel  

