import React from "react";
import {
  AppProvider,
  Container,
  Button,
  Label,
  Input,
  PasswordInput,
  Checkbox,
  Selectbox,
  Text,
  Row,
} from "../lib/";
import "../lib/index.css";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [option, setOption] = React.useState("1");
  const [option2, setOption2] = React.useState(["1"]);
  return (
    <AppProvider>
      <Container>
        <Text tag="h1">Sign in</Text>
        <Text tag="p">to continue to anysystem</Text>
        <Row column={{ md: 2 }}>
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
        </Row>
        <Label label="Selectbox">
          <Selectbox
            name="option"
            options={[
              { id: 1, label: "Option 1", value: 1, enable: true },
              { id: 2, label: "Option 2", value: 2, enable: true },
            ]}
            placeholder="Select an option"
            value={option}
            onChange={(v: number | string) => setOption(v + "")}
          />
        </Label>
        <Label label="SelectboxMultiple">
          <Selectbox
            name="option2"
            options={[
              { id: 1, label: "Option 1", value: 1, enable: true },
              { id: 2, label: "Option 2", value: 2, enable: true },
            ]}
            placeholder="Select an option"
            value={option2}
            onChange={(v: string[] | number[]) => setOption2(v as string[])}
            multiple={true}
          />
        </Label>
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <Button variant="primary">Button</Button>
      </Container>
    </AppProvider>
  );
}

export default App;
