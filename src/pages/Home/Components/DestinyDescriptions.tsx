import { List, ListItem, Typography, Divider } from "@mui/material";

interface Props {
  descriptions: any[];
}

export default function DestinyDescriptions({ descriptions }: Props) {
  return (
    <>
      <List>
        {descriptions.map((description: any, i: number) => (
          <ListItem
            key={i}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Typography variant="h5" fontWeight="bold">
              {description.type}
            </Typography>
            <Typography fontSize="15px" sx={{ color: "#666" }}>
              {description.text}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ marginBottom: "30px" }} />
    </>
  );
}
