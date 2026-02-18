# AutoComplete

A searchable autocomplete input component with support for single and multiple selection.

## Import

```tsx
import { AutoComplete, AutoCompleteMultiple } from 'anysystem-design';
import type { SelectOption } from 'anysystem-design';
```

## Basic Usage

```tsx
const [city, setCity] = useState('');

const cities = [
  { id: '1', label: 'New York', value: 'ny' },
  { id: '2', label: 'Los Angeles', value: 'la' },
  { id: '3', label: 'Chicago', value: 'chi' }
];

<AutoComplete
  name="city"
  value={city}
  onChange={setCity}
  options={cities}
  placeholder="Search cities..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `options` | `SelectOption[]` | **required** | Available options |
| `value` | `string \| number` | `""` | Selected value (controlled) |
| `onChange` | `(value: string) => void` | - | Change handler |
| `multiple` | `boolean` | `false` | Enable multiple selection |
| `placeholder` | `string` | - | Placeholder text |
| `readOnly` | `boolean` | `false` | Disable input |
| `closeButton` | `boolean` | `true` | Show clear button |
| `valueField` | `ValueField` | `"value"` | Field to use for value |
| `onSearch` | `(query: string) => void` | - | Search callback |
| `className` | `string` | - | Additional CSS classes |
| `labelProps` | `LabelBaseProps` | - | Label configuration |

## Option Type

```tsx
type SelectOption = {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
};
```

## Examples

### Single Selection
```tsx
const [country, setCountry] = useState('');

const countries = [
  { id: 'us', label: 'United States', value: 'us' },
  { id: 'uk', label: 'United Kingdom', value: 'uk' },
  { id: 'ca', label: 'Canada', value: 'ca' }
];

<AutoComplete
  name="country"
  value={country}
  onChange={setCountry}
  options={countries}
  placeholder="Search countries..."
/>
```

### Multiple Selection
```tsx
import { AutoCompleteMultiple } from 'anysystem-design';

const [skills, setSkills] = useState<string[]>([]);

const skillOptions = [
  { id: '1', label: 'React', value: 'react' },
  { id: '2', label: 'TypeScript', value: 'typescript' },
  { id: '3', label: 'Node.js', value: 'nodejs' }
];

<AutoCompleteMultiple
  name="skills"
  value={skills}
  onChange={setSkills}
  options={skillOptions}
  placeholder="Search skills..."
/>
```

### With Label
```tsx
<AutoComplete
  name="city"
  value={city}
  onChange={setCity}
  options={cities}
  labelProps={{
    label: "City",
    type: "normal"
  }}
/>
```

### Without Close Button
```tsx
<AutoComplete
  name="category"
  value={category}
  onChange={setCategory}
  options={categories}
  closeButton={false}
/>
```

### Read-Only
```tsx
<AutoComplete
  name="department"
  value="Engineering"
  onChange={() => {}}
  options={departments}
  readOnly
/>
```

## With Search Callback

```tsx
function SearchableAutoComplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length >= 2) {
      const data = await fetchResults(searchQuery);
      setResults(data);
    }
  };

  return (
    <AutoComplete
      name="search"
      value=""
      onChange={(value) => console.log('Selected:', value)}
      options={results}
      onSearch={handleSearch}
      placeholder="Type to search..."
    />
  );
}
```

## With Formik

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  city: Yup.string().required('City is required')
});

function AddressForm() {
  const cities = [
    { id: '1', label: 'New York', value: 'ny' },
    { id: '2', label: 'Los Angeles', value: 'la' },
    { id: '3', label: 'Chicago', value: 'chi' }
  ];

  return (
    <Formik
      initialValues={{ city: '' }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <FormControl
            name="city"
            label="City"
            required
            error={touched.city ? errors.city : ''}
          >
            <AutoComplete
              name="city"
              value={values.city}
              onChange={(value) => setFieldValue('city', value)}
              options={cities}
              placeholder="Search city..."
            />
          </FormControl>

          <Button type="submit" variant="primary">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Complete Example

```tsx
import { useState } from 'react';
import { AutoComplete, AutoCompleteMultiple, FormControl, Button } from 'anysystem-design';

