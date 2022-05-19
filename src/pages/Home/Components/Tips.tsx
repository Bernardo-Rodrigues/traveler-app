import { Tab, Tabs, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import useListTips from "../../../shared/hooks/api/useListTips";
import TabPanel from "./TabPanel";

export default function Tips() {
  const contexts = useContexts();
  const { logout } = contexts.user;
  const [value, setValue] = useState(0);
  const { tips, loadingTips, listingTipsrror } = useListTips();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (listingTipsrror) {
      fireAlert(listingTipsrror.data);
      if (listingTipsrror.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingTipsrror]);

  if ((loadingTips && !tips) || !tips) {
    return <div>loading...</div>;
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
      <TabPanel value={value} index={0} first={true} />
      {tips.map((tip: any, i: number) => (
        <TabPanel tip={tip} key={i} value={value} index={i + 1} first={false} />
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
};
