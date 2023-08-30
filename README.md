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

CREAR PRODUCTOS

1.  Crear el componente producto
    ng generate component producto
2.  Visualización de Productos por Categoría
    2.1 Crear la Lista de Categorías
    2.1.1 Crear el servicio producto
    2.2 Mostrar las Categorías en la Barra de Navegación
    En el componente BarraNavegacionComponent, puedes agregar un menú desplegable o una lista de categorías en la barra de navegación. Puedes usar un bucle \*ngFor para mostrar todas las categorías disponibles.
    2.2.1 Obtener la lista de categorías:
    En tu servicio de productos, agrega un método para obtener la lista de categorías disponibles
    2.2.2 Modificar la Barra de Navegación
    En tu componente de la barra de navegación (barra-navegacion.component.ts), inyecta el servicio de productos y obtén la lista de categorías.
    2.2.3 Agregar Rutas para Categorías
    Asegúrate de tener rutas configuradas para mostrar productos por categoría en tu archivo de enrutamiento
    2.2.4 Crear Componente para Mostrar Productos por Categoría
    Crea un nuevo componente (por ejemplo, productos-por-categoria.component.ts) para mostrar los productos de una categoría específica
    2.2.4.1 Crea el Componente
    ng generate component productos-por-categoria
    2.2.4.2 Actualiza el Componente
    Abre el archivo productos-por-categoria.component.ts
3.  Acciones en los Productos:
    Para cada producto en la lista, puedes agregar botones o enlaces que permitan realizar acciones como ver detalles, editar, borrar y agregar al carrito. Cada una de estas acciones se implementará mediante componentes y lógica correspondiente
    3.1 Ver Detalles del Producto:
    Puedes agregar un enlace o botón en cada producto que lleve a la página de detalles del producto.
    Crea un componente llamado DetallesProductoComponent para mostrar los detalles completos del producto.
    ng generate component detalles-producto
    En el componente de detalles, obtén el producto usando el servicio y muestra sus propiedades.
    1.Crear el Componente DetallesProducto
    2.Agregar Ruta para los Detalles del Producto
    3.Implementar la Vista de DetallesProducto
    4.Obtener el Producto Usando el Servicio
    5.Mostrar los Detalles del Producto
    3.2 Editar Producto:

            Agrega un enlace o botón en cada producto que lleve a la página de edición del producto.
            Crea un componente llamado EdicionProductoComponent para editar los detalles del producto.
            En el componente de edición, muestra un formulario prellenado con los detalles actuales del producto y permite actualizarlos.
            1.Crear Componente EdicionProducto
            2.Definir la Ruta de Edición de Productos
            3.Obtener Producto para Edición
            4.Mostrar Formulario de Edición
            5.Actualizar Producto
        3.3 Borrar Producto:

            Agrega un botón de borrado en cada producto que permita eliminarlo.
            Implementa una función en tu servicio ProductoService para borrar un producto por su ID.
            Al confirmar la eliminación, llama a la función del servicio y actualiza la lista de productos.
        3.4 Agregar al Carrito:

            Agrega un botón de "Agregar al Carrito" en cada producto.
            Implementa una función en tu servicio CarritoService para agregar productos al carrito.
            Cuando el usuario haga clic en "Agregar al Carrito", llama a la función del servicio para agregar el producto.
            1.Creación del Servicio de Carrito
            2.Implementación en el Componente Producto
            3.Implementación en el Servicio de Carrito
        3.5 Visualizar el Carrito:

            En tu componente de barra de navegación, agrega un enlace al componente CarritoComprasComponent que mostrará los productos en el carrito.
            En el componente de carrito, muestra los productos que el usuario ha agregado, junto con opciones para eliminar o modificar cantidades.
            1. Creación del Componente CarritoComprasComponent
            2. Agregar Enlace en la Barra de Navegación
            3. Mostrar los Productos en el Carrito
            4.Opciones para Eliminar o Modificar Cantidades

4.        Vender Productos: Supongo que con "vender" te refieres a completar una transacción de compra de un producto. Esto generalmente implica la gestión del carrito de compras y la generación de pedidos. La implementación de esta funcionalidad puede ser bastante extensa y requiere manejar aspectos como el estado del carrito, la generación de pedidos y la actualización de inventario.
    4.1. Confirmación de Compra: Cuando el usuario está listo para comprar los productos en su carrito, puedes implementar un botón de "Confirmar Compra" en la página del carrito. Al hacer clic en este botón, se puede mostrar un mensaje de confirmación y luego proceder con el proceso de venta.
    4.2 Generación de Pedido: Después de la confirmación de compra, debes generar un pedido que incluya los detalles de los productos, la información del usuario y otra información relevante. Puedes crear un servicio de pedidos para manejar esta funcionalidad. El servicio de pedidos podría tener métodos para crear un nuevo pedido y guardar los detalles del pedido en una base de datos o en algún otro almacenamiento.
    4.3 Actualizar Inventario: Antes de completar la venta, es importante verificar si hay suficiente inventario disponible para los productos en el carrito. Si es así, puedes actualizar el inventario restando las cantidades de los productos vendidos.
    4.4 Notificación al Usuario: Después de que se haya realizado la venta exitosamente, puedes notificar al usuario que la compra se ha completado. Esto podría incluir un mensaje de confirmación y detalles sobre el pedido.
    4.5 Limpiar el Carrito: Después de completar una venta, es una buena práctica limpiar el carrito, eliminando los productos que se han vendido.
    4.6 Historial de Pedidos: Puedes implementar una página donde los usuarios puedan ver su historial de pedidos anteriores. Esto puede requerir la implementación de una nueva vista y lógica para mostrar los detalles de los pedidos anteriores.
    4.7 Seguridad: Asegúrate de manejar la seguridad adecuadamente, especialmente cuando se trata de procesar pagos y almacenar información confidencial del usuario.
5.  CONEXION A MYSQL
    1.  instalamos mysql
        npm install mysql2
    2.  Importar la Biblioteca y Configurar la Conexión
        Crea un archivo donde configurarás la conexión a la base de datos. Por ejemplo, puedes llamarlo db.js
