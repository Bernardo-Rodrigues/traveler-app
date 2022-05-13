import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

interface Form {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface Props {
  values: Form;
  setValues: (value: React.SetStateAction<Form>) => void;
  passwordError?: boolean;
  confirm?: boolean;
}

export default function PasswordInput({
  values,
  setValues,
  confirm,
  passwordError,
}: Props) {
  const [showPassword, setShowPassord] = useState(false);

  const handleChange =
    (prop: keyof Form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setShowPassord(!showPassword);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>{confirm ? "Confirm your password" : "Password"}</InputLabel>
      <OutlinedInput
        id={confirm ? "confirm-password" : "password"}
        error={passwordError}
        type={showPassword ? "text" : "password"}
        value={confirm ? values.confirmPassword : values.password}
        onChange={
          confirm ? handleChange("confirmPassword") : handleChange("password")
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={confirm ? "Confirm your password" : "Password"}
      />
    </FormControl>
  );
}
