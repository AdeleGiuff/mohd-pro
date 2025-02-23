import React, { useState } from "react";
import OrderTabs from "./OrderTabs";
import Filters from "./Filters";
import SearchList from "./SearchList";
import ProjectDetails from "./ProjectDetails";
import { Box, Typography } from "@mui/material";
import ShareButton from "./ShareButton";
import { productList } from "./ProductModels";

const OrderPage = () => {
  const [filters, setFilters] = useState({
    category: [],
    status: [],
    brand: [],
    configuration: []
  });
  
  
  return (
    <Box sx={{ mt: 4, width: "95%", margin: "0 auto" }}>
      <ProjectDetails/>
      <OrderTabs />
      <Filters filters={filters} setFilters={setFilters} />
      <Box sx={{ marginTop: "50px" }}>
        <SearchList items={productList} filters={filters} />
      </Box>
      <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px", marginTop: "100px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="body2" color="textSecondary">Featured products</Typography>
          <Typography variant="h6" fontWeight="bold">13 items and 1 section</Typography>
        </Box>
        <ShareButton />
      </Box>
    </Box>
  );
};

export default OrderPage;
