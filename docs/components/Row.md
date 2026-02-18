# Row

Horizontal flex layout component.

## Import

```tsx
import { Row } from 'anysystem-design';
```

## Basic Usage

```tsx
<Row>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Row>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Row content |
| `className` | `string` | - | Additional CSS classes |
| `gap` | `string` | - | Gap between items |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | - | Vertical alignment |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around"` | - | Horizontal alignment |

## Examples

### With Gap
```tsx
<Row className="gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Row>
```

### Centered Items
```tsx
<Row className="justify-center items-center gap-2">
  <FaUser />
  <span>John Doe</span>
</Row>
```

### Space Between
```tsx
<Row className="justify-between items-center">
  <h1>Title</h1>
  <Button>Action</Button>
</Row>
```

### Responsive Layout
```tsx
<Row className="flex-col md:flex-row gap-4">
  <div className="flex-1">Column 1</div>
  <div className="flex-1">Column 2</div>
  <div className="flex-1">Column 3</div>
</Row>
```

## Related Components

- [Column](./Column.md) - Vertical flex layout
- [Container](./Container.md) - Container wrapper
