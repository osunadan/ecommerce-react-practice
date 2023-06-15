# Bienvenidos a Siete Fashion Store

## E-commerce creado como proyecto final del curso de React.js de Coderhouse

Este proyecto sirve como tienda virtual para "Siete Fashion Store", una marca de ropa ficticia, a la cual se agregaron distintas funcionalidades con las que se pudieron aprovechar los recursos de React aprendidos durante el curso. Esta estructurado en 5 paginas o secciones. En el home, encontrarás una hero section con un CTA, también product cards con los productos principales y en oferta, ademas secciónes que sirven para mostrar los hightlights de la tienda

En la pagina "Shop" se encuentra un grid con todos los productos de la tienda, con dos distintas maneras de filtrarlos, una barra de enlaces con los que se puede filtrar por categorias y un formulario con un <select> para filtrarlos por precio y oferta. Al hacer click en cualquier product card puedes ir al detalle del producto en donde puedes ver su foto, titulo, precio, descripción, así como un contador para seleccionar la cantidad. Desde dicha pagina de detalle se puede agregar el producto al carrito de comprar, actualizandose el icono del carrito en la parte superior derecha con la cantidad de productos que agregaste.
 
Al hacer click en dicho icono de carrito puedes ir a la pagina de checkout, donde encontraras un detalle de los productos que agregaste al carrito, asi como un formulario donde deberas poner información para el envio. Dicho formulario tiene una validación en donde debes poner tu correo dos veces, si no coincide no te dejará enviar los datos. Igual, si los demás campos están vacíos, tampoco te deja hacer el envío.
Al enviar tus datos te sale un mensaje donde se te proporciona el ID de tu compra, el cual puede ingresar en la sección de "Mi pedido" que se encuentra en la navbar, donde al ingresar tu ID en el formulario, te dara el status de tu pedido.
Si no se han agregado productos al carrito y haces click en el icono del carrito, sale un mensaje invitandote a seleccionar algun producto. También hay una modalbox que se activa automaticamente para mostrar un descuento. Es responsive, así que se creo para que se pueda visualizar en mobile. 

#### [En este enlace puedes ver la app en funcionamiento](https://daniel-osuna-45060.netlify.app/)
 
## Librerías utilizadas
- [Firebase](https://firebase.google.com/): De Firebase se usó específicamente _**Firestore Database**_ como base de datos para almacenar la info de cada producto, como nombre, categoría, detalles, imagen, precio, stock. Información que luego se utilizó para renderizar en el DOM y darle al usuario la info del catálogo de productos y de cada producto que seleccionaba para su compra. Además, se utilizó como base de datos para cada orden del usuario, almacenando la info de cada comprador como su email, dirección de envió, nombre y teléfono. Además de los productos comprados. Igualmente, se le proporcionó al usuario el ID de su orden mediante Firestore para que pudiera luego dentro de la app ver el estatus de su compra, el cual es actualizado desde Firestore.
- [Boxicons](https://boxicons.com/): Esta librería se utilizó con el propósito de agregar de una manera fácil e intuitiva los iconos necesarios
- [React Router DOM](https://reactrouter.com/en/main): Con React Router se crearon todas las rutas necesarias para la app, renderizando los componentes necesarios en cada una. También se utilizó el elemento _**"Link"**_ para permitir al usuario navegar a las distintas rutas de la app. Además, se utilizó el hook **_useParams_** para obtener el dynamic params de la URL del componente en el cual se estuviera situado para usarla como apoyo para filtrar por categorías
- [Swiper.js](https://swiperjs.com/): Swiper se utilizo para crear un slider con product cards en la home, que mostraran los productos en oferta.

## Detalles adicionales
- Se utilizo Vite para crear el proyecto
- Se realizó la app de manera completamente modular, fraccionándola en distintos componentes. Haciendo componentes contenedores los cuales llevan la lógica en Js necesaria para los componentes de presentación, que renderizan la data en el DOM.
- Con el hook `useContext` se creo la logica necesaria para el carrito de compras.
- Se crearon custom hooks con los cuales se simulaba la descarga de la data necesaria para la app, luego desde otro custom hook se bajaba la data necesaria de Firestore. 
- No se utilizaron librerias CSS, se hizo todo con vanilla CSS.
Muchas gracias por pasarte por mi primera App en React, agradezco al profe Eric Wajnrajch y los tutores del curso por ayudarme a comprender y utilizar React JS de una manera efectiva.
