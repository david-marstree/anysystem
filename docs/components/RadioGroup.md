# RadioGroup

A radio button group component for single selection with visual feedback and custom styling.

## Import

```tsx
import { RadioGroup } from 'anysystem-design';
import type { SelectOption } from 'anysystem-design';
```

## Basic Usage

```tsx
const [selected, setSelected] = useState('option1');

<RadioGroup
  name="choice"
  value={selected}
  onChange={setSelected}
  options={[
    { id: '1', label: 'Option 1', value: 'option1' },
    { id: '2', label: 'Option 2', value: 'option2' },
    { id: '3', label: 'Option 3', value: 'option3' }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `value` | `string` | **required** | Selected value |
| `onChange` | `(value: string) => void` | **required** | Change handler |
| `options` | `SelectOption[]` | **required** | Available options |
| `variant` | `"sm" \| "md"` | `"md"` | Size variant |
| `readOnly` | `boolean` | `false` | Disable selection |
| `valueField` | `ValueField` | `"value"` | Field to use for value |
| `className` | `string` | - | Additional CSS classes |

## Option Type

```tsx
type SelectOption = {
  id: string | number;    // Unique identifier
  label: string;         // Display text
  value: string | number; // Option value
  disabled?: boolean;    // Disable this option
};
```

## Examples

### Basic Radio Group
```tsx
const [gender, setGender] = useState('');

<RadioGroup
  name="gender"
  value={gender}
  onChange={setGender}
  options={[
    { id: '1', label: 'Male', value: 'male' },
    { id: '2', label: 'Female', value: 'female' },
    { id: '3', label: 'Other', value: 'other' }
  ]}
/>
```

### Small Variant
```tsx
<RadioGroup
  name="size"
  value={size}
  onChange={setSize}
  variant="sm"
  options={[
    { id: '1', label: 'Small', value: 's' },
    { id: '2', label: 'Medium', value: 'm' },
    { id: '3', label: 'Large', value: 'l' }
  ]}
/>
```

### With FormControl
```tsx
<FormControl name="plan" label="Choose a Plan" required>
  <RadioGroup
    name="plan"
    value={plan}
    onChange={setPlan}
    options={[
      { id: '1', label: 'Free', value: 'free' },
      { id: '2', label: 'Pro', value: 'pro' },
      { id: '3', label: 'Enterprise', value: 'enterprise' }
    ]}
  />
</FormControl>
```

### Read-Only
```tsx
<RadioGroup
  name="status"
  value="active"
  onChange={() => {}}
  readOnly
  options={[
    { id: '1', label: 'Active', value: 'active' },
    { id: '2', label: 'Inactive', value: 'inactive' }
  ]}
/>
```

## With Formik

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  plan: Yup.string().required('Please select a plan')
});

function SubscriptionForm() {
  return (
    <Formik
      initialValues={{ plan: '' }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <FormControl
            name="plan"
            label="Subscription Plan"
            required
            error={touched.plan ? errors.plan : ''}
          >
            <RadioGroup
              name="plan"
              value={values.plan}
              onChange={(value) => setFieldValue('plan', value)}
              options={[
                { id: '1', label: 'Free - $0/month', value: 'free' },
                { id: '2', label: 'Pro - $9/month', value: 'pro' },
                { id: '3', label: 'Enterprise - $29/month', value: 'enterprise' }
              ]}
            />
          </FormControl>

          <Button type="submit" variant="primary">Subscribe</Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Rich Content Options

The RadioGroup supports rich content in labels by customizing the component:

```tsx
const planOptions = [
  {
    id: '1',
    label: 'Free Plan',
    value: 'free',
    description: 'Perfect for individuals',
    price: '$0'
  },
  {
    id: '2',
    label: 'Pro Plan',
    value: 'pro',
    description: 'Best for professionals',
    price: '$9'
  },
  {
    id: '3',
    label: 'Enterprise',
    value: 'enterprise',
    description: 'For large teams',
    price: '$29'
  }
];

// Note: You'll need to extend the component to support description and price
```

## Variants

### Medium (default)
```tsx
<RadioGroup
  variant="md"
  name="choice"
  value={value}
  onChange={setValue}
  options={options}
/>
```
- Padding: `px-5 py-4`
- Default text size

### Small
```tsx
<RadioGroup
  variant="sm"
  name="choice"
  value={value}
  onChange={setValue}
  options={options}
/>
```
- Padding: `px-3 py-2`
- Text size: `text-sm`

## Styling

### Default State
- Border: `border border-gray-400`
- Background: Transparent
- Cursor: Pointer

### Selected State
- Border: `border-primary-600`
- Background: `bg-primary-100` (light mode)
- Background: `bg-gray-800` (dark mode)
- Icon: Filled check circle in primary color

### Hover State
- Icon opacity increases on hover
- Smooth transitions

### Disabled State
```tsx
options={[
  { id: '1', label: 'Available', value: 'available' },
  { id: '2', label: 'Sold Out', value: 'soldout', disabled: true }
]}
```

## Complete Example

```tsx
import { useState } from 'react';
import { RadioGroup, FormControl, Button } from 'anysystem-design';

