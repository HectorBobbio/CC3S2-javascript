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
bar(11); # 19
```

