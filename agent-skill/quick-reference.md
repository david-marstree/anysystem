# AnySystem Design - Quick Reference

Quick lookup guide for AI assistants helping with AnySystem Design.

## Installation & Setup

```bash
npm install anysystem-design
```

```tsx
import { AppProvider } from 'anysystem-design';

<AppProvider appName="My App">
  <App />
</AppProvider>
```

## Component Index

### Forms
| Component | Import | Key Props | Example |
|-----------|--------|-----------|---------|
| Button | `{ Button }` | variant, size, rounded | `<Button variant="primary">Click</Button>` |
| Input | `{ Input, FormInput }` | name, inputBefore, inputAfter | `<Input name="username" />` |
| PasswordInput | `{ PasswordInput }` | name | `<PasswordInput name="password" />` |
| TelephoneInput | `{ TelephoneInput }` | name, phonePrefixOptions | `<TelephoneInput name="phone" phonePrefixOptions={prefixes} />` |
| Checkbox | `{ Checkbox, FormCheckbox }` | name, checked, onChange | `<Checkbox name="terms">Agree</Checkbox>` |
| Switch | `{ Switch }` | name, value, checked, onChange | `<Switch name="notifications" value="on" checked={on} onChange={setOn} />` |
| FormControl | `{ FormControl }` | name, label, required, error | `<FormControl name="email" label="Email" required><Input /></FormControl>` |
| Label | `{ Label }` | label, type, isError | `<Label label="Name" type="normal"><input /></Label>` |

### Selection
| Component | Import | Key Props | Special Notes |
|-----------|--------|-----------|---------------|
| Selectbox | `{ Selectbox, SelectboxMultiple }` | name, options, value | Has multiple variant |
| AutoComplete | `{ AutoComplete, AutoCompleteMultiple }` | name, options, onSearch | Searchable |
| RadioGroup | `{ RadioGroup }` | name, options, value, onChange | Visual feedback |
| DatePicker | `{ DatePicker }` | name, value, onChange, showTime | **Unix timestamps (seconds) as strings** |

### Layout
| Component | Use Case | Example |
|-----------|----------|---------|
| Container | Page wrapper | `<Container maxWidth="lg">` |
| Row | Horizontal layout | `<Row className="gap-4">` |
| Column | Vertical layout | `<Column className="gap-4">` |

### Navigation
| Component | Use Case | Key Props |
|-----------|----------|-----------|
| Navbar | Top bar | title, menuRef |
| NavList | Sidebar menu | list, location |

### Data & Interactive
| Component | Purpose | Special Feature |
|-----------|---------|-----------------|
| DataTable | Tables | Selection, column chooser |
| Text | Typography | Semantic HTML tags |
| Modal | Dialogs | Imperative API (ref) |

### Layouts
| Component | Use Case |
|-----------|----------|
| SideMenuLayout | App with sidebar |
| EmptyLayout | Custom layouts |

## Common Patterns

### 1. Form with Validation
```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormInput, Button } from 'anysystem-design';

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
      <FormControl name="email" label="Email" required error={errors.email}>
        <FormInput name="email" type="email" />
      </FormControl>
      <FormControl name="password" label="Password" required error={errors.password}>
        <FormPasswordInput name="password" />
      </FormControl>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )}
</Formik>
```

### 2. Sidebar Layout
```tsx
import { SideMenuLayout, Navbar, NavList } from 'anysystem-design';

const menuRef = useRef<SideMenuHandler>(null);

<SideMenuLayout
  menuRef={menuRef}
  header={<Navbar title="My App" menuRef={menuRef} />}
  menu={<NavList list={menuItems} location={location} />}
>
  <Outlet />
</SideMenuLayout>
```

### 3. Data Table
```tsx
<DataTable
  name="users-table"
  data={users}
  fields={[
    { key: 'id', label: 'ID', default: true },
    { key: 'name', label: 'Name', default: true },
    { key: 'email', label: 'Email' }
  ]}
  selectable
  chooseFieldable
/>
```

### 4. Modal Dialog
```tsx
const modalRef = useRef<ModalHandler>(null);

<>
  <Button onClick={() => modalRef.current?.show()}>Open</Button>

  <Modal
    ref={modalRef}
    title="Confirm"
    buttons={[
      { label: 'Cancel', onClick: () => modalRef.current?.hide() },
      { label: 'OK', variant: 'primary', onClick: handleConfirm }
    ]}
  >
    Content here
  </Modal>
</>
```

## Quick Tips

### Must Remember
1. ✅ Always wrap with `<AppProvider>`
2. ✅ Use `Form*` variants with Formik (FormInput, not Input)
3. ✅ DatePicker value = Unix timestamp (seconds) as string
4. ✅ Modal uses imperative API (ref.current.show/hide)
5. ✅ All components support TypeScript

### Component Variants
- Input → FormInput, Textarea
- PasswordInput → FormPasswordInput
- Checkbox → FormCheckbox
- Selectbox → SelectboxMultiple, FormSelectbox
- AutoComplete → AutoCompleteMultiple

### Common Props
- `name` - Required for form inputs
- `className` - Custom styling (Tailwind)
- `labelProps` - Add label to inputs
- `variant` - Different styles (Button, RadioGroup)
- `size` - Different sizes (Button, Modal)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Components not styled | Add library path to Tailwind content |
| "AppProvider required" | Wrap app with AppProvider |
| Formik not updating | Use FormInput, not Input |
| DatePicker weird values | Use Unix timestamps (seconds) as strings |
| Modal not showing | Use ref.current?.show() |

## TypeScript

All components export types:
```tsx
import type {
  ButtonProps,
  InputProps,
  ModalHandler,
  DataTableField,
  NavItemObject,
  SelectOption
} from 'anysystem-design';
```

## Documentation Lookup

For detailed docs, check:
- Component docs: `docs/components/[ComponentName].md`
- Layout docs: `docs/layouts/[LayoutName].md`
- Getting started: `docs/GETTING_STARTED.md`
- Full catalog: `docs/COMPONENT_CATALOG.md`

---

**For AI Assistants**: This is your quick reference. For detailed examples, read the full documentation files.