function ShippingForm() {
  const [shippingMethod, setShippingMethod] = useState('standard');

  const shippingOptions = [
    {
      id: '1',
      label: 'Standard Shipping (5-7 days)',
      value: 'standard'
    },
    {
      id: '2',
      label: 'Express Shipping (2-3 days)',
      value: 'express'
    },
    {
      id: '3',
      label: 'Overnight (1 day)',
      value: 'overnight'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected shipping:', shippingMethod);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormControl
        name="shipping"
        label="Shipping Method"
        description="Choose your preferred shipping speed"
        required
      >
        <RadioGroup
          name="shipping"
          value={shippingMethod}
          onChange={setShippingMethod}
          options={shippingOptions}
        />
      </FormControl>

      <Button type="submit" variant="primary">
        Continue to Payment
      </Button>
    </form>
  );
}
```

## Advanced Examples

### Payment Method Selection
```tsx
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa';

const paymentMethods = [
  {
    id: '1',
    label: 'Credit Card',
    value: 'card',
    icon: <FaCreditCard />
  },
  {
    id: '2',
    label: 'PayPal',
    value: 'paypal',
    icon: <FaPaypal />
  },
  {
    id: '3',
    label: 'Bank Transfer',
    value: 'bank',
    icon: <FaUniversity />
  }
];

<RadioGroup
  name="payment"
  value={paymentMethod}
  onChange={setPaymentMethod}
  options={paymentMethods}
/>
```

### With Conditional Content
```tsx
function PlanSelector() {
  const [plan, setPlan] = useState('');

  return (
    <div className="space-y-4">
      <RadioGroup
        name="plan"
        value={plan}
        onChange={setPlan}
        options={[
          { id: '1', label: 'Monthly', value: 'monthly' },
          { id: '2', label: 'Yearly (Save 20%)', value: 'yearly' }
        ]}
      />

      {plan === 'yearly' && (
        <div className="p-4 bg-green-50 rounded">
          You save $24 with the yearly plan!
        </div>
      )}
    </div>
  );
}
```

### Nested in Grid
```tsx
<div className="grid grid-cols-2 gap-4">
  <FormControl name="size" label="Size">
    <RadioGroup
      name="size"
      value={size}
      onChange={setSize}
      variant="sm"
      options={sizeOptions}
    />
  </FormControl>

  <FormControl name="color" label="Color">
    <RadioGroup
      name="color"
      value={color}
      onChange={setColor}
      variant="sm"
      options={colorOptions}
    />
  </FormControl>
</div>
```

## Dark Mode

Automatic dark mode support:
- Border: Adjusts for dark background
- Selected background: `dark:bg-gray-800`
- Selected border: `dark:border-gray-700`
- Icon: `dark:fill-primary-50`

## Accessibility

- Built on Headless UI's RadioGroup
- Proper ARIA attributes
- Keyboard navigation (Arrow keys, Space)
- Screen reader support
- Focus visible states
- Semantic HTML structure

## Icons

### Selected State Icon
- `HiCheckCircle` (filled) when selected
- Primary color fill
- Full opacity

### Unselected State Icon
- `HiOutlineCheckCircle` (outline) when unselected
- Gray color
- Hover shows primary color

## Type Definitions

```tsx
type SelectOption = {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
};

type RadioGroupProps<ListOption extends SelectOption> = {
  variant?: "sm" | "md";
  id?: string;
  name: string;
  options: ListOption[];
  value: string;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  valueField?: ValueField<ListOption>;
};
```

## Related Components

- [Checkbox](./Checkbox.md) - For multiple selection
- [Selectbox](./Selectbox.md) - Dropdown alternative
- [FormControl](./FormControl.md) - Form field wrapper
- [Switch](./Switch.md) - Toggle alternative

## Best Practices

1. **Use for 2-6 options**: RadioGroup works best with a limited number of choices
2. **Mutually exclusive**: Each option should be independent
3. **Clear labels**: Use descriptive, action-oriented text
4. **Default selection**: Consider pre-selecting the most common option
5. **Group related options**: Use FormControl for context
6. **Vertical layout**: Keep options in a vertical list for scannability
7. **Provide context**: Use descriptions for complex choices

## Common Use Cases

- Plan selection
- Shipping method
- Payment method
- Size/color selection
- Gender selection
- Yes/No questions
- Priority levels

## Notes

- Uses Headless UI's RadioGroup for accessibility
- Built-in visual feedback with check icons
- Supports custom value fields
- Smooth transitions and animations
- Responsive design
- Option IDs must be unique
