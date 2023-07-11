import React from "react";
import { Box, Container } from "@mui/material";

import HeaderPage from "../components/HeaderPage";
import useUsers from "../users/hooks/useUsers";
import { useUser } from "../providers/UserProviders";
import useForm from "../forms/hooks/useForm";
import contsctUsSchema from "../users/models/joi-schema/contsctUsSchema";
import contactUsForm from "../users/helpers/initialForms/contactUsForm";
import Form from "../forms/components/Form";
import Input from "../forms/components/Input";

const ContactPage = () => {
  const { user } = useUser();
  const { handleContactUs } = useUsers();
  const { value, ...rest } = useForm(
    contactUsForm,
    contsctUsSchema,
    handleContactUs
  );

  if (user) {
    value.data.first = user.name.first;
    value.data.last = user.name.last;
    value.data.email = user.email;
    value.data.phone = user.phone;
  }

  return (
    <Box m="2%">
      <HeaderPage title="Contact us" subtitle="Here you can contact us" />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Form
          title="contact-us"
          onSubmit={() => rest.onSubmit("contact-us")}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          styles={{ maxWidth: "750px" }}
        >
          <Input
            name="first"
            label="first name"
            error={value.errors.first}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={false}
            required={true}
            sm={6}
            disabled={user ? true : false}
          />
          <Input
            name="last"
            label="last name"
            error={value.errors.last}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={false}
            required={true}
            sm={6}
            disabled={user ? true : false}
          />
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={false}
            required={true}
            sm={6}
            disabled={user ? true : false}
          />
          <Input
            label="phone"
            name="phone"
            error={value.errors.phone}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={false}
            required={true}
            sm={6}
            disabled={user ? true : false}
          />
          <Input
            label="subject"
            name="subject"
            error={value.errors.subject}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={false}
            required={true}
          />
          <Input
            label="message"
            name="message"
            error={value.errors.message}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            multiline={true}
            required={true}
            rows={10}
          />
        </Form>
      </Container>
    </Box>
  );
};

export default ContactPage;
