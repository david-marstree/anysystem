import React from "react";
import {
  FormControl,
  Container,
  Button,
  Checkbox,
  Text,
  Modal,
} from "../../lib";
import type { ModalHandler } from "../../lib";
import ErpLayout from "../layouts/ErpLayout";

const HomePage: React.FC = () => {
  const modalRef = React.useRef<ModalHandler>(null);
  const [username, setUsername] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [radio, setRadio] = React.useState("1");
  return (
    <ErpLayout>
      <Container className="flex flex-col gap-2">
        <Text tag="h1">Sign in</Text>
        <Text tag="p">to continue to anysystem</Text>
        <FormControl
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          labelProps={{ label: "Username" }}
        />
        <FormControl
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          labelProps={{ label: "Password" }}
        />
        <FormControl
          name="date"
          value={new Date().getTime() / 1000}
          onChange={(v: unknown) => console.log(v)}
          type="date"
          labelProps={{ label: "Birth of Date" }}
        />
        <FormControl
          name="phonenumber"
          value={phonenumber}
          placeholder="Phone number"
          onChange={(v: unknown) => setPhoneNumber(v + "")}
          type="tel"
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
          labelProps={{ label: "Phone number" }}
        />
        <FormControl
          type="radio"
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
          labelProps={{ label: "Radio", type: "normal" }}
        />
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <FormControl
          type="switch"
          name="open"
          value="open"
          checked={checked}
          onChange={(v: boolean) => setChecked(v)}
          labelProps={{ label: "Open" }}
        />
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
    </ErpLayout>
  );
};
export default HomePage;
