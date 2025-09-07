# Assets Module

Module: `src/assets/index.js`

## Exports
Named exports of images and SVGs:
`airbnb`, `bill`, `binance`, `card`, `coinbase`, `dropbox`, `logo`, `quotes`, `robot`, `send`, `shield`, `star`, `menu`, `close`, `google`, `apple`, `arrowUp`, `discount`, `facebook`, `instagram`, `linkedin`, `twitter`, `people01`, `people02`, `people03`.

## Usage
```jsx
import { logo } from "../src/assets";

export default function Brand() {
  return <img src={logo} alt="logo" className="w-32 h-auto" />;
}
```

- **Images are imported URLs**: use them as `src` in `<img>`.
- **Tree-shakeable**: import only what you use.
