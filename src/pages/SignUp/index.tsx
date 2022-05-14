import { Container, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fireAlert } from "../../shared/utils/alerts";
import { useNavigate } from "react-router-dom";
import {
  Form,
  EmailInput,
  PasswordInput,
  FormFooter,
  Avatars,
  NameInput,
} from "../../shared/components/FormComponents";
import FormInterface from "../../shared/interfaces/Form";
import * as styles from "../../shared/styles/muiStyles";
import useContexts from "../../shared/hooks/useContexts";
import useSignUp from "../../shared/hooks/api/useSignUp";
import Logo from "../../shared/components/Logo";

export default function SignUp() {
  const { signUp, errorSigningUp, success } = useSignUp();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const [values, setValues] = useState<FormInterface>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatarId: undefined,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const { username, email, password, confirmPassword, avatarId } = values;
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "As senhas precisam coincidir" });
      setPasswordError(true);
      return;
    } else if (!avatarId) {
      setMessage({ type: "error", text: "Selecione um avatar" });
      return;
    } else setPasswordError(false);

    await signUp({ username, email, password, avatarId });
  };

  useEffect(() => {
    if (errorSigningUp) {
      fireAlert(errorSigningUp);
    }
  }, [errorSigningUp]);

  useEffect(() => {
    if (success) {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, [success]);

  return (
    <Container sx={styles.Container}>
      <Logo size="big" />
      <Box sx={styles.Box}>
        <Typography sx={{ fontSize: "45px" }}>Sign Up</Typography>
        <Form handleSubmit={handleSubmit}>
          <Avatars values={values} setValues={setValues} />
          <NameInput values={values} setValues={setValues} />
          <EmailInput values={values} setValues={setValues} />
          <PasswordInput
            passwordError={passwordError}
            values={values}
            setValues={setValues}
          />
          <PasswordInput
            passwordError={passwordError}
            values={values}
            setValues={setValues}
            confirm={true}
          />
          <FormFooter type={"register"} />
        </Form>
      </Box>
    </Container>
  );
}
