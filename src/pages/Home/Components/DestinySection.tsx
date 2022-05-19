import { Box } from "@mui/system";
import { useEffect } from "react";
import useDestiny from "../../../shared/hooks/api/useDestiny";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import DestinyBanner from "./DestinyBanner";
import DestinyDescriptions from "./DestinyDescriptions";
import DestinyFooter from "./DestinyFooter";

export default function DestinySection() {
  const { destiny, loadingDestiny, getDestinyError, updateDestiny } =
    useDestiny();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (getDestinyError) {
      fireAlert(getDestinyError.data);
      if (getDestinyError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [getDestinyError]);

  if ((loadingDestiny && !destiny) || !destiny) {
    return <Box sx={styles.destiny}>Loading...</Box>;
  }

  return (
    <Box sx={styles.destiny}>
      <DestinyBanner destiny={destiny} />
      <DestinyDescriptions descriptions={destiny.descriptions} />
      <DestinyFooter
        destiny={destiny}
        onUpdate={() => updateDestiny(destiny.name)}
      />
    </Box>
  );
}

const styles = {
  destiny: {
    width: "60%",
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "30px 30px 30px",
    borderRadius: "50px",
    overflowY: "scroll",
  },
};
