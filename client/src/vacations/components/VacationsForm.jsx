import React from "react";
import { func, object } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const VacationsForm = ({
  title,
  onSubmit,
  onReset,
  errors,
  onFormChange,
  onInputChange,
  data,
}) => {
  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
    >
      <Input
        name="title"
        label="title"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        variant="filled"
        sm={6}
        required={true}
        multiline={false}
      />
      <Input
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        variant="filled"
        sm={6}
        required={true}
        multiline={false}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
        required={false}
      />
      <Input
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="country"
        label="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        variant="filled"
        sm={6}
        required={true}
        multiline={false}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        variant="filled"
        sm={6}
        required={true}
        multiline={false}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
        variant="filled"
        sm={6}
        required={true}
        multiline={false}
      />
      <Input
        name="houseNumber"
        label="house Number"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={6}
      />
      <Input
        name="description"
        label="description"
        error={errors.description}
        onChange={onInputChange}
        data={data}
        variant="filled"
        required={true}
        multiline={true}
        rows={10}
      />
      <Input
        name="creatorName"
        label="creator Name"
        error={errors.creatorName}
        onChange={onInputChange}
        data={data}
        variant="filled"
        disabled={true}
        multiline={false}
        sm={4}
      />
      {title === "edit vacation" && (
        <Input
          name="updatedAt"
          label="updated At"
          error={errors.updatedAt}
          onChange={onInputChange}
          data={data}
          variant="filled"
          disabled={true}
          multiline={false}
          sm={4}
        />
      )}
      {title === "create vacation" && (
        <Input
          name="createdAt"
          label="created At"
          error={errors.createdAt}
          onChange={onInputChange}
          data={data}
          variant="filled"
          disabled={true}
          multiline={false}
          sm={4}
        />
      )}
      <Input
        name="price"
        label="price"
        type="number"
        error={errors.price}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        sm={4}
      />
    </Form>
  );
};

VacationsForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
  data: object.isRequired,
};

export default VacationsForm;
