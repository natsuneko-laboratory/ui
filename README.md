# @natsuneko-laboratory/ui

UI components library for building websites that has unified design.

## Getting Started

1. Install the latest version of `@natsuneko-laboratory/ui`

```bash
$ npm install @natsuneko-laboratory/ui
```

2. Add `@natsuneko-laboratory/ui` to your `tailwind.config.js`

```typescript
module.exports = {
  content: ["./node_modules/@natsuneko-laboratory/ui/**/*.js"],
};
```

3. Import components

```typescript
import { Container } from "@natsuneko-laboratory/ui/layouts/container";
```

## Peer Dependencies

- `next`
  - `navigations/link-button/next`
- `react-color`
  - `forms/color-picker`
- `shiki`
  - `data/code-block`
