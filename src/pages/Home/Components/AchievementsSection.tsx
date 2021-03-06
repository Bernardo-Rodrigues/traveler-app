import { useAuth } from "@clerk/clerk-react";
import { Typography, Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import useAchievements from "../../../shared/hooks/api/useListAchievements";
import useContexts from "../../../shared/hooks/useContexts";
import Achievement from "./Achievement";

export default function AchievementsSection() {
  const { achievements, loadingAchievements, listingAchievementsError } =
    useAchievements();
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const clerkAuth = useAuth();

  useEffect(() => {
    if (listingAchievementsError) {
      setMessage(listingAchievementsError.data);
      if (listingAchievementsError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [listingAchievementsError]);

  if ((loadingAchievements && !achievements) || !achievements) {
    return (
      <Box sx={styles.achievements}>
        <Typography variant="h4" sx={styles.title}>
          Achievements
        </Typography>
        <Box>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.achievements}>
      <Typography variant="h4" sx={styles.title}>
        Achievements
      </Typography>
      <Box sx={styles.img}>
        {achievements.map((achievement: any, i: number) => (
          <Achievement key={i} achievement={achievement.achievement} />
        ))}
      </Box>
    </Box>
  );
}

const styles = {
  achievements: {
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "30px",
    borderRadius: "50px",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "15px",
    padding: "20px 0",
    background: "#F1FBF4",
  },
  img: {
    padding: "6% 9%",
    position: "relative",
    width: "95%",
    height: "95%",
    background:
      "url(https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Paper.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    gap: "1%",
    flexWrap: "wrap",
  },
};
