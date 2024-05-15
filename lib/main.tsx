import React from "react";
import Button from "./components/Button/";
import Label from "./components/Label/";
import Input from "./components/Input/";
import PasswordInput from "./components/PasswordInput/";
import Checkbox from "./components/Checkbox";
import "./index.css";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <>
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
      <Checkbox
        label="Remember me"
        name="rememberMe"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <br />

      <Button variant="primary">Button</Button>
    </>
  );
}

export default App;
