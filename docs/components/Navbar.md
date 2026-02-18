# Navbar

A responsive top navigation bar component with menu toggle functionality for SideMenuLayout integration.

## Import

```tsx
import { Navbar } from 'anysystem-design';
```

## Basic Usage

```tsx
<Navbar title="My Application" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Home"` | Application or page title |
| `menuRef` | `React.RefObject<SideMenuHandler>` | - | Reference to SideMenu for toggle |
| `children` | `ReactNode` | - | Additional navbar content (centered on desktop) |

## Features

- **Sticky Header**: Fixed at top with `sticky top-0`
- **Responsive Toggle**: Different behavior on mobile/desktop
- **Menu Integration**: Controls SideMenuLayout sidebar
- **Dark Mode**: Automatic dark mode support
- **Centered Content**: Children centered on desktop (≥1024px)

## Examples

### Basic Navbar
```tsx
<Navbar title="Dashboard" />
```

### With Menu Integration
```tsx
import { useRef } from 'react';
import { Navbar, SideMenuLayout } from 'anysystem-design';
import type { SideMenuHandler } from 'anysystem-design';

function Layout() {
  const menuRef = useRef<SideMenuHandler>(null);

  return (
    <SideMenuLayout
      menuRef={menuRef}
      header={<Navbar title="My App" menuRef={menuRef} />}
      menu={<NavList items={menuItems} />}
    >
      <Outlet />
    </SideMenuLayout>
  );
}
```

### With Custom Content
```tsx
<Navbar title="Dashboard" menuRef={menuRef}>
  <div className="flex items-center gap-4">
    <input
      type="search"
      placeholder="Search..."
      className="px-4 py-2 rounded border"
    />
    <button className="p-2">
      <FaBell />
    </button>
  </div>
</Navbar>
```

### With User Profile
```tsx
<Navbar title="Admin Panel" menuRef={menuRef}>
  <div className="flex items-center gap-4">
    <span>Welcome, John</span>
    <img
      src="/avatar.jpg"
      alt="Avatar"
      className="w-8 h-8 rounded-full"
    />
  </div>
</Navbar>
```

## Complete Layout Example

```tsx
import { useRef } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import {
  SideMenuLayout,
  Navbar,
  NavList,
  Container
} from 'anysystem-design';
import type { SideMenuHandler } from 'anysystem-design';
import { FaHome, FaUsers, FaCog, FaBell, FaUser } from 'react-icons/fa';

function Layout() {
  const menuRef = useRef<SideMenuHandler>(null);

  const menuItems = [
    { label: 'Dashboard', path: '/', icon: FaHome },
    { label: 'Users', path: '/users', icon: FaUsers },
    { label: 'Settings', path: '/settings', icon: FaCog }
  ];

  return (
    <SideMenuLayout
      menuRef={menuRef}
      header={
        <Navbar title="Admin Dashboard" menuRef={menuRef}>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded">
              <FaBell />
            </button>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
              <FaUser />
              <span className="hidden sm:inline">John Doe</span>
            </button>
          </div>
        </Navbar>
      }
      menu={<NavList list={menuItems} />}
    >
      <Container>
        <Outlet />
      </Container>
    </SideMenuLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## Responsive Behavior

### Desktop (≥ 1024px)
- Menu button shows with title and icon
- Toggles sidebar collapse (keeps sidebar visible but minimized)
- Children content is centered
- Fixed width menu button: `w-[320px]`

### Mobile (< 1024px)
- Compact menu button (hamburger + title)
- Toggles sidebar overlay (shows/hides completely)
- Children content is hidden
- Full width button

## Menu Toggle Behavior

### Desktop Toggle
```tsx
menuRef.current?.toggleMenu()
```
- Collapses/expands sidebar
- Sidebar remains visible
- Content area adjusts

### Mobile Toggle
```tsx
menuRef.current?.toggleSmMenu()
```
- Shows/hides sidebar overlay
- Backdrop appears when open
- Closes on backdrop click

## Styling

### Default Styling
```css
- Height: 56px
- Background: white (dark: gray-900)
- Shadow: shadow
- Position: sticky top-0
- Z-index: 10
```

### Custom Styling
```tsx
<div className="shadow-lg">
  <Navbar title="App" menuRef={menuRef}>
    <div className="text-primary-600">Custom Content</div>
  </Navbar>
