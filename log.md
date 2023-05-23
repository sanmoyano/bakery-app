# 10/05/2023 -> Patallas & Navegacion base
NOTAS: 
- repo -> https://github.com/sotopro/coolbreadstore

- Instalar dependecias de React navigation + carpeta de navigation. La navegacion deve tener un provider de navegacion.
- Navegacion convecional en anvegadores -> hace un get al servidor para obtener la raiz o el archivo del dominio principal el cual esta asociado al domino que estamos consultando. A nivel cliente, el navegador tiene algo que se llama location que genera una ruta virtual segun el grupo de archivos que yo determino que van a pertenecer a ese location. En una web se usa la API de location, le pasas un array de rutas que esta asociado a un modulo de rutas. (en lineas generales), entonces en la ruta determina que va mostrar segun lo que estemos pasando en la url.
- En mobile, las apps no estan alojadas en un servidor, si no de forma locan en tu dispositivo. No existge un servidor al cual le consultes la url para acceder a un recurso.
  * Existe los "stack" o "pilas" son vistas que pueden estar asociadas a un componente. Uno puede tener una pila de elementos y un grupo de navegacion podemos tener diferentes stack de navegacion apilados o separadso segun el flujo que ha relacionado a tu aplicacion. Pila o stack de autenticacion - pila o stack que contenga las vistas que no pertenecen al flujo de autenticacion. De esa manera se comportan las pantallas y la navegacion en las app mobiles. 
- navigation -> main -> idex.jsx -> se van apilar todos los stacks 
             -> index.jsx -> va ser el provider

# 15/5/2023 -> Componentes & navegacion
NOTAS: 

# 22/5/2023 -> REDUX
NOTAS: 
- Libreria agnostica -> se puede implementar en puro javascript o en lo que sea, mientras contenga JS, puede implementar en lo que sea. 
- Manejar de los estados de forma consistente, predictiva e inmutable. 
- Gestiona el estado de manera centralizada.
- Context vs Redux -> 
  * el contexto lo que viene a solucionar es el prop drilling. Encierrra todos los componentes que necesitan acceder a una propiedad. 
  * El contextApi necesita menos tiemo para cargar los recursos. 
  * la idea es no tener muchos contextos, cuando una aplicacion crece mucho, el context puede ser un problema de performance. 
  * Si el proyecto necesita resolver el prop drilling, el contextApi es una opcion. 
  * el contextApi solo se utiliza para gestionar y compartir datos de forma global o parcial siempre y cuando esos datos no tengan que actualizarse constantemente.
  * mantenibilidad sencilla para proyctos chicos y que los valores sean lo mas estaticos posibles. 
- Redux -> complejo, hay que saber muchos conceptos.
  * Deberia haber muy pocos datos para la carga inicial de la app, para setear los datos iniciales. 
  * mantenibilidad -> sencilla, facil de probar y testear aplicaciones comlejas y es mas facil agregar capas nuevas. 
# CONLUSION -> redux te ayuda a manejar completamente los estados de la aplicacion con la posibilidad de hacer y deshacer los valores de la aplicacion, es facil hacer debuggin. ContextApi es para la inyeccion de props, para evitar para pasarlo de forma manual.
- Como funciona -> se compone de algo que se llama store, en tiempo de ejecucion. No es una DB. Estos datos pueden venir o depender de diferentes aprtes de la aplicacion que estan almacenados en el 'store'. Toda la app tiene accesos al store, pero no todas las pantallas consumen del store, solo en las que yo quiera. 
- los componentes directamente no modifica el dato, si no que se generan unas 'acciones' que son las que capturan el store para saber que valores es el que va cambiar. Esa accion se ejecuta con un 'dispatch' 
- el store esta compuesto de estados y reductores. El store es un reductor muy grande que contiene estados. 
- patrones que se suelen utilizar -> es comun que forme parte de toda la aplicacion. Tiene que estar al mismo nivel que todas, se llama 'store' o 'redux'
- dentro de store tenemos acciones y reductores. Y aparte se suele crear una carpeta mas para los tipos de acciones. 
1. Identificar cuales son los reductores que vamos a necesitar. Una funcion pura, independientemente de los datos que recibe o envie siemre va recibir esa estructura de datos, es de tipo Array.prototipe
  * un reductor suele contener, un estado inicial
  * declarar reductor
  * nombre.reducer.js (convencion)
2. acciones -> nombre.action.js
3. types -> diccionario de strings. Va ser un objeto con los tipos. 