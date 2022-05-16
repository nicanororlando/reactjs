### `Que es una Api Rest?`

Primero repasamos que es una `API`:
Las API son conjuntos de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Podemos considerarlas como el `intermediario` entre el proovedor de Informacion y el Usuario, donde se establece el contenido que se necesita por parte del consumidor (llamada), y el que requiere el productor (respuesta). De esta manera las API's nos permiten interactuar con una computadora y un sistema de manera que el sistema comprenda una solicitud efectuada desde la computadora, y la cumpla.

y `REST?`:
REST no es un protocolo ni un estandar, sino mas bien un conjunto de `Limites` de arquitectura. Esto se puede desarrollar de distintas maneras. Cuando el cliente envia una solicitud a travez de la API RESTful, esta transfiere una representacion del estado del recurso requerido a quien lo haya solicitado o al extremo. Esta informacion se entrega por medio de HTTP en formato JSON, HTML, XLT, Python, PHP o texto sin formato, siendo JSON el mas popular ya que tanto las personas como las maquinas lo pueden entender y no depende de ningun lenguaje.

Para que una `API` se considere de `RESTful` debe cumplir:
-> Arquitectura cliente-servidor compuesta de clientes, servidores y recursos con la gestion de solicitudes a travez de HTTP.
-> Comunicacion entre cliente-servidor `sin estado`, lo cual implica que la informacion del cliente no se almacene entre las solicitudes de GET, y que esten independientes del resto.
-> Los datos pueden almacenarse en cache y asi optimizar las interacciones entre cliente-servidor.

... en resumen:

# Una API REST es una interfaz de programacion de aplicaciones que se ajusta a los `limites` de la arquitectura REST y permite la `interaccion` con los servicios web de RESTful.
