# Text

A flexible typography component for rendering semantic HTML text elements with consistent styling.

## Import

```tsx
import { Text } from 'anysystem-design';
```

## Basic Usage

```tsx
<Text tag="h1">Heading 1</Text>
<Text tag="p">Paragraph text</Text>
<Text tag="span">Inline text</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"` | **required** | HTML element to render |
| `children` | `ReactNode` | **required** | Text content |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Headings
```tsx
<Text tag="h1">Main Heading</Text>
<Text tag="h2">Section Heading</Text>
<Text tag="h3">Subsection Heading</Text>
<Text tag="h4">Sub-subsection Heading</Text>
<Text tag="h5">Minor Heading</Text>
<Text tag="h6">Smallest Heading</Text>
```

### Paragraphs
```tsx
<Text tag="p">
  This is a paragraph of text. It can contain multiple sentences
  and will render as a standard paragraph element.
</Text>
```

### Inline Text
```tsx
<Text tag="span">Inline text</Text>
<Text tag="span" className="font-bold">Bold inline text</Text>
```

### With Custom Styling
```tsx
<Text tag="h1" className="text-4xl font-bold text-primary-600">
  Custom Styled Heading
</Text>

<Text tag="p" className="text-gray-600 leading-relaxed">
  Paragraph with custom color and line height
</Text>
```

## Complete Page Example

```tsx
function Article() {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <Text tag="h1" className="text-4xl font-bold mb-4">
        Article Title
      </Text>

      <Text tag="p" className="text-gray-500 mb-6">
        Published on January 1, 2024
      </Text>

      <Text tag="h2" className="text-2xl font-semibold mb-3">
        Introduction
      </Text>

      <Text tag="p" className="mb-4 leading-relaxed">
        This is the introduction paragraph. It provides an overview
        of what the article will cover.
      </Text>

      <Text tag="h2" className="text-2xl font-semibold mb-3">
        Main Content
      </Text>

      <Text tag="p" className="mb-4 leading-relaxed">
        This is the main content section. It contains the detailed
        information about the topic.
      </Text>

      <Text tag="h3" className="text-xl font-medium mb-2">
        Subsection
      </Text>

      <Text tag="p" className="mb-4 leading-relaxed">
        Additional details in a subsection.
      </Text>
    </article>
  );
}
```

## Default Styling

The Text component has default styling:
- Display: `flex flex-row`
- Gap: `gap-1` (0.25rem between inline children)

You can override these with the `className` prop.

## With Icons

```tsx
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

<Text tag="p" className="items-center">
  <FaInfoCircle className="text-blue-500" />
  Information message
</Text>

<Text tag="p" className="items-center text-green-600">
  <FaCheckCircle />
  Success message
</Text>

<Text tag="p" className="items-center text-yellow-600">
  <FaExclamationTriangle />
  Warning message
</Text>
```

## Typography Styles

### Display Text
```tsx
<Text tag="h1" className="text-6xl font-extrabold">
  Display Heading
</Text>
```

### Body Text
```tsx
<Text tag="p" className="text-base leading-7">
  Standard body text with comfortable line height.
</Text>
```

### Small Text
```tsx
<Text tag="span" className="text-sm text-gray-500">
  Small helper text
</Text>
```

### Caption
```tsx
<Text tag="span" className="text-xs text-gray-400">
  Caption or metadata
</Text>
```

## Advanced Examples

### Card Title and Description
```tsx
function Card({ title, description }) {
  return (
    <div className="p-6 bg-white rounded shadow">
      <Text tag="h3" className="text-xl font-semibold mb-2">
        {title}
      </Text>
      <Text tag="p" className="text-gray-600">
        {description}
      </Text>
    </div>
  );
}
```

### Alert with Icon
```tsx
function Alert({ type, message }) {
  const icons = {
    info: <FaInfoCircle />,
    success: <FaCheckCircle />,
    warning: <FaExclamationTriangle />,
    error: <FaTimesCircle />
  };

  const colors = {
    info: 'text-blue-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  return (
    <Text tag="p" className={`items-center ${colors[type]}`}>
      {icons[type]}
      {message}
    </Text>
  );
}
```

### Section Header
```tsx
function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <Text tag="h2" className="text-3xl font-bold mb-2">
        {title}
      </Text>
      {subtitle && (
        <Text tag="p" className="text-gray-500">
          {subtitle}
        </Text>
      )}
    </div>
  );
}
```

