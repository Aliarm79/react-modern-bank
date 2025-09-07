# Project Documentation

This documentation covers all public modules, components, and utilities in the project.

- Components: `docs/components/README.md`
- Constants: `docs/constants.md`
- Styles & Layout: `docs/styles.md`
- Assets Module: `docs/assets.md`

## Conventions
- All components are React functional components.
- Tailwind CSS classes are composed via `styles` and `layout` utilities from `src/style.js`.
- Static data lives under `src/constants`.
- Images and icons are re-exported via `src/assets/index.js`.

## Example Usage
```jsx
import Navbar from "../src/componenets/Navbar";
import styles from "../src/style";

export default function ExamplePage() {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>
  );
}
```
