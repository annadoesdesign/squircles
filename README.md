# 🔸 Squircles Icons

A beautiful, comprehensive React icon library with clean stroke/fill separation and multiple weight variants.

## ✨ Features

- **214 High-Quality Icons** - Carefully crafted and optimized
- **3 Weight Variants** - Fill (solid), Regular (16px stroke), Light (12px stroke)  
- **Perfect Rendering** - No double outlines or rendering artifacts
- **TypeScript Support** - Full type definitions included
- **Tree-Shakeable** - Import only the icons you need
- **Customizable** - Size, color, and weight control
- **Context Support** - Set global defaults with IconContext

## 📦 Installation

```bash
npm install @squircles/react
# or
yarn add @squircles/react
```

## 🚀 Quick Start

```tsx
import { Heart, AlertSquircle, PlusSquircle } from '@squircles/react';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Heart />
      
      {/* With custom props */}
      <AlertSquircle size={32} color="red" weight="fill" />
      
      {/* Different weights */}
      <PlusSquircle weight="light" />
      <PlusSquircle weight="regular" />
      <PlusSquircle weight="fill" />
    </div>
  );
}
```

## 🎨 Weight Variants

Each icon comes in three carefully designed weights:

- **`fill`** - Solid filled shapes for emphasis
- **`regular`** - 16px stroke width for standard use  
- **`light`** - 12px stroke width for subtle interfaces

## ⚙️ Configuration

### Global Context

Set default properties for all icons:

```tsx
import { IconContext, Heart, CheckmarkSquircle } from '@squircles/react';

function App() {
  return (
    <IconContext.Provider value={{ size: 24, color: '#333', weight: 'regular' }}>
      <Heart />        {/* Uses global defaults */}
      <CheckmarkSquircle color="green" />  {/* Overrides color */}
    </IconContext.Provider>
  );
}
```

### Individual Props

```tsx
<Heart 
  size={48}          // Size in pixels
  color="#ff6b6b"    // Any CSS color
  weight="light"     // fill | regular | light
  mirrored={true}    // Horizontal flip
  className="my-icon" // Additional CSS classes
/>
```

## 📋 Available Icons

<details>
<summary>View all 214 icons</summary>

- Alert, AlertExclamation, AlertSquircle
- Apple, AppleBite, Avacado
- ArchiveMailbox, ArchiveMailboxFull
- Arrow icons (ChevronDown, ChevronUp, LeftArrow, etc.)
- Bag, BagBriefCase, BagShopping
- Basketball, BasketballCourt
- Battery, BatterCharge
- Bell notifications, Bookmark
- Calendar variants, Camera
- Chat, Checkmark, CheckmarkSquircle
- Clock, Cloud (Download, Upload)
- Coffee, Cup variants
- Dashboard, Download, Upload
- Email, File management
- Heart, HeartBroken, HeartRate
- Home, House variants
- Information, Lock/Unlock
- Media controls (Play, Pause, Stop)
- Navigation arrows, Plus/Minus
- Search, Settings, Shopping
- User management
- And many more...

</details>

## 🛠️ Development

This library uses a smart processing system that automatically handles stroke/fill separation:

- **Fill icons**: Solid shapes with `fill="currentColor"`
- **Stroke icons**: Outlined shapes with proper stroke attributes
- **Mixed elements**: Intelligently processes different SVG elements

## 🎨 Designer

**All icons designed by [Anna Everhart](https://www.linkedin.com/in/annadoesdesign/)**

Anna is a talented designer who specializes in creating beautiful, functional icon systems. You can find more of her work and connect with her on:

- 🔗 **LinkedIn**: [@annaeverhart](https://www.linkedin.com/in/annadoesdesign/)
- 🐦 **Twitter/X**: [@annadoesdesign](https://twitter.com/annadoesdesign)
- 📧 **Email**: annaerocca@gmail.com

*Have a design project or need custom icons? Reach out!*

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

I do not allow constributions, but if you would like a custom icon or missing one, please reach out! 

---

**Squircles Icons** - Designed by Anna Everhart • Made with ❤️ for developers who appreciate quality design