### List with Custom Markers
```tsx
<div className="space-y-2">
  <Text tag="p" className="items-start">
    <span className="text-primary-600 font-bold">•</span>
    First item in the list
  </Text>
  <Text tag="p" className="items-start">
    <span className="text-primary-600 font-bold">•</span>
    Second item in the list
  </Text>
  <Text tag="p" className="items-start">
    <span className="text-primary-600 font-bold">•</span>
    Third item in the list
  </Text>
</div>
```

### Quote
```tsx
<Text tag="p" className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
  "This is a quoted text that stands out from the rest of the content."
</Text>
```

### Label with Badge
```tsx
<Text tag="span" className="items-center">
  Status
  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
    Active
  </span>
</Text>
```

## Semantic HTML

The Text component helps maintain semantic HTML structure:

```tsx
// Good - semantic structure
<article>
  <Text tag="h1">Article Title</Text>
  <Text tag="h2">Section</Text>
  <Text tag="p">Content</Text>
</article>

// Avoid - using divs for text
<div className="heading">Article Title</div>
```

## Styling Utilities

### Text Alignment
```tsx
<Text tag="p" className="text-left">Left aligned</Text>
<Text tag="p" className="text-center">Center aligned</Text>
<Text tag="p" className="text-right">Right aligned</Text>
```

### Font Weights
```tsx
<Text tag="p" className="font-light">Light weight</Text>
<Text tag="p" className="font-normal">Normal weight</Text>
<Text tag="p" className="font-medium">Medium weight</Text>
<Text tag="p" className="font-semibold">Semibold weight</Text>
<Text tag="p" className="font-bold">Bold weight</Text>
```

### Text Colors
```tsx
<Text tag="p" className="text-gray-900">Dark text</Text>
<Text tag="p" className="text-gray-600">Medium text</Text>
<Text tag="p" className="text-gray-400">Light text</Text>
<Text tag="p" className="text-primary-600">Primary color</Text>
<Text tag="p" className="text-red-600">Error color</Text>
```

### Line Height
```tsx
<Text tag="p" className="leading-tight">Tight line height</Text>
<Text tag="p" className="leading-normal">Normal line height</Text>
<Text tag="p" className="leading-relaxed">Relaxed line height</Text>
<Text tag="p" className="leading-loose">Loose line height</Text>
```

## Responsive Typography

```tsx
<Text tag="h1" className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</Text>

<Text tag="p" className="text-sm md:text-base lg:text-lg">
  Responsive paragraph
</Text>
```

## Dark Mode

```tsx
<Text tag="p" className="text-gray-900 dark:text-white">
  Text that adapts to dark mode
</Text>

<Text tag="p" className="text-gray-600 dark:text-gray-300">
  Secondary text with dark mode
</Text>
```

## Accessibility

- Uses semantic HTML elements
- Maintains proper heading hierarchy
- Screen reader friendly
- Keyboard accessible
- Color contrast compliant (when styled appropriately)

## Type Definitions

```tsx
export type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: React.ReactNode;
};
```

## Related Components

- [Container](./Container.md) - Page container
- [Row](./Row.md) - Horizontal layout
- [Column](./Column.md) - Vertical layout

## Best Practices

1. **Use semantic tags**: Choose the appropriate tag for the content
2. **Heading hierarchy**: Maintain proper h1 → h2 → h3 order
3. **Consistent styling**: Use Tailwind utility classes for consistency
4. **Responsive text**: Adjust sizes for different screen sizes
5. **Readable line length**: Keep paragraphs to ~60-80 characters wide
6. **Sufficient contrast**: Ensure text is readable on backgrounds
7. **Line height**: Use comfortable line spacing for readability

## Common Patterns

### Hero Section
```tsx
<div className="text-center py-20">
  <Text tag="h1" className="text-5xl font-bold mb-4">
    Welcome to Our App
  </Text>
  <Text tag="p" className="text-xl text-gray-600">
    Build amazing things with our platform
  </Text>
</div>
```

### Feature List
```tsx
<div className="space-y-4">
  <Text tag="h3" className="text-2xl font-semibold">
    Features
  </Text>
  {features.map((feature) => (
    <Text key={feature.id} tag="p" className="items-center">
      <FaCheck className="text-green-500" />
      {feature.name}
    </Text>
  ))}
</div>
```

### Status Message
```tsx
<Text tag="p" className="items-center text-green-600">
  <FaCheckCircle />
  Operation completed successfully
</Text>
```

## Notes

- The component uses `React.createElement` for dynamic tag rendering
- Default styling includes `flex flex-row gap-1`
- Gap allows for easy icon + text combinations
- Override default styles with `className` prop
- All Tailwind utility classes are supported
- Component is lightweight and performant
