import { Tab, Tabs, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useContexts from "../../../shared/hooks/useContexts";
import useListTips from "../../../shared/hooks/api/useListTips";
import TabPanel from "./TabPanel";
import { useAuth } from "@clerk/clerk-react";

interface Props {
  currentTrip: any;
}

export default function Tips({ currentTrip }: Props) {
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const [value, setValue] = useState(0);
  const { tips, loadingTips, listingTipsrror } = useListTips(
    currentTrip.destinationId
  );
  const clerkAuth = useAuth();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (listingTipsrror) {
      setMessage(listingTipsrror.data);
      if (listingTipsrror.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [listingTipsrror]);

  if ((loadingTips && !tips) || !tips) {
    return (
      <Box
        sx={{
          ...styles.tips,
          ...styles.center,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.tips}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Tips" />
          {tips.map((trip: any, i: number) => (
            <Tab key={i} label={`Tip ${i + 1}`} />
          ))}
        </Tabs>
      </Box>
      <TabPanel
        currentTrip={currentTrip}
        value={value}
        index={0}
        first={true}
      />
      {tips.map((tip: any, i: number) => (
        <TabPanel
          currentTrip={currentTrip}
          tip={tip}
          key={i}
          value={value}
          index={i + 1}
          first={false}
        />
      ))}
    </Box>
  );
}

const styles = {
  tips: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "25px",
    marginTop: "30px",
    height: "40%",
    width: "100%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
