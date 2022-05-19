import { Container, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fireAlert } from "../../shared/utils/alerts";
import { useNavigate } from "react-router-dom";
import {
  Form,
  EmailInput,
  PasswordInput,
  FormFooter,
} from "../../shared/components/FormComponents";
import FormInterface from "../../shared/interfaces/Form";
import * as styles from "../../shared/styles/muiStyles";
import useContexts from "../../shared/hooks/useContexts";
import Logo from "../../shared/components/Logo";
import useSignIn from "../../shared/hooks/api/useSignIn";

export default function SignIn() {
  const { signIn, errorSigningIn, authData } = useSignIn();
  const navigate = useNavigate();
  const contexts = useContexts();
  const { auth, login } = contexts.user;
  const { currentTravel, setCurrentTravel } = contexts.currentTravel;
  const { setHaveAchievement } = contexts.achievement;
  const [values, setValues] = useState<FormInterface>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await signIn(values);
  };

  useEffect(() => {
    if (errorSigningIn) {
      fireAlert(errorSigningIn.data);
    }
  }, [errorSigningIn]);

  useEffect(() => {
    if (auth) {
      navigate("/");
    } else if (authData) {
      if (
        currentTravel &&
        (!authData.currentTravel ||
          authData.currentTravel.id !== currentTravel.id)
      ) {
        setHaveAchievement(currentTravel.destinyId);
      } else {
        if (authData.currentTravel) setCurrentTravel(authData.currentTravel);
        else setCurrentTravel(null);
      }
      login(authData);
      navigate("/");
    }
    //eslint-disable-next-line
  }, [authData]);

  return (
    <Container sx={styles.Container}>
      <Logo size="big" />
      <Box sx={styles.Box}>
        <Typography sx={{ fontSize: "45px" }}>Sign In</Typography>
        <Form handleSubmit={handleSubmit}>
          <EmailInput values={values} setValues={setValues} />
          <PasswordInput values={values} setValues={setValues} />
          <FormFooter type={"login"} />
        </Form>
      </Box>
    </Container>
  );
}
