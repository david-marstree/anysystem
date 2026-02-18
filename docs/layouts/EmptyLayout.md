# EmptyLayout

A minimal layout wrapper that renders children without any additional structure or styling.

## Import

```tsx
import { EmptyLayout } from 'anysystem-design';
```

## Basic Usage

```tsx
<EmptyLayout>
  <YourContent />
</EmptyLayout>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render |

## Description

EmptyLayout is the simplest possible layout component. It renders its children directly using React.Fragment, adding no wrapper elements, styles, or functionality.

## When to Use

Use EmptyLayout when you:
- Need a consistent layout interface but want no wrapping
- Want to conditionally switch between layouts
- Need maximum flexibility in your page structure
- Don't want any default styling or structure

## Examples

### Basic Usage
```tsx
import { EmptyLayout } from 'anysystem-design';

function SimplePage() {
  return (
    <EmptyLayout>
      <div className="custom-page-structure">
        <h1>My Page</h1>
        <p>Content goes here</p>
      </div>
    </EmptyLayout>
  );
}
```

### Conditional Layout
```tsx
import { EmptyLayout, SideMenuLayout } from 'anysystem-design';

function Page({ useLayout }) {
  const Layout = useLayout ? SideMenuLayout : EmptyLayout;

  return (
    <Layout>
      <Content />
    </Layout>
  );
}
```

### Router Integration
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmptyLayout, SideMenuLayout } from 'anysystem-design';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages with no layout */}
        <Route path="/login" element={
          <EmptyLayout>
            <LoginPage />
          </EmptyLayout>
        } />

        <Route path="/register" element={
          <EmptyLayout>
            <RegisterPage />
          </EmptyLayout>
        } />

        {/* Protected pages with sidebar */}
        <Route path="/dashboard" element={
          <SideMenuLayout menu={<Nav />}>
            <Dashboard />
          </SideMenuLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
```

### Landing Page
```tsx
function LandingPage() {
  return (
    <EmptyLayout>
      <header className="bg-primary-600 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Menu />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome</h1>
        </section>

        <section className="features">
          {/* Features */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <p>&copy; 2024 Company</p>
        </div>
      </footer>
    </EmptyLayout>
  );
}
```

### Full-Screen Application
```tsx
function FullScreenApp() {
  return (
    <EmptyLayout>
      <div className="h-screen w-screen flex flex-col">
        <header className="h-16 bg-gray-800 text-white">
          <div className="h-full px-4 flex items-center">
            <h1>App Title</h1>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <aside className="w-64 bg-gray-100">
            <Sidebar />
          </aside>

          <main className="flex-1 overflow-auto">
            <Content />
          </main>
        </div>
      </div>
    </EmptyLayout>
  );
}
```

### Authentication Pages
```tsx
function AuthLayout({ children }) {
  return (
    <EmptyLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          {children}
        </div>
      </div>
    </EmptyLayout>
  );
}

// Usage
<AuthLayout>
  <LoginForm />
</AuthLayout>

<AuthLayout>
  <RegisterForm />
</AuthLayout>
```

### Modal/Overlay Pages
```tsx
function ModalPage() {
  return (
    <EmptyLayout>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-2xl">
          <h2>Modal Content</h2>
          <p>This page appears as an overlay</p>
        </div>
      </div>
    </EmptyLayout>
  );
}
```

## Comparison with Other Layouts

### EmptyLayout vs Container
```tsx
// EmptyLayout - no wrapper
<EmptyLayout>
  <div>Content</div>
</EmptyLayout>
// Renders: <div>Content</div>

// Container - adds wrapper with max-width
<Container>
  <div>Content</div>
</Container>
// Renders: <div class="container mx-auto..."><div>Content</div></div>
```

### EmptyLayout vs SideMenuLayout
```tsx
// EmptyLayout - no structure
<EmptyLayout>
  <Content />
</EmptyLayout>

// SideMenuLayout - full app structure
<SideMenuLayout
  header={<Navbar />}
  menu={<NavList />}
>
  <Content />
</SideMenuLayout>
```

## Implementation

The EmptyLayout is extremely simple:

```tsx
const Empty: React.FC<EmptyProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
```

This means:
- No wrapper div
- No CSS classes added
- No styles applied
- No layout structure
- No side effects
- Minimal performance impact

## Use Cases

### 1. Public Pages
```tsx
<EmptyLayout>
  <PublicHomePage />
</EmptyLayout>
```

### 2. Landing Pages
```tsx
<EmptyLayout>
  <MarketingPage />
</EmptyLayout>
```

### 3. Auth Pages
```tsx
<EmptyLayout>
  <LoginPage />
</EmptyLayout>
```

### 4. Error Pages
```tsx
<EmptyLayout>
  <Error404Page />
</EmptyLayout>
```

### 5. Custom Layouts
```tsx
<EmptyLayout>
  <CustomPageStructure />
</EmptyLayout>
```

### 6. Print Pages
```tsx
<EmptyLayout>
  <PrintableDocument />
</EmptyLayout>
```

## Pattern: Layout Switcher

Create a layout switcher for different page types:

```tsx
const LAYOUTS = {
  empty: EmptyLayout,
  sidebar: SideMenuLayout,
  container: Container
};

function Page({ layout = 'empty', ...props }) {
  const Layout = LAYOUTS[layout] || EmptyLayout;

  return (
    <Layout {...props}>
      <Content />
    </Layout>
  );
}

// Usage
<Page layout="empty" />
<Page layout="sidebar" menu={<Nav />} />
<Page layout="container" />
```

## Benefits

1. **Zero Overhead**: No additional DOM elements
2. **Maximum Flexibility**: Complete control over structure
3. **Consistent API**: Same interface as other layouts
4. **Type Safety**: Full TypeScript support
5. **Performance**: Minimal impact on render time
6. **Simplicity**: Easy to understand and use

## Limitations

1. **No Built-in Structure**: You must provide all structure
2. **No Default Styling**: All styling is your responsibility
3. **No Features**: No navigation, header, or footer provided

## Type Definitions

```tsx
export type EmptyProps = {
  children?: React.ReactNode;
};
```

## Related Components

- [SideMenuLayout](./SideMenuLayout.md) - Full app layout with sidebar
- [Container](../components/Container.md) - Content container
- [Row](../components/Row.md) - Horizontal layout
- [Column](../components/Column.md) - Vertical layout

## Best Practices

1. **Use for special pages**: Login, landing, error pages
2. **Provide structure**: Add your own layout structure
3. **Consistent switching**: Use with layout switcher pattern
4. **Type safety**: Use TypeScript for props
5. **Accessibility**: Ensure proper semantic HTML
6. **Responsive**: Handle mobile/desktop layouts yourself

## Common Patterns

### Full Width Page
```tsx
<EmptyLayout>
  <div className="w-full">
    <FullWidthContent />
  </div>
</EmptyLayout>
```

### Centered Page
```tsx
<EmptyLayout>
  <div className="min-h-screen flex items-center justify-center">
    <CenteredContent />
  </div>
</EmptyLayout>
```

### Split Page
```tsx
<EmptyLayout>
  <div className="flex h-screen">
    <div className="w-1/2 bg-primary-600">
      <LeftSide />
    </div>
    <div className="w-1/2 bg-white">
      <RightSide />
    </div>
  </div>
</EmptyLayout>
```

## Notes

- EmptyLayout is essentially a named React.Fragment
- Use when you want no layout wrapper at all
- Perfect for pages that need complete custom structure
- Part of the layout component family for consistency
- No performance overhead compared to raw fragments
- Ideal for transitional pages (login, splash, etc.)
