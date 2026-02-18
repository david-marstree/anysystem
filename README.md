# Anysystem Design
Powerful open source libraries for React and Tailwind CSS.

## 📚 Documentation

**[View Complete Documentation](./docs/INDEX.md)**

- **[Getting Started Guide](./docs/GETTING_STARTED.md)** - Installation and setup
- **[Component Catalog](./docs/COMPONENT_CATALOG.md)** - Complete component reference
- **[API Documentation](./docs/README.md)** - Detailed API docs

### Quick Links
- [Button](./docs/components/Button.md)
- [Input & Forms](./docs/components/Input.md)
- [Modal](./docs/components/Modal.md)
- [DataTable](./docs/components/DataTable.md)
- [Layouts](./docs/layouts/SideMenuLayout.md)

## 🌐 Usage Guide
Please visit [https://david-marstree.github.io/anysystem](https://david-marstree.github.io/anysystem)

## ⚡ Quick Start

### Installation
```bash
npm install anysystem-design
```

### Basic Usage

```javascript
import {
	AppProvider,
	Button
} from "anysystem-design";

export default function App() {
	return (
		<AppProvider appName="anysystem">
			<Button variant="primary">Click Me</Button>
		</AppProvider>
	);
}
```

### Form Example

```javascript
import { Formik, Form } from 'formik';
import { FormControl, FormInput, Button } from 'anysystem-design';

function MyForm() {
	return (
		<Formik
			initialValues={{ email: '' }}
			onSubmit={(values) => console.log(values)}
		>
			<Form>
				<FormControl name="email" label="Email" required>
					<FormInput name="email" type="email" />
				</FormControl>
				<Button type="submit" variant="primary">Submit</Button>
			</Form>
		</Formik>
	);
}
```

## 🎨 Features

- **20+ Components** - Complete UI component library
- **Form-First Design** - Extensive Formik integration
- **TypeScript Support** - Full type definitions
- **Responsive** - Mobile-first design
- **Tailwind CSS** - Utility-first styling
- **Accessible** - ARIA compliant components
- **Tree Shakeable** - Import only what you need

## 📦 What's Included

- **Form Components**: Input, Select, Checkbox, Radio, DatePicker, etc.
- **Layout Components**: Container, Row, Column, SideMenuLayout
- **Interactive**: Button, Modal
- **Data Display**: DataTable, Text
- **Navigation**: Navbar, NavList

