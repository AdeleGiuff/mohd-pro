import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const OrderTabs = () => {
  const [value, setValue] = useState(0);
  const tabs = ["Proposed items", "Approved", "Confirmed", "Order History", "Settings"];

  return (
    <Box sx={{ marginTop: "20px", borderBottom: "2px solid #f0f0f0" }}>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} textColor="inherit" indicatorColor="transparent">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} sx={{ textTransform: "none", color: value === index ? 'black' : 'gray', fontWeight: value === index ? 'bold' : 'normal', borderBottom: value === index ? '2px solid black' : 'none' }} />
        ))}
      </Tabs>
    </Box>
  );
};

export default OrderTabs;
