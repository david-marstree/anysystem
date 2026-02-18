# AnySystem Design Documentation

A comprehensive React component library built with TypeScript, Tailwind CSS, and modern UI frameworks.

## Version
0.0.48

## Overview

AnySystem Design is a modern, type-safe React component library that provides a complete set of UI components for building enterprise applications. It features extensive form handling capabilities, responsive layouts, and seamless Formik integration.

## Technology Stack

### Core
- **React**: ^19.0.0 (with React 18 support)
- **TypeScript**: ^5.8.2
- **Tailwind CSS**: ^3.4.17

### UI Libraries
- **@headlessui/react**: ^2.1.3 (Modal, transitions)
- **@floating-ui/react**: ^0.26.23 (tooltips, popovers)
- **@dnd-kit**: ^6.1.0 (drag and drop)
- **react-icons**: ^5.3.0

### Form Libraries
- **Formik**: ^2.4.6
- **Yup**: ^1.4.0

## Installation

```bash
npm install anysystem-design
```

### Peer Dependencies

Make sure to install the required peer dependencies:

```bash
npm install react react-dom tailwind-merge formik yup moment react-icons react-router-dom @headlessui/react @floating-ui/react @aliakbarazizi/headless-datepicker @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @xyflow/react
```

## Quick Start

### 1. Wrap your app with AppProvider

All components require the `AppProvider` context wrapper:

```tsx
import { AppProvider } from 'anysystem-design';

function App() {
  return (
    <AppProvider appName="My Application">
      {/* Your app components */}
    </AppProvider>
  );
}
```

### 2. Import and use components

```tsx
import { Button, Input, Modal } from 'anysystem-design';

function MyComponent() {
  return (
    <div>
      <Input name="username" placeholder="Enter username" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Component Categories

### Form Components (11 components)
- [Button](./components/Button.md) - Customizable button with variants
- [Input](./components/Input.md) - Text input with Formik support
- [PasswordInput](./components/PasswordInput.md) - Password input with visibility toggle
- [TelephoneInput](./components/TelephoneInput.md) - Phone number input with formatting
- [Selectbox](./components/Selectbox.md) - Single and multiple selection
- [AutoComplete](./components/AutoComplete.md) - Autocomplete with search
- [RadioGroup](./components/RadioGroup.md) - Radio button group
- [DatePicker](./components/DatePicker.md) - Date selection
- [Checkbox](./components/Checkbox.md) - Checkbox with Formik support
- [Switch](./components/Switch.md) - Toggle switch
- [FormControl](./components/FormControl.md) - Form field wrapper with label and validation

### Layout Components (5 components)
- [Container](./components/Container.md) - Main container wrapper
- [Row](./components/Row.md) - Horizontal flex layout
- [Column](./components/Column.md) - Vertical flex layout
- [EmptyLayout](./layouts/EmptyLayout.md) - Minimal layout wrapper
- [SideMenuLayout](./layouts/SideMenuLayout.md) - Responsive sidebar layout

### Navigation Components (2 components)
- [Navbar](./components/Navbar.md) - Top navigation bar
- [NavList](./components/NavList.md) - Navigation list/menu

### Data Display Components (2 components)
- [DataTable](./components/DataTable.md) - Feature-rich data table
- [Text](./components/Text.md) - Typography component

### Interactive Components
- [Modal](./components/Modal.md) - Modal dialog with animations

## Features

### Form Integration
- **Formik Support**: Most form components have `Form*` variants that integrate seamlessly with Formik
- **Validation**: Built-in Yup validation support
- **Error Handling**: Automatic error display and validation states

### Responsive Design
- **Mobile-First**: All components are responsive by default
- **Tailwind CSS**: Utility-first styling with easy customization
- **Dark Mode**: Dark mode support (where applicable)

### Type Safety
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Intellisense**: Complete IDE support with prop suggestions

### Performance
- **Tree Shaking**: Import only what you need
- **Optimized Builds**: Vite-powered build system
- **CSS Injection**: Automatic CSS injection with vite-plugin-lib-inject-css

## Architecture

### Component Structure

Each component follows a consistent pattern:

```
Component/
├── index.tsx           # Public exports
├── Component.tsx       # Main component
├── ComponentBase.tsx   # Base implementation
├── FormComponent.tsx   # Formik variant
├── helpers.tsx        # Utility functions
└── type.tsx           # Type definitions
```

### Export Pattern

All components are exported through centralized indexes:

```tsx
// Import everything
import * from 'anysystem-design';

// Import specific components
import { Button, Input } from 'anysystem-design';

// Import from subcategories
import { Button } from 'anysystem-design/components';
```

## Development

### Running Storybook

```bash
npm run storybook
```

### Building the Library

```bash
npm run build
```

### Running Tests

```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Check package.json for license information.

## Contributing

Please refer to the project's GitHub repository for contribution guidelines.

## Links

- [GitHub Repository](https://github.com/your-repo/anysystem-design)
- [Storybook Documentation](https://your-storybook-url.com)
- [NPM Package](https://www.npmjs.com/package/anysystem-design)
