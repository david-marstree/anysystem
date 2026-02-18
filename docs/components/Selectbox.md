# Selectbox

A flexible select component with support for single and multiple selection, custom rendering, and Formik integration.

## Import

```tsx
import { Selectbox, SelectboxMultiple, FormSelectbox } from 'anysystem-design';
import type { SelectOption } from 'anysystem-design';
```

## Basic Usage

```tsx
<Selectbox
  name="country"
  options={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' }
  ]}
  placeholder="Select a country"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `options` | `SelectOption[]` | **required** | Available options |
| `placeholder` | `string` | `"Select..."` | Placeholder text |
| `value` | `string \| number` | - | Selected value (controlled) |
| `onChange` | `(value) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable the select |
| `searchable` | `boolean` | `false` | Enable search/filter |
| `clearable` | `boolean` | `false` | Show clear button |
| `className` | `string` | - | Additional CSS classes |

## Option Type

```tsx
type SelectOption = {
  label: string;              // Display text
  value: string | number;     // Option value
  disabled?: boolean;         // Disable this option
  group?: string;            // Option group name
  icon?: ReactNode;          // Optional icon
};
```

## Single Selection

### Basic Select
```tsx
const [country, setCountry] = useState('');

<Selectbox
  name="country"
  value={country}
  onChange={(value) => setCountry(value)}
  options={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' }
  ]}
/>
```

### With Placeholder
```tsx
<Selectbox
  name="status"
  placeholder="Select status..."
  options={[
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' }
  ]}
/>
```

### With Icons
```tsx
import { FaUser, FaBuilding, FaCog } from 'react-icons/fa';

<Selectbox
  name="role"
  options={[
    { label: 'User', value: 'user', icon: <FaUser /> },
    { label: 'Organization', value: 'org', icon: <FaBuilding /> },
    { label: 'Admin', value: 'admin', icon: <FaCog /> }
  ]}
/>
```

## Multiple Selection

```tsx
import { SelectboxMultiple } from 'anysystem-design';

const [selected, setSelected] = useState<string[]>([]);

<SelectboxMultiple
  name="tags"
  value={selected}
  onChange={(values) => setSelected(values)}
  options={[
    { label: 'React', value: 'react' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Tailwind', value: 'tailwind' },
    { label: 'Node.js', value: 'nodejs' }
  ]}
  placeholder="Select tags..."
/>
```

### Multi-select Features
- Select multiple options
- Remove selected items with badges
- "Select All" option (optional)
- Custom badge rendering

## Searchable Select

Enable search to filter options:

```tsx
<Selectbox
  name="country"
  searchable
  options={countries}
  placeholder="Search countries..."
/>
```

## Clearable Select

Add a clear button to reset selection:

```tsx
<Selectbox
  name="city"
  clearable
  options={cities}
  placeholder="Select city..."
/>
```

## Grouped Options

```tsx
const options = [
  { label: 'Apple', value: 'apple', group: 'Fruits' },
  { label: 'Banana', value: 'banana', group: 'Fruits' },
  { label: 'Carrot', value: 'carrot', group: 'Vegetables' },
  { label: 'Broccoli', value: 'broccoli', group: 'Vegetables' }
];

<Selectbox
  name="food"
  options={options}
  placeholder="Select food..."
/>
```

## Disabled Options

```tsx
<Selectbox
  name="plan"
  options={[
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise', disabled: true }
  ]}
/>
```

## Formik Integration

```tsx
import { Formik, Form } from 'formik';
import { FormSelectbox } from 'anysystem-design';

<Formik
  initialValues={{ country: '' }}
  onSubmit={handleSubmit}
>
  <Form>
    <FormSelectbox
      name="country"
      options={[
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' }
      ]}
      placeholder="Select country..."
    />
    <Button type="submit">Submit</Button>
  </Form>
</Formik>
```

## Advanced Examples

