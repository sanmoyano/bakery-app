# 10/05/2023 -> Patallas & Navegacion base
NOTAS: 
- repo -> https://github.com/sotopro/coolbreadstore

- Instalar dependecias de React navigation + carpeta de navigation. La navegacion deve tener un provider de navegacion.
- Navegacion convecional en anvegadores -> hace un get al servidor para obtener la raiz o el archivo del dominio principal el cual esta asociado al domino que estamos consultando. A nivel cliente, el navegador tiene algo que se llama location que genera una ruta virtual segun el grupo de archivos que yo determino que van a pertenecer a ese location. En una web se usa la API de location, le pasas un array de rutas que esta asociado a un modulo de rutas. (en lineas generales), entonces en la ruta determina que va mostrar segun lo que estemos pasando en la url.
- En mobile, las apps no estan alojadas en un servidor, si no de forma locan en tu dispositivo. No existge un servidor al cual le consultes la url para acceder a un recurso.
  * Existe los "stack" o "pilas" son vistas que pueden estar asociadas a un componente. Uno puede tener una pila de elementos y un grupo de navegacion podemos tener diferentes stack de navegacion apilados o separadso segun el flujo que ha relacionado a tu aplicacion. Pila o stack de autenticacion - pila o stack que contenga las vistas que no pertenecen al flujo de autenticacion. De esa manera se comportan las pantallas y la navegacion en las app mobiles. 
- navigation -> main -> idex.jsx -> se van apilar todos los stacks 
             -> index.jsx -> va ser el provider
