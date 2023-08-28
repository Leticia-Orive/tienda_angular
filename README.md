# tienda_angular

INSTALACION Angular y Proyecto

1. Instalar Angular CLI
   npm install -g @angular/cli
2. Crear un Nuevo Proyecto de Angular
   ng new nombre-del-proyecto
3. Navegar al Directorio del Proyecto
   cd nombre del proyecto
4. Iniciar el Servidor de Desarrollo
   ng serve

CREAR UNA BARRA DE NAVEGACION
En la barra de navegacion aparece un logo, home, producto, carrito, inicion de sesion y registro

1. Crear Componente de Barra de Navegación
   ng generate component navbar
2. Editar el HTML de la Barra de Navegación
   Abrimos el archivo HTML de la barra de navegación (navbar.component.html) y agregamos el siguiente código para crear los enlaces y el logo.
3. Agregar la Barra de Navegación a la Plantilla Principal
   Abrimos el archivo app.component.html y agrega el componente de la barra de navegación.
   router-outlet es donde se muestran las páginas correspondientes a los enlaces en la barra de navegación.
4. Configurar las Rutas
   Abrimos el archivo app-routing.module.ts y configura las rutas correspondientes para cada enlace en la barra de navegación
5. Agrega estilos CSS para dar estilo a tu barra de navegación según tus preferencias de diseño.
