# API Reference - AnySystem Design

Complete API documentation for all 22 components.

## Table of Contents

- [Forms](#forms)
  - [Button](#button)
  - [Input](#input)
  - [PasswordInput](#passwordinput)
  - [TelephoneInput](#telephoneinput)
  - [Checkbox](#checkbox)
  - [Switch](#switch)
  - [FormControl](#formcontrol)
  - [Label](#label)
- [Selection](#selection)
  - [Selectbox](#selectbox)
  - [AutoComplete](#autocomplete)
  - [RadioGroup](#radiogroup)
  - [DatePicker](#datepicker)
- [Layout](#layout)
  - [Container](#container)
  - [Row](#row)
  - [Column](#column)
- [Navigation](#navigation)
  - [Navbar](#navbar)
  - [NavList](#navlist)
- [Data Display](#data-display)
  - [DataTable](#datatable)
  - [Text](#text)
- [Interactive](#interactive)
  - [Modal](#modal)
- [Layouts](#layouts)
  - [SideMenuLayout](#sidemenulayout)
  - [EmptyLayout](#emptylayout)

---

## Forms

### Button

Customizable button with variants, sizes, and hover effects.

**Import:**
```tsx
import { Button } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "primary" \| "danger"` | `"default"` | Button color variant |
| size | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Button size |
| rounded | `boolean` | `false` | Use fully rounded corners |
| disabled | `boolean` | `false` | Disable the button |
| type | `"button" \| "submit" \| "reset"` | `"button"` | HTML button type |
| onClick | `() => void` | - | Click handler |
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | - | Button content |

**Example:**
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Submit
</Button>
```

**Related:** FormControl, Modal

---

### Input

Text input with decorative elements and label support.

**Import:**
```tsx
import { Input, FormInput } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Input name and ID |
| type | `string` | `"text"` | HTML input type |
| placeholder | `string` | - | Placeholder text |
| value | `string` | - | Controlled value |
| onChange | `(e: ChangeEvent) => void` | - | Change handler |
| disabled | `boolean` | `false` | Disable input |
| inputBefore | `ReactNode` | - | Element before input |
| inputAfter | `ReactNode` | - | Element after input |
| labelProps | `LabelBaseProps` | - | Label configuration |
| className | `string` | - | Additional CSS classes |

**Variants:**
- `FormInput` - Formik-integrated version
- `Textarea` - Multi-line text input
- `InputTel` - Telephone input

**Example:**
```tsx
<Input
  name="username"
  placeholder="Enter username"
  inputBefore={<FaUser />}
/>
```

**Related:** FormControl, PasswordInput, TelephoneInput

---

### PasswordInput

Password input with visibility toggle.

**Import:**
```tsx
import { PasswordInput, FormPasswordInput } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Input name and ID |
| placeholder | `string` | `"Password"` | Placeholder text |
| value | `string` | - | Controlled value |
| onChange | `(e: ChangeEvent) => void` | - | Change handler |
| disabled | `boolean` | `false` | Disable input |
| labelProps | `LabelBaseProps` | - | Label configuration |

**Variants:**
- `FormPasswordInput` - Formik-integrated version

**Example:**
```tsx
<PasswordInput name="password" placeholder="Enter password" />
```

**Related:** FormControl, Input

---

### TelephoneInput

Phone input with country code selector.

**Import:**
```tsx
import { TelephoneInput } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Input name |
| value | `string` | - | Format: "+1-5551234567" |
| onChange | `(value: string) => void` | - | Change handler |
| phonePrefixOptions | `SelectOption[]` | **required** | Available country codes |
| phonePrefix | `string` | - | Default country code |
| disabled | `boolean` | `false` | Disable input |

**Value Format:** `"+{prefix}-{number}"` (e.g., "+1-5551234567")

**Example:**
```tsx
const prefixes = [
  { id: '1', label: 'US +1', value: '+1' },
  { id: '44', label: 'UK +44', value: '+44' }
];

<TelephoneInput
  name="phone"
  value={phone}
  onChange={setPhone}
  phonePrefixOptions={prefixes}
  phonePrefix="+1"
/>
```

**Related:** FormControl, Input

---

### Checkbox

Checkbox with Formik support.

**Import:**
```tsx
import { Checkbox, FormCheckbox } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Checkbox name |
| checked | `boolean` | - | Controlled checked state |
| onChange | `(checked: boolean) => void` | - | Change handler |
| disabled | `boolean` | `false` | Disable checkbox |
| children | `ReactNode` | - | Label text |
| className | `string` | - | Additional CSS classes |

**Variants:**
- `FormCheckbox` - Formik-integrated version

**Example:**
```tsx
<Checkbox name="terms" checked={agreed} onChange={setAgreed}>
  I agree to the terms and conditions
</Checkbox>
```

**Related:** FormControl, Switch

---

### Switch

Toggle switch for boolean values.

**Import:**
```tsx
import { Switch } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Switch name |
| value | `string` | **required** | Switch value when on |
| checked | `boolean` | - | Controlled checked state |
| onChange | `(checked: boolean) => void` | **required** | Change handler |
| disabled | `boolean` | `false` | Disable switch |
| children | `ReactNode` | - | Label text |

**Example:**
```tsx
<Switch
  name="notifications"
  value="enabled"
  checked={enabled}
  onChange={setEnabled}
>
  Enable notifications
</Switch>
```

**Related:** Checkbox, FormControl

---

### FormControl

Form field wrapper with label, validation, and error display.

**Import:**
```tsx
import { FormControl } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Field name (matches input) |
| label | `string` | - | Field label |
| required | `boolean` | `false` | Show required indicator |
| description | `string` | - | Helper text |
| error | `string` | - | Error message |
| children | `ReactNode` | **required** | Input component |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<FormControl
  name="email"
  label="Email Address"
  required
  description="We'll never share your email"
  error={errors.email}
>
  <FormInput name="email" type="email" />
</FormControl>
```

**Related:** Input, Selectbox, DatePicker

---

### Label

Label component with error display and multiple layout types.

**Import:**
```tsx
import { Label } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `ReactNode` | **required** | Label content |
| type | `"border" \| "normal" \| "horizontal"` | `"border"` | Layout type |
| htmlFor | `string` | - | Input ID to associate |
| required | `boolean` | `false` | Show required indicator |
| isError | `boolean` | `false` | Error state |
| errorMessage | `string` | - | Error message |
| children | `ReactNode` | - | Input element |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<Label
  label="Username"
  htmlFor="username"
  type="normal"
  required
  isError={!!error}
  errorMessage={error}
>
  <input id="username" />
</Label>
```

**Related:** FormControl, Input

---

## Selection

### Selectbox

Single and multiple selection dropdown.

**Import:**
```tsx
import { Selectbox, SelectboxMultiple, FormSelectbox } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Select name |
| options | `SelectOption[]` | **required** | Available options |
| value | `string \| number` | - | Selected value (single) |
| values | `(string \| number)[]` | - | Selected values (multiple) |
| onChange | `(value) => void` | - | Change handler |
| placeholder | `string` | `"Select..."` | Placeholder text |
| disabled | `boolean` | `false` | Disable select |
| labelProps | `LabelBaseProps` | - | Label configuration |

**SelectOption Type:**
```tsx
interface SelectOption {
  id: string | number;
  label: string;
  value: string | number;
}
```

**Variants:**
- `SelectboxMultiple` - Multiple selection
- `FormSelectbox` - Formik-integrated version

**Example:**
```tsx
const countries = [
  { id: 'us', label: 'United States', value: 'us' },
  { id: 'uk', label: 'United Kingdom', value: 'uk' }
];

<Selectbox
  name="country"
  options={countries}
  value={country}
  onChange={setCountry}
  placeholder="Select country"
/>
```

**Related:** AutoComplete, RadioGroup, FormControl

---

### AutoComplete

Searchable autocomplete with single and multiple selection.

**Import:**
```tsx
import { AutoComplete, AutoCompleteMultiple } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Input name |
| options | `SelectOption[]` | **required** | Available options |
| value | `string \| number` | - | Selected value (single) |
| values | `(string \| number)[]` | - | Selected values (multiple) |
| onChange | `(value) => void` | - | Change handler |
| onSearch | `(query: string) => void` | - | Search handler |
| placeholder | `string` | - | Placeholder text |
| disabled | `boolean` | `false` | Disable input |
| multiple | `boolean` | `false` | Multiple selection mode |

**Variants:**
- `AutoCompleteMultiple` - Multiple selection mode

**Example:**
```tsx
<AutoComplete
  name="city"
  value={city}
  onChange={setCity}
  options={cities}
  onSearch={handleSearch}
  placeholder="Search cities..."
/>
```

**Related:** Selectbox, Input, FormControl

---

### RadioGroup

Radio button group with visual feedback.

**Import:**
```tsx
import { RadioGroup } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Radio group name |
| options | `SelectOption[]` | **required** | Available options |
| value | `string` | **required** | Selected value |
| onChange | `(value: string) => void` | **required** | Change handler |
| variant | `"sm" \| "md"` | `"md"` | Size variant |
| disabled | `boolean` | `false` | Disable all options |

**Example:**
```tsx
const plans = [
  { id: 'free', label: 'Free', value: 'free' },
  { id: 'pro', label: 'Pro', value: 'pro' },
  { id: 'enterprise', label: 'Enterprise', value: 'enterprise' }
];

<RadioGroup
  name="plan"
  value={plan}
  onChange={setPlan}
  options={plans}
/>
```

**Related:** Selectbox, Checkbox, FormControl

---

### DatePicker

Date and time picker with calendar interface.

**Import:**
```tsx
import { DatePicker } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | **required** | Input name |
| value | `string` | **required** | Unix timestamp (seconds) as string |
| onChange | `(value: string) => void` | **required** | Change handler |
| showTime | `boolean` | `false` | Show time picker |
| disabled | `boolean` | `false` | Disable picker |
| placeholder | `string` | - | Placeholder text |

**IMPORTANT:** Value must be Unix timestamp in **seconds** as a string.

**Example:**
```tsx
const [timestamp, setTimestamp] = useState(
  Math.floor(Date.now() / 1000).toString()
);

<DatePicker
  name="date"
  value={timestamp}
  onChange={setTimestamp}
  showTime
/>
```

**Converting to/from Date:**
```tsx
// Date to timestamp
const timestamp = Math.floor(date.getTime() / 1000).toString();

// Timestamp to Date
const date = new Date(parseInt(timestamp) * 1000);
```

**Related:** FormControl, Input

---

## Layout

### Container

Responsive container wrapper with max-width.

**Import:**
```tsx
import { Container } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxWidth | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"xl"` | Maximum width |
| padding | `boolean` | `true` | Add horizontal padding |
| children | `ReactNode` | - | Content |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<Container maxWidth="lg">
  <h1>Page Content</h1>
</Container>
```

**Related:** Row, Column

---

### Row

Horizontal flex layout.

**Import:**
```tsx
import { Row } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | - | Content |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<Row className="gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</Row>
```

**Related:** Column, Container

---

### Column

Vertical flex layout.

**Import:**
```tsx
import { Column } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | - | Content |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<Column className="gap-4">
  <div>Row 1</div>
  <div>Row 2</div>
</Column>
```

**Related:** Row, Container

---

## Navigation

### Navbar

Top navigation bar with menu toggle.

**Import:**
```tsx
import { Navbar } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | `string` | - | App title |
| menuRef | `React.RefObject<SideMenuHandler>` | - | Menu toggle ref |
| children | `ReactNode` | - | Additional content (right side) |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
const menuRef = useRef<SideMenuHandler>(null);

<Navbar title="My App" menuRef={menuRef}>
  <UserMenu />
</Navbar>
```

**Related:** SideMenuLayout, NavList

---

### NavList

Hierarchical navigation list with icons.

**Import:**
```tsx
import { NavList } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| list | `NavItemObject[]` | **required** | Navigation items |
| location | `{ pathname: string }` | - | Current location (for highlighting) |

**NavItemObject Type:**
```tsx
interface NavItemObject {
  id: string;
  name: string;
  icon?: ReactNode;
  to?: string;
  children?: NavItemObject[];
}
```

**Example:**
```tsx
const menuItems = [
  { id: '1', name: 'Dashboard', icon: <FaHome />, to: '/' },
  {
    id: '2',
    name: 'Settings',
    icon: <FaCog />,
    children: [
      { id: '2-1', name: 'Profile', to: '/settings/profile' },
      { id: '2-2', name: 'Security', to: '/settings/security' }
    ]
  }
];

<NavList list={menuItems} location={location} />
```

**Related:** Navbar, SideMenuLayout

---

## Data Display

### DataTable

Feature-rich data table with selection and column chooser.

**Import:**
```tsx
import { DataTable } from 'anysystem-design';
import type { DataTableField } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | `T[]` | **required** | Table data |
| fields | `DataTableField<T>[]` | **required** | Column definitions |
| name | `string` | - | Unique name (for localStorage) |
| selectable | `boolean` | `false` | Enable row selection |
| chooseFieldable | `boolean` | `false` | Enable column chooser |
| onRowClick | `(row: T) => void` | - | Row click handler |
| selectedRows | `T[]` | - | Controlled selected rows |
| onSelectionChange | `(rows: T[]) => void` | - | Selection change handler |

**DataTableField Type:**
```tsx
interface DataTableField<T> {
  key: keyof T;
  label: string;
  default?: boolean;  // Show by default
  render?: (row: T) => ReactNode;
  width?: string;
}
```

**Example:**
```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const fields: DataTableField<User>[] = [
  { key: 'id', label: 'ID', default: true, width: '80px' },
  { key: 'name', label: 'Name', default: true },
  { key: 'email', label: 'Email', default: true },
  {
    key: 'id',
    label: 'Actions',
    render: (row) => <Button size="sm">Edit</Button>
  }
];

<DataTable
  name="users-table"
  data={users}
  fields={fields}
  selectable
  chooseFieldable
/>
```

**Related:** Container, Button

---

### Text

Typography component for semantic HTML text.

**Import:**
```tsx
import { Text } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tag | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"` | **required** | HTML tag to render |
| children | `ReactNode` | - | Text content |
| className | `string` | - | Additional CSS classes |

**Example:**
```tsx
<Text tag="h1">Page Title</Text>
<Text tag="p">Paragraph content</Text>
```

---

## Interactive

### Modal

Modal dialog with animations and buttons.

**Import:**
```tsx
import { Modal } from 'anysystem-design';
import type { ModalHandler, ModalButton } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | `string` | **required** | Modal title |
| size | `"md" \| "lg" \| "xl" \| "full"` | `"md"` | Modal size |
| buttons | `ModalButton[]` | - | Footer buttons |
| onClickBackdropClose | `boolean` | `true` | Close on backdrop click |
| children | `ReactNode` | - | Modal content |

**ModalButton Type:**
```tsx
interface ModalButton {
  label: string;
  onClick: () => void;
  variant?: "default" | "primary" | "danger";
  disabled?: boolean;
}
```

**ModalHandler Type:**
```tsx
interface ModalHandler {
  show: () => void;
  hide: () => void;
  toggle: () => void;
}
```

**IMPORTANT:** Modal uses imperative API via ref.

**Example:**
```tsx
const modalRef = useRef<ModalHandler>(null);

<>
  <Button onClick={() => modalRef.current?.show()}>
    Open Modal
  </Button>

  <Modal
    ref={modalRef}
    title="Confirm Action"
    size="md"
    buttons={[
      {
        label: 'Cancel',
        onClick: () => modalRef.current?.hide()
      },
      {
        label: 'Confirm',
        variant: 'primary',
        onClick: handleConfirm
      }
    ]}
  >
    Are you sure you want to proceed?
  </Modal>
</>
```

**Related:** Button

---

## Layouts

### SideMenuLayout

Responsive sidebar layout with menu toggle.

**Import:**
```tsx
import { SideMenuLayout } from 'anysystem-design';
import type { SideMenuHandler } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| header | `ReactNode` | - | Header component (Navbar) |
| menu | `ReactNode` | - | Sidebar menu (NavList) |
| menuRef | `React.RefObject<SideMenuHandler>` | - | Menu control ref |
| children | `ReactNode` | - | Main content |

**SideMenuHandler Type:**
```tsx
interface SideMenuHandler {
  toggle: () => void;
  open: () => void;
  close: () => void;
}
```

**Example:**
```tsx
const menuRef = useRef<SideMenuHandler>(null);

<SideMenuLayout
  menuRef={menuRef}
  header={<Navbar title="My App" menuRef={menuRef} />}
  menu={<NavList list={menuItems} location={location} />}
>
  <Outlet />
</SideMenuLayout>
```

**Related:** Navbar, NavList, EmptyLayout

---

### EmptyLayout

Minimal wrapper (React.Fragment) for custom layouts.

**Import:**
```tsx
import { EmptyLayout } from 'anysystem-design';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | - | Content |

**Example:**
```tsx
<EmptyLayout>
  <CustomLayout />
</EmptyLayout>
```

**Related:** SideMenuLayout

---

## Common Patterns

### Form with Validation

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormInput, FormPasswordInput, Button } from 'anysystem-design';

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
});

<Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={schema}
  onSubmit={handleSubmit}
>
  {({ errors, touched }) => (
    <Form>
      <FormControl
        name="email"
        label="Email"
        required
        error={touched.email ? errors.email : ''}
      >
        <FormInput name="email" type="email" />
      </FormControl>

      <FormControl
        name="password"
        label="Password"
        required
        error={touched.password ? errors.password : ''}
      >
        <FormPasswordInput name="password" />
      </FormControl>

      <Button type="submit" variant="primary">Login</Button>
    </Form>
  )}
</Formik>
```

### Sidebar Layout

```tsx
import { SideMenuLayout, Navbar, NavList } from 'anysystem-design';
import { useLocation, Outlet } from 'react-router-dom';

const menuRef = useRef<SideMenuHandler>(null);
const location = useLocation();

<SideMenuLayout
  menuRef={menuRef}
  header={<Navbar title="My App" menuRef={menuRef} />}
  menu={<NavList list={menuItems} location={location} />}
>
  <Outlet />
</SideMenuLayout>
```

---

## Type Exports

All TypeScript types are exported:

```tsx
import type {
  ButtonProps,
  InputProps,
  ModalHandler,
  ModalButton,
  DataTableField,
  NavItemObject,
  SelectOption,
  SideMenuHandler,
  LabelBaseProps
} from 'anysystem-design';
```

---

**For complete examples and guides, see the full documentation at `docs/`**
