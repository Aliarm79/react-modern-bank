# Styles & Layout Utilities

Module: `src/style.js`

## Exports
- `default export styles: Record<string, string>`
- `named export layout: Record<string, string>`

### `styles`
Keys:
- `boxWidth`
- `heading2`
- `paragraph`
- `flexCenter`
- `flexStart`
- `paddingX`
- `paddingY`
- `padding`
- `marginX`
- `marginY`

Usage:
```jsx
import styles from "../src/style";

export function Section({ children }) {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>{children}</div>
    </section>
  );
}
```

### `layout`
Keys:
- `section`
- `sectionReverse`
- `sectionImg`
- `sectionImgReverse`
- `sectionInfo`

Usage:
```jsx
import styles, { layout } from "../src/style";

function Split() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Title</h2>
        <p className={styles.paragraph}>Body</p>
      </div>
      <div className={layout.sectionImg}>Right content</div>
    </section>
  );
}
```
