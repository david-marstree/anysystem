# TelephoneInput

A specialized telephone number input with country code prefix selector and formatting.

## Import

```tsx
import { TelephoneInput } from 'anysystem-design';
import type { SelectOption } from 'anysystem-design';
```

## Basic Usage

```tsx
const [phone, setPhone] = useState('');

const prefixOptions = [
  { id: '1', label: '+1', value: '+1' },    // USA/Canada
  { id: '44', label: '+44', value: '+44' }, // UK
  { id: '86', label: '+86', value: '+86' }  // China
];

<TelephoneInput
  type="tel"
  name="phone"
  value={phone}
  onChange={setPhone}
  phonePrefixOptions={prefixOptions}
  phonePrefix="+1"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"tel"` | **required** | Must be "tel" |
| `name` | `string` | **required** | Input name |
| `value` | `string` | - | Phone value (format: "+1-5551234567") |
| `onChange` | `(value: string) => void` | - | Change handler |
| `phonePrefixOptions` | `SelectOption[]` | **required** | Country code options |
| `phonePrefix` | `string` | - | Default prefix |
| `className` | `object` | - | Custom styling |
| `inputProps` | `InputHTMLAttributes` | - | Additional input props |

## Value Format

The component uses a **hyphen-separated format**:
```
{prefix}-{number}

Examples:
"+1-5551234567"
"+44-2071234567"
"+86-13812345678"
```

## Examples

### Basic Phone Input
```tsx
const [phone, setPhone] = useState('+1-');

const phonePrefixes = [
  { id: '1', label: '🇺🇸 +1', value: '+1' },
  { id: '44', label: '🇬🇧 +44', value: '+44' },
  { id: '81', label: '🇯🇵 +81', value: '+81' }
];

<TelephoneInput
  type="tel"
  name="phone"
  value={phone}
  onChange={setPhone}
  phonePrefixOptions={phonePrefixes}
  phonePrefix="+1"
  placeholder="Enter phone number"
/>
```

### With Country Flags
```tsx
const countryPrefixes = [
  { id: 'us', label: '🇺🇸 United States (+1)', value: '+1' },
  { id: 'uk', label: '🇬🇧 United Kingdom (+44)', value: '+44' },
  { id: 'ca', label: '🇨🇦 Canada (+1)', value: '+1' },
  { id: 'au', label: '🇦🇺 Australia (+61)', value: '+61' },
  { id: 'jp', label: '🇯🇵 Japan (+81)', value: '+81' },
  { id: 'cn', label: '🇨🇳 China (+86)', value: '+86' }
];

<TelephoneInput
  type="tel"
  name="mobile"
  value={mobile}
  onChange={setMobile}
  phonePrefixOptions={countryPrefixes}
  phonePrefix="+1"
/>
```

### With FormControl
```tsx
<FormControl
  name="phone"
  label="Phone Number"
  required
  description="Include country code"
>
  <TelephoneInput
    type="tel"
    name="phone"
    value={phone}
    onChange={setPhone}
    phonePrefixOptions={prefixes}
    phonePrefix="+1"
  />
</FormControl>
```

### With Validation
```tsx
function PhoneInput() {
  const [phone, setPhone] = useState('+1-');
  const [error, setError] = useState('');

  const validatePhone = (value: string) => {
    const [prefix, number] = value.split('-');
    if (!number || number.length < 7) {
      setError('Please enter a valid phone number');
    } else {
      setError('');
    }
  };

  const handleChange = (value: string) => {
    setPhone(value);
    validatePhone(value);
  };

  return (
    <FormControl
      name="phone"
      label="Phone Number"
      error={error}
    >
      <TelephoneInput
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        phonePrefixOptions={prefixes}
        phonePrefix="+1"
      />
    </FormControl>
  );
}
```

## With Formik

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const phoneSchema = Yup.object({
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+\d+-\d{7,15}$/, 'Invalid phone number format')
});

