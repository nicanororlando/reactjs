/* Aca enumeramos las propiedades que tenemos, creando asi un objeto al cual vamos
a poder acceder desde otro lado. En este caso nos sirve para hacer las validaciones
en el POST. Esto no solo se puede utilizar en TypeScript sino que tambien crea una
constante que puedo utilizar en el codigo como un "runtime". Tampoco el export que
teniamos arriba no hace falta. */
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy',
}
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
