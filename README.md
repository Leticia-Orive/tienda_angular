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

CREAR UN HOME

1. Crear un Componente para la Página de Inicio (Home) y agrega el componente a app-routing.module.ts
   ng generate component home
2. Diseñar la Página de Inicio
   Instalamos la libreria de bootstrap
   ng add ngx-bootstrap
3. Integrar el Carrusel de Imágenes
   3.1 Importamos el módulo del carrusel en el módulo del componente home.
   3.2 Utiliza el carrusel en el archivo HTML del componente home.
4. Estilos CSS
5. Navegación desde la Barra
   Asegúrate de que el enlace en la barra de navegación para el "Home" esté correctamente configurado en tu archivo HTML de la barra de navegación.
   <a routerLink="/home">Home</a>

CREAR EL INICIO DE SESION.

1. Crear Componente Inicio de Sesión
   ng generate component inicio-sesion
2. Crear HTML para Inicio de Sesión
   inicio-sesion.component.html
3. Crear Componente TypeScript
   inicio-sesion.component.ts
4. Configurar Rutas
   app-routing.module.ts

CREAR EL REGISTRO

1. Creación del Formulario de Registro
   1.1 Crea un nuevo componente llamado RegistroComponent
   ng generate component registro
   1.2 Creamos un formulario en html
2. Manejo del Registro
   En el archivo TypeScript de RegistroComponent, define las propiedades nombre, correo y contraseña como lo hiciste en el formulario. También, en este componente, crea un método registrarUsuario() que se activará cuando el formulario se envíe. En este método, puedes realizar la lógica para registrar al usuario en tu sistema.
3. Redirección después del Registro
   Después de que el usuario haya sido registrado exitosamente en el servidor, puedes mostrar un mensaje al usuario indicando que se ha creado su cuenta. Luego, puedes redirigir automáticamente al usuario a la página de inicio de sesión.
   Para redirigir al usuario, necesitarás inyectar el servicio Router en tu componente. Luego, puedes utilizar el método navigate() para redirigir a la página de inicio de sesión.
4. Si tienes el error de que no se encuentra HttpClient
   4.1 Abre el archivo del módulo donde estás utilizando HttpClient, por ejemplo, el archivo app.module.ts
   4.2 Importa el módulo HttpClientModule desde @angular/common/http
