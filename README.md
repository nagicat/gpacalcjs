# GPACalcJS
GPAを計算します。

## Example site
[Github Pages↗](https://nagicat.github.io/gpacalcjs/)

## Example code
### Deno
```js
import { GpaCalc } from "https://cdn.jsdelivr.net/gh/nagicat/gpacalcjs@0.0.1-a.2/dist/gpa-calc.js"

const gc = new GpaCalc([4,3,2,1,0]);
console.log(gc.calc([8,2,1,0,3]));
// 2.857142857142857
```

### Browser
```html
<script type="module">
        import { GpaCalc } from "https://cdn.jsdelivr.net/gh/nagicat/gpacalcjs@0.0.1-a.2/dist/gpa-calc.js"

        const gc = new GpaCalc([4,3,2,1,0]);
        console.log(gc.calc([8,2,1,0,3]));
</script>
```

## Update log
### v0.0.1.i / 2023-09-21

### v0.0.1-a.1 / 2023-09-21

### v0.0.1-a.2 / 2023-09-21
- import対応