</div>
```

## Dark Mode

Automatic dark mode support:
- Background: `dark:bg-gray-900`
- Text: `dark:text-white`
- Hover: `dark:hover:bg-gray-700`

## Advanced Examples

### With Search
```tsx
<Navbar title="Products" menuRef={menuRef}>
  <div className="flex items-center gap-2">
    <FaSearch className="text-gray-400" />
    <input
      type="search"
      placeholder="Search products..."
      className="px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
  </div>
</Navbar>
```

### With Notifications
```tsx
function NotificationNavbar() {
  const [count, setCount] = useState(5);

  return (
    <Navbar title="Dashboard" menuRef={menuRef}>
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded">
          <FaBell size={20} />
          {count > 0 && (
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
              {count}
            </span>
          )}
        </button>
      </div>
    </Navbar>
  );
}
```

### With Dropdown Menu
```tsx
import { Menu } from '@headlessui/react';

<Navbar title="App" menuRef={menuRef}>
  <Menu as="div" className="relative">
    <Menu.Button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
      <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
      <FaChevronDown />
    </Menu.Button>

    <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
      <Menu.Item>
        {({ active }) => (
          <a
            href="/profile"
            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`}
          >
            Profile
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={handleLogout}
            className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2`}
          >
            Logout
          </button>
        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
</Navbar>
```

### Multi-Level Layout
```tsx
<Navbar title="Dashboard" menuRef={menuRef}>
  <div className="flex items-center gap-6">
    <nav className="hidden md:flex gap-4">
      <a href="/overview" className="hover:text-primary-600">Overview</a>
      <a href="/analytics" className="hover:text-primary-600">Analytics</a>
      <a href="/reports" className="hover:text-primary-600">Reports</a>
    </nav>

    <div className="flex items-center gap-2">
      <button className="p-2"><FaBell /></button>
      <button className="p-2"><FaUser /></button>
    </div>
  </div>
</Navbar>
```

## Accessibility

- Semantic `<header>` element
- Keyboard accessible buttons
- ARIA labels for menu toggle
- Screen reader friendly
- Focus visible states

## Type Definitions

```tsx
export type NavbarProps = {
  title?: string;
  menuRef?: React.RefObject<SideMenuHandler>;
  children?: React.ReactNode;
};

export type SideMenuHandler = {
  toggleMenu: () => void;
  toggleSmMenu: () => void;
};
```

## Related Components

- [SideMenuLayout](../layouts/SideMenuLayout.md) - Sidebar layout system
- [NavList](./NavList.md) - Navigation list/menu
- [Container](./Container.md) - Content container

## Common Patterns

### Application Header
```tsx
<Navbar title="My Application" menuRef={menuRef}>
  <div className="flex items-center gap-4">
    <button>Notifications</button>
    <button>Profile</button>
  </div>
</Navbar>
```

### Admin Dashboard
```tsx
<Navbar title="Admin Panel" menuRef={menuRef}>
  <div className="flex items-center gap-4">
    <input type="search" placeholder="Search..." />
    <UserMenu />
  </div>
</Navbar>
```

### E-commerce
```tsx
<Navbar title="Shop" menuRef={menuRef}>
  <div className="flex items-center gap-4">
    <SearchBar />
    <CartButton />
    <UserButton />
  </div>
</Navbar>
```

## Notes

- Must be used with SideMenuLayout for menu toggle functionality
- The `menuRef` prop is required for menu toggle to work
- Children are centered on desktop (hidden on mobile)
- Fixed height of 56px
- Sticky positioning for always-visible header
- Menu icon is from `react-icons/ai` (AiOutlineMenu)
