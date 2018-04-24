# It's Blank 无字之碑

Blank says more.

## Usage / 用法

```js
import blank from 'its-blank'
// or / 或
const blank = require('its-blank')

const mainFunc = async () => {
  const text = await fetch('https://git.io/xinyue')
  console.log(blank(text,
    ' '
    /* Optionally, any character you want to replace words */
    /* 可选参数，任何你需要的用于替换文本的字符，默认为空格。 */
  ))
}

mainFunc()
```

## License / 授权协议

MIT.
