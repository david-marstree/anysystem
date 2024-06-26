import React from "react";
import { AppProvider } from "./contexts/AppContext";
import Container from "./components/Container/";
import Button from "./components/Button/";
import Label from "./components/Label/";
import Input from "./components/Input/";
import PasswordInput from "./components/PasswordInput/";
import Checkbox from "./components/Checkbox";
import Text from "./components/Text";
import Row from "./components/Row";
import Column from "./components/Column";
import "./index.css";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
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
