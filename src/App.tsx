import React from "react";
import {
  AppProvider,
  Container,
  Button,
  Label,
  Input,
  TelephoneInput,
  PasswordInput,
  Checkbox,
  RadioGroup,
  Text,
  Switch,
  Navbar,
  NavList,
  SideMenuLayout,
  SideMenuHandler,
  Modal,
  ModalHandler,
  DatePicker,
} from "../lib/";
import "./index.less";

function App() {
  const menuRef = React.useRef<SideMenuHandler>(null);
  const modalRef = React.useRef<ModalHandler>(null);
  const [username, setUsername] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [radio, setRadio] = React.useState("1");
  return (
    <AppProvider appName="anysystem">
      <SideMenuLayout
        ref={menuRef}
        header={<Navbar menuRef={menuRef} />}
        menu={
          <NavList
            list={[
              { label: "Home", path: "/", icon: "AiOutlineHome" },
              { label: "About", path: "/about", icon: "AiOutlineUser" },
            ]}
          />
        }
      >
        <Container className="flex flex-col gap-2">
          <Text tag="h1">Sign in</Text>
          <Text tag="p">to continue to anysystem</Text>
          <Label label="Username">
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
          <Label label="Password">
            <PasswordInput
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Label label="Birth of date">
            <DatePicker
              name="birthday"
              value={new Date().getTime() / 1000}
              showTime
              onChange={() => null}
            />
          </Label>
          <Label label="Phone number">
            <TelephoneInput
              type="tel"
              name="phonenumber"
              value={phonenumber}
              placeholder="Phone number"
              onChange={(v) => setPhoneNumber(v + "")}
              phonePrefixOptions={[
                {
                  id: "1",
                  label: "Macau +853",
                  value: "853",
                  enable: true,
                },
                {
                  id: "2",
                  label: "China +86",
                  value: "86",
                  enable: true,
                },
                {
                  id: "3",
                  label: "Hong Kong +852",
                  value: "852",
                  enable: true,
                },
              ]}
              phonePrefix="853"
            />
          </Label>
          <Label label="Radio" type="normal">
            <RadioGroup
              name="radio"
              value={radio}
              onChange={(e) => setRadio(e)}
              options={[
                {
                  id: "1",
                  label: "Option 1",
                  value: "1",
                  enable: true,
                },
                {
                  id: "2",
                  label: "Option 2",
                  value: "2",
                  enable: true,
                },
                {
                  id: "3",
                  label: "Option 3",
                  value: "3",
                  enable: true,
                },
              ]}
            />
          </Label>
          <Checkbox
            label="Remember me"
            name="rememberMe"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Label label="Open" type="horizontal">
            <Switch
              name="open"
              value="open"
              checked={checked}
              onChange={(v: boolean) => setChecked(v)}
            />
          </Label>
          <Button variant="primary" onClick={() => modalRef.current?.show()}>
            Button
          </Button>

          <Modal
            ref={modalRef}
            title="Modal Title"
            buttons={[
              {
                variant: "primary",
                label: "Okay",
                onClick: () => modalRef.current?.hide(),
              },
              {
                variant: "default",
                label: "Close",
                onClick: () => modalRef.current?.hide(),
              },
            ]}
          >
            <p>Modal content</p>
          </Modal>
        </Container>
      </SideMenuLayout>
    </AppProvider>
  );
}

export default App;
