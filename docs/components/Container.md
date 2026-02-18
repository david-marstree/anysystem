# Container

A responsive container component with max-width and padding.

## Import

```tsx
import { Container } from 'anysystem-design';
```

## Basic Usage

```tsx
<Container>
  <h1>Page Content</h1>
  <p>Your content goes here</p>
</Container>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Container content |
| `maxWidth` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"xl"` | Maximum width |
| `padding` | `boolean` | `true` | Add horizontal padding |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default Container
```tsx
<Container>
  <h1>Welcome</h1>
  <p>This content is centered with max-width</p>
</Container>
```

### Different Sizes
```tsx
<Container maxWidth="sm">Small container</Container>
<Container maxWidth="md">Medium container</Container>
<Container maxWidth="lg">Large container</Container>
<Container maxWidth="xl">Extra large container</Container>
<Container maxWidth="2xl">2X large container</Container>
<Container maxWidth="full">Full width container</Container>
```

### Without Padding
```tsx
<Container padding={false}>
  <div className="bg-blue-500">Edge to edge content</div>
</Container>
```

### With Custom Styling
```tsx
<Container className="bg-gray-100 shadow-lg rounded-lg">
  <h1>Custom Styled Container</h1>
</Container>
```

## Common Layouts

### Page Layout
```tsx
<Container>
  <header className="py-8">
    <h1>Page Title</h1>
  </header>

  <main>
    <p>Main content</p>
  </main>

  <footer className="py-8 border-t">
    <p>Footer content</p>
  </footer>
</Container>
```

### Nested Containers
```tsx
<Container maxWidth="2xl" className="bg-gray-100">
  <Container maxWidth="lg" className="bg-white shadow-lg">
    <h1>Nested Container</h1>
  </Container>
</Container>
```

## Related Components

- [Row](./Row.md) - Horizontal flex layout
- [Column](./Column.md) - Vertical flex layout
