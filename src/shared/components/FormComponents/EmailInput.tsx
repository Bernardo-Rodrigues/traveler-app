import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Form from "../../interfaces/Form";

interface Props {
  values: Form;
  setValues: (value: React.SetStateAction<Form>) => void;
}

export default function EmailInput({ values, setValues }: Props) {
  const handleChange =
    (prop: keyof Form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <FormControl variant="outlined">
      <InputLabel>Email</InputLabel>
      <OutlinedInput
        id="email"
        type="email"
        value={values.email}
        onChange={handleChange("email")}
        label="Email"
      />
    </FormControl>
  );
}
