import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={false}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
