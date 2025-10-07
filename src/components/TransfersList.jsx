import React, { useEffect, useState } from "react";
import TransferCard from "./TransferCard";
import { getTransfers } from "../services/api";
import { Box, Grid, TextField, Typography } from "@mui/material";

const TransfersList = () => {
  const [transfers, setTransfers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTransfers().then(setTransfers);
  }, []);

  const filtered = transfers.filter(
    (t) =>
      t.from.toLowerCase().includes(search.toLowerCase()) ||
      t.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Трансфери
      </Typography>

      <TextField
        label="Пошук трансферу"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3, maxWidth: 400 }}
      />

      <Grid container spacing={2}>
        {filtered.map((t) => (
          <Grid item xs={12} sm={6} md={4} key={t.id}>
            <TransferCard transfer={t} sx={{ height: "100%" }} />
          </Grid>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Typography color="text.secondary" sx={{ mt: 3 }}>
          Нічого не знайдено за вашим запитом.
        </Typography>
      )}
    </Box>
  );
};

export default TransfersList;
