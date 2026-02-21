---
id: quick-reference
aliases: []
tags: []
---

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
| **FormControl** ⭐ | `{ FormControl }` | type, name, value, onChange, labelProps | `<FormControl type="email" name="email" value={email} onChange={setEmail} labelProps={{ label: "Email" }} />` |
| Button | `{ Button }` | variant, size, rounded | `<Button variant="primary">Click</Button>` |
| Input | `{ Input, FormInput }` | name, inputBefore, inputAfter | `<Input name="username" />` |
| PasswordInput | `{ PasswordInput }` | name | `<PasswordInput name="password" />` |
| TelephoneInput | `{ TelephoneInput }` | name, phonePrefixOptions | `<TelephoneInput name="phone" phonePrefixOptions={prefixes} />` |
| Checkbox | `{ Checkbox, FormCheckbox }` | name, checked, onChange | `<Checkbox name="terms">Agree</Checkbox>` |
| Switch | `{ Switch }` | name, value, checked, onChange | `<Switch name="notifications" value="on" checked={on} onChange={setOn} />` |
| Label | `{ Label }` | label, type, isError | `<Label label="Name" type="normal"><input /></Label>` |

> **⭐ 推薦使用 FormControl** - 涵蓋 12 種表單類型，統一 API，自動 Label 管理，適合 90% 的表單場景。詳見 [FormControl 完整指南](./examples/formcontrol-guide.md)。

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

### 1. Simple Form with FormControl (Recommended)

**最簡單的表單方式** - 使用 FormControl 統一管理所有表單控制項：

```tsx
import { FormControl, Button } from 'anysystem-design';

function UserForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    country: ''
  });

  const handleChange = (field) => (value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-4">
      <FormControl
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange('name')}
        labelProps={{ label: "姓名" }}
        placeholder="請輸入姓名"
      />

      <FormControl
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange('email')}
        labelProps={{ label: "Email" }}
      />

      <FormControl
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange('password')}
        labelProps={{ label: "密碼" }}
      />

      <FormControl
        type="select"
        name="country"
        value={form.country}
        onChange={handleChange('country')}
        labelProps={{ label: "國家" }}
        options={countries}
      />

      <Button type="submit" variant="primary">提交</Button>
    </form>
  );
}
```

**FormControl 支援的類型**：
- `text`, `email`, `number`, `password`
- `tel` (電話), `date`, `datetime`
- `select` (下拉), `autocomplete` (搜尋下拉)
- `radio` (單選群組), `switch` (開關), `confirm` (確認框)

### 2. Form with Validation
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
