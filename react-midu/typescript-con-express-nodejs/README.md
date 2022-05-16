### `API REST de TypeScript con Nodejs y Express.`

# `Paso a paso para crear mi Api Rest: `

# Inicializar API:

npm init -y

# Instalar Typescript con la dependencia de desarrollo "D"

npm install typescript -D

# Añadimos un script que nos va a transformar los ficheros de TypeScript a JavaScript

"tsc": "tsc",

# Para inicializar nuestro proyecto de typescript. El primer -- es para que el parametro --init le llegue al tcs. Si eso no estaria ese parametro le llegaria al npm run.

npm run tsc -- --init

# Descomentamos y/o cambiamos parametros del archivo tsconfig.json

# Instalamos la dependencia express. La "E" significa q instalamos la dependencia exacta.

npm install express -E

# Creamos el archivo

index.ts

# Si faltan paquetes, podemos agregarlos desde la web:

DefinitelyTyped

## en este caso instalo: "D" es para instalar como dependencia de desarrollo:

npm install @types/express -D

### la diff entre dependencias y dependencias de desarrollo es que en la primera, cuando se le pasa el proy a otra persona se instalan todas esas dependencias aunque no sean vitales, y las de desarrollo no se instalarian automaticamente, pero si queremos desarrollar las tenemos que tener.

# Ejecutamos este comando, que nos va a crear la carpeta build con el index.js

npm run tsc

# Para correr la app creamos un script

"start": "node build/index.js",

# con esto veo los scripts:

npm run

# para correr la app

npm start

# Ahi ya nos andaria la api. Para que podamos trabajar comodos y no tener que ejecutar el script "tsc" todo el tiempo para cambiar el codigo de ts a js, vamos a instalar esta dependencia:

npm install ts-node-dev -D

# y luego agregar el script:

"dev": "ts-node-dev src/index.ts",

# Lo que hace esta dep es ejecutar y compilar lo que necesitemos, y ademas va a estar escuchando los cambios que hagamos en ts para cambiarlos a js y hacer la compilacion. De esta forma podemos trabajar comodamente en nuestro TypeScript.

# Para compilar entonces:

npm run dev

# opcional, instalar

npm install ts-standard -D

# y agregamos esto en el pagkage.json despues de dependencies

"eslintConfig": {
"parserOptions": {
"project": "./tsconfig.json"
},
"extends": ["./node_modules/ts-standard/eslintrc.json"]
}
