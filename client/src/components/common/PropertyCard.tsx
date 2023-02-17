import { Place } from "@mui/icons-material";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({
  id,
  title,
  price,
  location,
  photo,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        "&:hover": { boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1" },
        cursor: "pointer",
        textDecoration: "none",
        underline: "none",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
      />
      <CardContent
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
          gap: "10px",
          padding: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.3 }} />
            <Typography fontSize={14} color="#808191">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#dadefa"
          height="fit-content"
        >
          <Typography fontSize={12} color="#475be8" fontWeight={600}>
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
