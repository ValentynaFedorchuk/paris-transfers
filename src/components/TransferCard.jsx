import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const TransferCard = ({ transfer }) => {
  return (
    <Card
      sx={{
        margin: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          <DirectionsBusIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          {transfer.route}
        </Typography>
        <Typography color="text.secondary">
          Відправлення: {transfer.from}
        </Typography>
        <Typography color="text.secondary">
          Прибуття: {transfer.to}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Ціна: {transfer.price} грн
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="contained" color="primary">
          Забронювати
        </Button>
      </CardActions>
    </Card>
  );
};

export default TransferCard;
