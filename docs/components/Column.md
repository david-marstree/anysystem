# Column

Vertical flex layout component.

## Import

```tsx
import { Column } from 'anysystem-design';
```

## Basic Usage

```tsx
<Column>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Column>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Column content |
| `className` | `string` | - | Additional CSS classes |
| `gap` | `string` | - | Gap between items |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | - | Horizontal alignment |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around"` | - | Vertical alignment |

## Examples

### With Gap
```tsx
<Column className="gap-4">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</Column>
```

### Centered Items
```tsx
<Column className="items-center justify-center gap-2 h-screen">
  <h1>Welcome</h1>
  <p>Centered content</p>
  <Button>Get Started</Button>
</Column>
```

### Full Height Sidebar
```tsx
<Column className="h-screen justify-between">
  <div>Header</div>
  <div className="flex-1">Content</div>
  <div>Footer</div>
</Column>
```

## Related Components

- [Row](./Row.md) - Horizontal flex layout
- [Container](./Container.md) - Container wrapper