function SkillsForm() {
  const [primarySkill, setPrimarySkill] = useState('');
  const [additionalSkills, setAdditionalSkills] = useState<string[]>([]);

  const skills = [
    { id: '1', label: 'JavaScript', value: 'js' },
    { id: '2', label: 'TypeScript', value: 'ts' },
    { id: '3', label: 'React', value: 'react' },
    { id: '4', label: 'Vue', value: 'vue' },
    { id: '5', label: 'Angular', value: 'angular' },
    { id: '6', label: 'Node.js', value: 'nodejs' },
    { id: '7', label: 'Python', value: 'python' },
    { id: '8', label: 'Java', value: 'java' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      primarySkill,
      additionalSkills
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <FormControl
        name="primarySkill"
        label="Primary Skill"
        required
        description="Your main area of expertise"
      >
        <AutoComplete
          name="primarySkill"
          value={primarySkill}
          onChange={setPrimarySkill}
          options={skills}
          placeholder="Search skills..."
        />
      </FormControl>

      <FormControl
        name="additionalSkills"
        label="Additional Skills"
        description="Select multiple skills"
      >
        <AutoCompleteMultiple
          name="additionalSkills"
          value={additionalSkills}
          onChange={setAdditionalSkills}
          options={skills.filter(s => s.value !== primarySkill)}
          placeholder="Search skills..."
        />
      </FormControl>

      <Button type="submit" variant="primary">Save Skills</Button>
    </form>
  );
}
```

## Features

### Search/Filter
- Real-time filtering as you type
- Case-insensitive search
- Matches label text

### Keyboard Navigation
- Arrow keys to navigate options
- Enter to select
- Escape to close
- Tab to move focus

### Clear Button
- Shows when value is selected
- Click to clear selection
- Can be disabled with `closeButton={false}`

### Visual Feedback
- Check icon for selected option
- Highlight on hover
- Transition animations
- Selected option badge (multiple mode)

## Multiple Selection

### Basic Multiple
```tsx
<AutoCompleteMultiple
  name="tags"
  value={tags}
  onChange={setTags}
  options={tagOptions}
  placeholder="Select tags..."
/>
```

### Selected Items Display
The multiple variant displays selected items as badges that can be removed individually.

### Remove Items
Click the X icon on any badge to remove that selection.

## Advanced Examples

### Dynamic Options
```tsx
function DynamicAutoComplete() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (query.length >= 2) {
      setLoading(true);
      const results = await api.search(query);
      setOptions(results);
      setLoading(false);
    }
  };

  return (
    <AutoComplete
      name="search"
      value={value}
      onChange={setValue}
      options={options}
      onSearch={handleSearch}
      placeholder={loading ? 'Searching...' : 'Type to search...'}
    />
  );
}
```

### Country/City Cascading
```tsx
function LocationSelector() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setCity('');
    setCities(getCitiesByCountry(value));
  };

  return (
    <div className="space-y-4">
      <AutoComplete
        name="country"
        value={country}
        onChange={handleCountryChange}
        options={countries}
        placeholder="Select country..."
      />

      <AutoComplete
        name="city"
        value={city}
        onChange={setCity}
        options={cities}
        placeholder="Select city..."
        readOnly={!country}
      />
    </div>
  );
}
```

### With Custom Rendering
For custom option rendering, you would need to extend the component or use the base components directly.

## Imperative API

Access component methods via ref:

```tsx
const autoCompleteRef = useRef<AutoCompleteHandler>(null);

// Search programmatically
autoCompleteRef.current?.search('query');

// Set value programmatically
autoCompleteRef.current?.setValue('value');
```

## Styling

### Default Styling
- Combobox interface with dropdown
- Search input field
- Options list with transitions
- Check icons for selected items

### Custom Styling
```tsx
<AutoComplete
  name="custom"
  value={value}
  onChange={setValue}
  options={options}
  className="custom-autocomplete-class"
/>
```

## Dark Mode

Automatic dark mode support:
- Input background adapts
- Options list background
- Text color adjustments
- Border colors

## Accessibility

- Built on Headless UI's Combobox
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Label association

## Type Definitions

```tsx
export type AutoCompleteHandler = {
  search: (query: string) => void;
  setValue: (value: string) => void;
};

export type AutoCompleteProps<ListOption extends SelectOption> = {
  id?: string;
  name: string;
  options: ListOption[];
  value?: string | number;
  onChange?: (value: string) => void;
  multiple?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  closeButton?: boolean;
  onSearch?: (query: string) => void;
  valueField?: ValueField<ListOption>;
  className?: string;
  labelProps?: LabelBaseProps;
};

export type AutoCompleteMultipleProps<ListOption extends SelectOption> = {
  // Similar to AutoCompleteProps but value is string[]
  value?: (string | number)[];
  onChange?: (values: string[]) => void;
};
```

## Related Components

- [Selectbox](./Selectbox.md) - Dropdown selection without search
- [Input](./Input.md) - Text input component
- [FormControl](./FormControl.md) - Form field wrapper
- [TelephoneInput](./TelephoneInput.md) - Uses AutoComplete for prefix

## Best Practices

1. **Use for large lists**: Best with 10+ options that benefit from search
2. **Provide onSearch**: For dynamic/API-based options
3. **Clear placeholder**: Describe what users should search for
4. **Reasonable debounce**: For API searches, debounce input
5. **Handle empty states**: Show message when no results found
6. **Accessible labels**: Always provide labels for form fields
7. **Loading states**: Indicate when searching/loading

## Common Use Cases

- City/country selection
- User search
- Tag selection
- Skill picker
- Category selection
- Product search
- Email address search
- Dynamic data selection

## Performance Notes

- Filtering is done client-side by default
- For large datasets, use `onSearch` with server-side filtering
- Options are memoized when possible
- Debounce search callbacks for API calls

## Notes

- Uses Headless UI's Combobox component
- Search is case-insensitive
- Filters by label field only
- Multiple mode shows selected items as badges
- Close button can be hidden with `closeButton={false}`
- Supports custom value fields with `valueField` prop
- Can be wrapped with Label component using `labelProps`
