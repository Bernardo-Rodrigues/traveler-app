import { Box } from "@mui/system";
import PerfilInfo from "./PerfilInfo";
import Calendar from "./Calendar";
import Schedule from "./Schedule";

export default function RightMenu() {
  return (
    <Box sx={{ width: "20%", padding: "50px 25px" }}>
      <PerfilInfo />
      <Calendar />
      <Schedule />
    </Box>
  );
}
