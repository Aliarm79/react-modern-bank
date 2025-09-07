# Components

All components are React functional components under `src/componenets/`.

- Navbar — `src/componenets/Navbar.jsx`
- Hero — `src/componenets/Hero.jsx`
- Stats — `src/componenets/Stats.jsx`
- Business — `src/componenets/Business.jsx`
- Billing — `src/componenets/Billing.jsx`
- CardDeal — `src/componenets/CardDeal.jsx`
- Testimonials — `src/componenets/Testimonials.jsx`
- Clients — `src/componenets/Clients.jsx`
- CTA — `src/componenets/CTA.jsx`
- Footer — `src/componenets/Footer.jsx`
- GetStarted — `src/componenets/GetStarted.jsx`
- FeedbackCard — `src/componenets/FeedbackCard.jsx`
- Button — `src/componenets/Button.jsx`
- App — `src/App.jsx`

---

## Navbar
- Import: `import Navbar from "../../src/componenets/Navbar";`
- Props: none
- Description: Top navigation with responsive mobile menu fed by `navLinks`.
- Example:
```jsx
<Navbar />
```

## Hero
- Import: `import Hero from "../../src/componenets/Hero";`
- Props: none
- Description: Landing hero with discount pill and CTA using `GetStarted`.
- Example:
```jsx
<Hero />
```

## Stats
- Import: `import Stats from "../../src/componenets/Stats";`
- Props: none
- Description: Renders KPI counters from `stats` constants.
- Example:
```jsx
<Stats />
```

## Business
- Import: `import Business from "../../src/componenets/Business";`
- Props: none
- Description: Feature list driven by `features` constants with a `Button` CTA.
- Example:
```jsx
<Business />
```

## Billing
- Import: `import Billing from "../../src/componenets/Billing";`
- Props: none
- Description: Two-column section with store badges.
- Example:
```jsx
<Billing />
```

## CardDeal
- Import: `import CardDeal from "../../src/componenets/CardDeal";`
- Props: none
- Description: Explains card deal flow with image and CTA `Button`.
- Example:
```jsx
<CardDeal />
```

## Testimonials
- Import: `import Testimonials from "../../src/componenets/Testimonials";`
- Props: none
- Description: Grid of `FeedbackCard` rendered from `feedback` constants.
- Example:
```jsx
<Testimonials />
```

## Clients
- Import: `import Clients from "../../src/componenets/Clients";`
- Props: none
- Description: Partner logos rendered from `clients` constants.
- Example:
```jsx
<Clients />
```

## CTA
- Import: `import CTA from "../../src/componenets/CTA";`
- Props: none
- Description: Call-to-action section with heading, paragraph, and `Button`.
- Example:
```jsx
<CTA />
```

## Footer
- Import: `import Footer from "../../src/componenets/Footer";`
- Props: none
- Description: Footer with link groups from `footerLinks` and social icons.
- Example:
```jsx
<Footer />
```

## GetStarted
- Import: `import GetStarted from "../../src/componenets/GetStarted";`
- Props: none
- Description: Circular CTA button used in `Hero`.
- Example:
```jsx
<GetStarted />
```

## FeedbackCard
- Import: `import FeedbackCard from "../../src/componenets/FeedbackCard";`
- Props:
  - `content: string`
  - `name: string`
  - `title: string`
  - `img: string` (asset URL)
- Example:
```jsx
<FeedbackCard
  content="Great product!"
  name="Jane Doe"
  title="Founder"
  img={people01}
/>
```

## Button
- Import: `import Button from "../../src/componenets/Button";`
- Props:
  - `styles?: string` — extra Tailwind classes appended to button
- Example:
```jsx
<Button styles="mt-6" />
```

## App
- Import: `import App from "../../src/App";`
- Props: none
- Description: Page composition that assembles all sections.
- Example:
```jsx
<App />
```
