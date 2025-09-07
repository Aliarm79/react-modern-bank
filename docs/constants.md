# Constants API

Module: `src/constants/index.js`

## Exports
- `navLinks: Array<{ id: string; title: string }>`
- `features: Array<{ id: string; icon: string; title: string; content: string }>`
- `feedback: Array<{ id: string; content: string; name: string; title: string; img: string }>`
- `stats: Array<{ id: string; title: string; value: string }>`
- `footerLinks: Array<{ title: string; links: Array<{ name: string; link: string }> }>`
- `socialMedia: Array<{ id: string; icon: string; link: string }>`
- `clients: Array<{ id: string; logo: string }>`

## Usage Example
```jsx
import { navLinks, stats } from "../src/constants";

function Navigation() {
  return (
    <ul>
      {navLinks.map(link => (
        <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>
      ))}
    </ul>
  );
}

function KPIs() {
  return (
    <div>
      {stats.map(item => (
        <div key={item.id}>
          <strong>{item.value}</strong>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
```

## Notes
- Icon and image fields (`icon`, `img`, `logo`) are imported from `src/assets` and are URLs/paths suitable for `<img src=... />`.
- Data is static and safe to render without network calls.
