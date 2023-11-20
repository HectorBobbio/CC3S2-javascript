# Datos Booleanos

Al momento de comparar variables em JavaScript podemos encontrar comportamientos inusuales.

```javascript
console.log(undefined == null) // true
console.log(NaN == NaN) // false
console.log(null == false) // false
console.log(0 == false) // true
console.log("" == false) // true
```

Tanto `undefined` como `null` representan la ausencia de un valor, por tanto al compararlos arroja `true`. En el caso de `NaN` (Not a Number), este representa un **numero no valido**, y por tanto no puede ser comparado con ningun otro numero, ni consigo mismo. En el caso de `false`, al usar la comparación `==` fuerza que los valores que comparemos adquieran un tipo numérico: (`true` adquiere 1, `false` adquiere 0, la cadena vacia adquiere 0, `null` no adquiere ningún valor). Es por esta conversion numérica que `null == false` arroja falso, pues estamos comparando el cero con un dato no existente. Es también por esta conversion que `0 == false` y `"" == false` arrojan verdadero.

# Clausura

La definición de una funcion en JavaScript tambien pueden ser "anidadas" dentro de otra.
```javascript
function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11); // 19
```
`bar = f1(5)` define el primer valor que pasamos a la funcion `f1`, pero queda pendiente resolver la función anidada en ella. Para esto usamos `bar(11)`. Sin embargo, no obtenemos el resultado que podriamos haber intuido, esto es porque JS maneja la funcion de incremento de manera distinta. `var++` incrementa var por uno  devuelve el valor de `var` antes del incremento, mientras que `++var` hace el incremento y devuelve el valor después de realizado el incremento. 

