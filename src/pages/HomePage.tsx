import React from "react";
import { FormComponent, Container, Text, Modal } from "../../lib";
import SignupForm from "../components/SignupForm";
import type { ModalHandler } from "../../lib";
import ErpLayout from "../layouts/ErpLayout";

type HomePageFormValues = {
  username: string;
  phonenumber: string;
  password: string;
  date: number;
  checkbox: boolean;
  radio: string;
};

const HomePage: React.FC = () => {
  const modalRef = React.useRef<ModalHandler>(null);

  return (
    <ErpLayout>
      <Container className="flex flex-col gap-2">
        <Text tag="h1">Sign in</Text>
        <Text tag="p">to continue to anysystem</Text>
        <FormComponent<HomePageFormValues>
          className="space-y-2"
          fields={[
            {
              name: "username",
              dataType: "text",
              label: "Username",
              placeholder: "Username",
              value: "davidaasm@gmail.com",
              validation: [{ type: "required", message: "Required" }],
            },
            {
              name: "phonenumber",
              dataType: "tel",
              label: "Phone number",
              placeholder: "Phone number",
              value: "852-66297530",
              validation: [{ type: "required", message: "Required" }],
            },
            {
              name: "password",
              dataType: "password",
              label: "Password",
              placeholder: "Password",
              value: "123123",
              validation: [{ type: "required", message: "Required" }],
            },
          ]}
          onSubmit={(values) => console.log(values)}
        >
          <SignupForm<HomePageFormValues> />
        </FormComponent>

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
