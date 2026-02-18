# AnySystem Design - Documentation Index

Complete documentation for the AnySystem Design React component library.

## 📚 Getting Started

- **[Main README](./README.md)** - Overview, installation, and quick start
- **[Getting Started Guide](./GETTING_STARTED.md)** - Step-by-step setup and tutorials
- **[Component Catalog](./COMPONENT_CATALOG.md)** - Quick reference for all components

---

## 🎯 Component Documentation

### Form Components

#### Input Components
- **[Input](./components/Input.md)** - Text input with decorative elements and labels
- **[PasswordInput](./components/PasswordInput.md)** - Password input with visibility toggle
- **[TelephoneInput](./components/TelephoneInput.md)** - Phone number input with formatting

#### Selection Components
- **[Selectbox](./components/Selectbox.md)** - Single and multiple selection dropdown
- **[AutoComplete](./components/AutoComplete.md)** - Autocomplete with search
- **[RadioGroup](./components/RadioGroup.md)** - Radio button group
- **[DatePicker](./components/DatePicker.md)** - Date and time selection component

#### Boolean Inputs
- **[Checkbox](./components/Checkbox.md)** - Checkbox with Formik support
- **[Switch](./components/Switch.md)** - Toggle switch

#### Form Utilities
- **[FormControl](./components/FormControl.md)** - Form field wrapper with label and validation
- **[Label](./components/Label.md)** - Label component

### Interactive Components
- **[Button](./components/Button.md)** - Customizable button with variants and sizes
- **[Modal](./components/Modal.md)** - Modal dialog with animations

### Layout Components
- **[Container](./components/Container.md)** - Responsive container wrapper
- **[Row](./components/Row.md)** - Horizontal flex layout
- **[Column](./components/Column.md)** - Vertical flex layout

### Page Layouts
- **[SideMenuLayout](./layouts/SideMenuLayout.md)** - Responsive sidebar layout
- **[EmptyLayout](./layouts/EmptyLayout.md)** - Minimal layout wrapper

### Navigation Components
- **[Navbar](./components/Navbar.md)** - Top navigation bar
- **[NavList](./components/NavList.md)** - Navigation list/menu

### Data Display Components
- **[DataTable](./components/DataTable.md)** - Feature-rich data table
- **[Text](./components/Text.md)** - Typography component

---

## 📖 Documentation by Use Case

### Building Forms
Start with these components:
1. [FormControl](./components/FormControl.md) - Field wrapper
2. [Input](./components/Input.md) - Text inputs
3. [Selectbox](./components/Selectbox.md) - Dropdowns
4. [Checkbox](./components/Checkbox.md) - Boolean inputs
5. [Button](./components/Button.md) - Submit buttons

**Tutorial**: See [Getting Started - Your First Form](./GETTING_STARTED.md#your-first-form)

### Creating Layouts
Start with these components:
1. [SideMenuLayout](./layouts/SideMenuLayout.md) - App layout
2. [Container](./components/Container.md) - Content wrapper
3. [Row](./components/Row.md) & [Column](./components/Column.md) - Flex layouts

**Tutorial**: See [Getting Started - Your First Layout](./GETTING_STARTED.md#your-first-layout)

### Displaying Data
Start with these components:
1. [DataTable](./components/DataTable.md) - Tables
2. [Container](./components/Container.md) - Layout
3. [Button](./components/Button.md) - Actions

**Tutorial**: See [Getting Started - Your First Data Table](./GETTING_STARTED.md#your-first-data-table)

### Building Modals & Dialogs
Start with these components:
1. [Modal](./components/Modal.md) - Dialog container
2. [Button](./components/Button.md) - Action buttons
3. [FormControl](./components/FormControl.md) - Form fields

---

## 🔍 Quick Reference

### Most Used Components

| Component | Use For | Documentation |
|-----------|---------|---------------|
| Button | Actions, submit buttons | [Docs](./components/Button.md) |
| Input | Text input fields | [Docs](./components/Input.md) |
| FormControl | Form field wrapper | [Docs](./components/FormControl.md) |
| Selectbox | Dropdowns | [Docs](./components/Selectbox.md) |
| Modal | Dialogs, popups | [Docs](./components/Modal.md) |
| DataTable | Data display | [Docs](./components/DataTable.md) |
| Container | Page layout | [Docs](./components/Container.md) |
| SideMenuLayout | App layout | [Docs](./layouts/SideMenuLayout.md) |

### Component Variants

| Base Component | Formik Variant | Multiple Variant | Other Variants |
|----------------|----------------|------------------|----------------|
| Input | FormInput | - | Textarea, InputTel |
| PasswordInput | FormPasswordInput | - | - |
| Selectbox | FormSelectbox | SelectboxMultiple | SelectboxBase |
| AutoComplete | - | AutoCompleteMultiple | AutoCompleteBase |
| Checkbox | FormCheckbox | - | CheckboxBase |
| Label | FormLabel | - | LabelBase |

---

## 📦 Installation & Setup

### Quick Install
```bash
npm install anysystem-design
```

### Required Setup
1. Install peer dependencies
2. Configure Tailwind CSS
3. Wrap app with AppProvider

**Full guide**: [Getting Started](./GETTING_STARTED.md)

---

## 🎨 Customization

### Tailwind Configuration
All components use Tailwind CSS and can be customized through your `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        600: '#your-color', // Customize primary color
      }
    }
  }
}
```

### Component Styling
Most components accept `className` prop for custom styling:

```tsx
<Button className="custom-class">Button</Button>
<Input className={{ input: "custom-input", container: "custom-container" }} />
```

---

## 🏗️ Architecture

### Component Structure
```
Component/
├── index.tsx           # Public exports
├── Component.tsx       # Main implementation
├── ComponentBase.tsx   # Base implementation
├── FormComponent.tsx   # Formik variant
├── helpers.tsx        # Utilities
└── type.tsx           # Type definitions
```

### Required Context
```tsx
<AppProvider appName="My App">
  <App />
</AppProvider>
```

---

## 💡 Examples

### Complete Form Example
```tsx
<Formik initialValues={...} validationSchema={...} onSubmit={...}>
  {({ errors, touched }) => (
    <Form>
      <FormControl name="email" label="Email" required error={errors.email}>
        <FormInput name="email" type="email" />
      </FormControl>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )}
</Formik>
```

### Complete Layout Example
```tsx
<SideMenuLayout
  header={<Navbar title="My App" />}
  menu={<NavList items={menuItems} />}
>
  <Container>
    <Outlet />
  </Container>
</SideMenuLayout>
```

More examples in individual component documentation.

---

## 🔗 Resources

- **Package**: `anysystem-design` on npm
- **Version**: 0.0.48
- **License**: Check package.json
- **Repository**: GitHub (check package.json)
- **Storybook**: Run `npm run storybook`

---

## 📝 Documentation Status

### ✅ Complete Documentation (All Components!)
- Button
- Modal
- Input
- PasswordInput
- TelephoneInput
- FormControl
- Label
- Selectbox
- AutoComplete
- RadioGroup
- DatePicker
- Checkbox
- Switch
- DataTable
- Text
- Container, Row, Column
- Navbar
- NavList
- SideMenuLayout
- EmptyLayout

---

## 🤝 Contributing

Documentation improvements are welcome! Each component doc should include:
- Import statement
- Basic usage
- Props table
- Multiple examples
- Related components
- Type definitions

---

## 📞 Support

For issues or questions:
1. Check the component documentation
2. Review the Getting Started guide
3. Look at Storybook examples
4. Check the source code
5. Open an issue on GitHub

---

**Last Updated**: 2026-02-18
**Version**: 0.0.48