function ContactForm() {
  const prefixes = [
    { id: '1', label: '+1', value: '+1' },
    { id: '44', label: '+44', value: '+44' },
    { id: '86', label: '+86', value: '+86' }
  ];

  return (
    <Formik
      initialValues={{ phone: '+1-' }}
      validationSchema={phoneSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <FormControl
            name="phone"
            label="Phone Number"
            required
            error={touched.phone ? errors.phone : ''}
          >
            <TelephoneInput
              type="tel"
              name="phone"
              value={values.phone}
              onChange={(value) => setFieldValue('phone', value)}
              phonePrefixOptions={prefixes}
              phonePrefix="+1"
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
import { TelephoneInput, FormControl, Button } from 'anysystem-design';

function SignupForm() {
  const [formData, setFormData] = useState({
    phone: '+1-',
    altPhone: '+1-'
  });

  const countryPrefixes = [
    { id: 'us', label: '🇺🇸 +1', value: '+1' },
    { id: 'uk', label: '🇬🇧 +44', value: '+44' },
    { id: 'ca', label: '🇨🇦 +1', value: '+1' },
    { id: 'au', label: '🇦🇺 +61', value: '+61' },
    { id: 'de', label: '🇩🇪 +49', value: '+49' },
    { id: 'fr', label: '🇫🇷 +33', value: '+33' },
    { id: 'jp', label: '🇯🇵 +81', value: '+81' },
    { id: 'cn', label: '🇨🇳 +86', value: '+86' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone numbers:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <FormControl
        name="phone"
        label="Primary Phone"
        required
        description="Your main contact number"
      >
        <TelephoneInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
          phonePrefixOptions={countryPrefixes}
          phonePrefix="+1"
          placeholder="5551234567"
        />
      </FormControl>

      <FormControl
        name="altPhone"
        label="Alternative Phone"
        description="Optional backup number"
      >
        <TelephoneInput
          type="tel"
          name="altPhone"
          value={formData.altPhone}
          onChange={(value) => setFormData({ ...formData, altPhone: value })}
          phonePrefixOptions={countryPrefixes}
          phonePrefix="+1"
          placeholder="5559876543"
        />
      </FormControl>

      <Button type="submit" variant="primary">
        Continue
      </Button>
    </form>
  );
}
```

## Component Structure

The TelephoneInput consists of two parts:

### 1. Prefix Selector (50% width)
- AutoComplete component
- Searchable dropdown
- Country code selection

### 2. Number Input (50% width)
- InputBase component
- Tel input type
- Number entry

## Layout

```tsx
<div className="flex">
  <div className="w-1/2">
    {/* Prefix AutoComplete */}
  </div>
  <InputBase className={{ container: "w-1/2" }}>
    {/* Number input */}
  </InputBase>
  <input type="hidden" name={name} value={realPhone} />
</div>
```

## Custom Styling

```tsx
<TelephoneInput
  type="tel"
  name="phone"
  value={phone}
  onChange={setPhone}
  phonePrefixOptions={prefixes}
  className={{
    container: "custom-container",
    input: "custom-input"
  }}
/>
```

## Parsing Phone Value

```tsx
// Get parts from phone value
const [prefix, number] = phone.split('-');

console.log('Country code:', prefix);  // "+1"
console.log('Number:', number);         // "5551234567"

// Format for display
const formatted = `${prefix} ${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
// Result: "+1 555-123-4567"
```

## Common Country Codes

```tsx
const commonPrefixes = [
  { id: 'us', label: '🇺🇸 United States (+1)', value: '+1' },
  { id: 'uk', label: '🇬🇧 United Kingdom (+44)', value: '+44' },
  { id: 'ca', label: '🇨🇦 Canada (+1)', value: '+1' },
  { id: 'au', label: '🇦🇺 Australia (+61)', value: '+61' },
  { id: 'de', label: '🇩🇪 Germany (+49)', value: '+49' },
  { id: 'fr', label: '🇫🇷 France (+33)', value: '+33' },
  { id: 'it', label: '🇮🇹 Italy (+39)', value: '+39' },
  { id: 'es', label: '🇪🇸 Spain (+34)', value: '+34' },
  { id: 'jp', label: '🇯🇵 Japan (+81)', value: '+81' },
  { id: 'cn', label: '🇨🇳 China (+86)', value: '+86' },
  { id: 'in', label: '🇮🇳 India (+91)', value: '+91' },
  { id: 'br', label: '🇧🇷 Brazil (+55)', value: '+55' },
  { id: 'mx', label: '🇲🇽 Mexico (+52)', value: '+52' },
  { id: 'ru', label: '🇷🇺 Russia (+7)', value: '+7' },
  { id: 'kr', label: '🇰🇷 South Korea (+82)', value: '+82' }
];
```

## Validation Patterns

### Basic Validation
```tsx
const isValidPhone = (value: string): boolean => {
  const [prefix, number] = value.split('-');
  return prefix && number && number.length >= 7 && number.length <= 15;
};
```

### Yup Schema
```tsx
const phoneValidation = Yup.string()
  .required('Phone is required')
  .matches(/^\+\d+-\d{7,15}$/, 'Invalid phone format');
```

### Custom Validator
```tsx
const validatePhone = (value: string): string | undefined => {
  if (!value) return 'Phone is required';

  const [prefix, number] = value.split('-');

  if (!prefix || !prefix.startsWith('+')) {
    return 'Invalid country code';
  }

  if (!number || number.length < 7) {
    return 'Phone number too short';
  }

  if (number.length > 15) {
    return 'Phone number too long';
  }

  if (!/^\d+$/.test(number)) {
    return 'Phone number must contain only digits';
  }

  return undefined;
};
```

## Hidden Input

The component includes a hidden input for form submission:

```tsx
<input
  type="hidden"
  name={name}
  value={realPhone}  // Combined prefix-number
  className="!hidden"
/>
```

## State Management

Internal state uses `useReducer`:

```tsx
type State = {
  prefix: string;    // e.g., "+1"
  content: string;   // e.g., "5551234567"
  realPhone: string; // e.g., "+1-5551234567"
};
```

## Accessibility

- Proper input type="tel"
- Label association
- Keyboard navigation
- Screen reader support
- Hidden input for form submission

## Type Definitions

```tsx
export type TelephoneInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    type: "tel";
    name: string;
    className?: {
      container?: string;
      input?: string;
    };
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    phonePrefixOptions: SelectOption[];
    phonePrefix?: string;
    onChange?: (value: string) => unknown;
  };
```

## Related Components

- [Input](./Input.md) - Base input component
- [AutoComplete](./AutoComplete.md) - Used for prefix selector
- [FormControl](./FormControl.md) - Form field wrapper

## Best Practices

1. **Provide all prefixes**: Include common international codes
2. **Use flags**: Add country flag emojis for visual identification
3. **Default prefix**: Set appropriate default based on user location
4. **Validate format**: Check both prefix and number
5. **Format display**: Show formatted numbers in UI
6. **Store raw value**: Save unformatted "+1-5551234567" in database
7. **Clear errors**: Provide helpful validation messages

## Common Use Cases

- Contact forms
- User registration
- Profile settings
- Checkout forms
- Emergency contacts
- Two-factor authentication
- International applications

## Notes

- Uses AutoComplete for searchable prefix selector
- Each part (prefix/number) is 50% width
- Value format: `{prefix}-{number}`
- Includes hidden input for form submission
- Prefix selector has no close button by default
- Number input uses InputBase component
- Supports all standard input HTML attributes
