import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Form from "../../interfaces/Form";

interface Props {
  values: any;
  setValues: (value: React.SetStateAction<any>) => void;
}

export default function NameInput({ values, setValues }: Props) {
  const handleChange =
    (prop: keyof Form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <FormControl variant="outlined">
      <InputLabel>Name</InputLabel>
      <OutlinedInput
        id="name"
        type="name"
        value={values.username}
        onChange={handleChange("username")}
        label="Name"
      />
    </FormControl>
  );
}
