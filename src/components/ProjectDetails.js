import React from "react";
import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import ShareButton from "./ShareButton";

const InfoBlock = ({ title, subtitle, extra }) => (
  <Box>
    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{title}</Typography>
    <Typography variant="body2">{subtitle}</Typography>
    {extra && <Typography variant="body2" sx={{ color: "gray" }}>{extra}</Typography>}
  </Box>
);

const FinancialInfo = ({ title, amount }) => (
  <Grid item xs={4} sx={{ 
    borderLeft: "1px solid #f0f0f0",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    padding: 2,
    height: "100%"
  }}>
    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{title}</Typography>
    <Typography variant="h6">{amount}</Typography>
    <Typography variant="body2" sx={{ color: "gray" }}>VAT 22% included</Typography>
  </Grid>
);

const ProjectDetails = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "gray" }}>
          Projects <Typography variant="h5" component="span" sx={{ fontWeight: "bold", color: "black" }}> / New home</Typography>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ShareButton />
          <Avatar sx={{ bgcolor: "red" }}>GM</Avatar>
          <Avatar sx={{ bgcolor: "gray" }}>RP</Avatar>
          <IconButton color="inherit" />
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: "30px" }}>
        <Grid item xs={3} sx={{ 
          borderLeft: "2px solid #f0f0f0",
          borderRight: "1px solid #f0f0f0",
          borderBottom: "2px solid #f0f0f0", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          padding: 2,
          minHeight: "200px"
        }}>
          <InfoBlock title="To" subtitle="Rino Platania" />
          <InfoBlock subtitle="Shipping to Milan, Italy" />
          <InfoBlock subtitle="Project #0000012452" extra="Last save 2 minutes ago" />
        </Grid>

        <Grid container item xs={9} spacing={2} sx={{ borderBottom: "2px solid #f0f0f0", padding: 2, display: "flex", alignItems: "flex-start" }}>
          <FinancialInfo title="To be paid" amount="0,00 €" />
          <FinancialInfo title="Paid" amount="0,00 €" />
          <FinancialInfo title="Total Order" amount="0,00 €" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetails;