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
  const { currentTrip, setCurrentTrip } = contexts.currentTrip;
  const { setHaveAchievement } = contexts.achievement;
  const { setSection } = contexts.section;
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
    setSection("sign-in");
    if (auth) {
      setSection("dashboard");
      navigate("/");
    } else if (authData) {
      if (
        currentTrip &&
        (!authData.currentTrip || authData.currentTrip.id !== currentTrip.id)
      ) {
        if (authData.currentTrip) setCurrentTrip(authData.currentTrip);
        else setCurrentTrip(null);
        setHaveAchievement(currentTrip.destinationId);
      } else {
        if (authData.currentTrip) setCurrentTrip(authData.currentTrip);
        else setCurrentTrip(null);
      }
      login(authData);
      setSection("dashboard");
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
