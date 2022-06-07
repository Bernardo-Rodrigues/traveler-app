import { Divider, Typography } from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";

interface Props {
  localization: any;
}

const containerStyle = {
  width: "60%",
  height: "400px",
  margin: "auto",
};

export default function DestinationsMap({ localization }: Props) {
  const center = {
    lat: Number(localization.lat),
    lng: Number(localization.lng),
  };

  return (
    <>
      <Typography
        marginBottom="30px"
        textAlign="center"
        variant="h5"
        fontWeight="bold"
      >
        Use the map to explore the location
      </Typography>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <Divider sx={{ margin: "30px 0" }} />
    </>
  );
}
