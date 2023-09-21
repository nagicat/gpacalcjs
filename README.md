# GPACalcJS
GPAを計算します。

## Example
### Code
```js
import { GpaCalc } from "https://cdn.jsdelivr.net/gh/nagicat/gpacalcjs@0.0.1-a.2/dist/gpa-calc.js"

const gc = new GpaCalc([4,3,2,1,0]);
console.log(gc.calc([8,2,1,0,3]));
// 2.857142857142857
```

ブラウザで利用する場合は以下を追加。
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/nagicat/gpacalcjs@0.0.1-a.2/dist/gpa-calc.js"></script>
```

## Update log
### v0.0.1.i / 2023-09-21

### v0.0.1-a.1 / 2023-09-21

### v0.0.1-a.2 / 2023-09-21
- import対応