### Dynamic Options
```tsx
const [category, setCategory] = useState('');
const [subcategories, setSubcategories] = useState([]);

useEffect(() => {
  // Fetch subcategories based on selected category
  if (category) {
    fetchSubcategories(category).then(setSubcategories);
  }
}, [category]);

<>
  <Selectbox
    name="category"
    value={category}
    onChange={setCategory}
    options={categoryOptions}
  />

  {category && (
    <Selectbox
      name="subcategory"
      options={subcategories}
      disabled={!subcategories.length}
    />
  )}
</>
```

### With Custom Rendering
```tsx
<Selectbox
  name="user"
  options={users.map(user => ({
    label: user.name,
    value: user.id,
    icon: <img src={user.avatar} className="w-6 h-6 rounded-full" />
  }))}
  placeholder="Select user..."
/>
```

### Cascading Selects
```tsx
function LocationSelect() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const states = getStatesByCountry(country);
  const cities = getCitiesByState(state);

  return (
    <div className="space-y-4">
      <Selectbox
        name="country"
        value={country}
        onChange={(value) => {
          setCountry(value);
          setState('');
          setCity('');
        }}
        options={countries}
        placeholder="Select country..."
      />

      <Selectbox
        name="state"
        value={state}
        onChange={(value) => {
          setState(value);
          setCity('');
        }}
        options={states}
        disabled={!country}
        placeholder="Select state..."
      />

      <Selectbox
        name="city"
        value={city}
        onChange={setCity}
        options={cities}
        disabled={!state}
        placeholder="Select city..."
      />
    </div>
  );
}
```

### Multi-Select with Limit
```tsx
function TagSelect() {
  const [tags, setTags] = useState<string[]>([]);
  const maxTags = 5;

  return (
    <>
      <SelectboxMultiple
        name="tags"
        value={tags}
        onChange={(values) => {
          if (values.length <= maxTags) {
            setTags(values);
          }
        }}
        options={tagOptions}
        placeholder={`Select up to ${maxTags} tags...`}
      />
      <p className="text-sm text-gray-500 mt-1">
        {tags.length} / {maxTags} tags selected
      </p>
    </>
  );
}
```

## With FormControl

```tsx
<FormControl
  name="country"
  label="Country"
  required
  description="Select your country of residence"
>
  <Selectbox
    name="country"
    options={countries}
    placeholder="Select country..."
  />
</FormControl>
```

## Styling

### Custom Styles
```tsx
<Selectbox
  name="custom"
  options={options}
  className="custom-select-class"
/>
```

### Size Variants
```tsx
// Small
<Selectbox name="small" options={options} className="text-sm" />

// Large
<Selectbox name="large" options={options} className="text-lg p-3" />
```

## Accessibility

- Proper ARIA attributes
- Keyboard navigation (Arrow keys, Enter, Escape)
- Screen reader support
- Focus management
- Disabled state handling

## Type Definitions

```tsx
export type SelectOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
  group?: string;
  icon?: React.ReactNode;
};

export type SelectboxProps = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  className?: string;
};

export type SelectboxMultipleProps = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  value?: (string | number)[];
  onChange?: (values: (string | number)[]) => void;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
};
```

## Helper Functions

The Selectbox includes helper functions for working with options:

```tsx
import { findOption, filterOptions, groupOptions } from 'anysystem-design/helpers';

// Find option by value
const option = findOption(options, 'us');

// Filter options by search term
const filtered = filterOptions(options, 'united');

// Group options by group property
const grouped = groupOptions(options);
```

## Related Components

- [AutoComplete](./AutoComplete.md) - Autocomplete with search
- [FormControl](./FormControl.md) - Form field wrapper
- [RadioGroup](./RadioGroup.md) - Alternative for small option sets

## Best Practices

1. **Use searchable for long lists**: Enable search when you have more than 10 options
2. **Provide clear labels**: Use descriptive option labels
3. **Group related options**: Use grouping for better organization
4. **Disable appropriately**: Disable options that aren't currently available
5. **Clear feedback**: Use FormControl for validation errors
6. **Multi-select limits**: Consider limiting the number of selections
7. **Icons sparingly**: Only use icons when they add meaningful context

## Notes

- Built on top of SelectboxBase for consistent behavior
- Uses Headless UI for accessibility
- Supports both controlled and uncontrolled modes
- Multi-select uses array values
- Search is case-insensitive and matches both label and value
