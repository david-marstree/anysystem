# Anysystem Design
Powerful open source libraries for React and Tailwind CSS.

## Usage Guide
Please visit [https://david-marstree.github.io/anysystem](https://david-marstree.github.io/anysystem)

## Getting started
```bash
npm install anysystem-design
```
### Basic usage

```javascript
import { 
	AppProvider, 
	Button 
} from "anysystem-design";

export default function App() {
	return (
		<AppProvider appName="anysystem">
			<Button>Button</Button>
		</AppProvider>
	);
}
```

