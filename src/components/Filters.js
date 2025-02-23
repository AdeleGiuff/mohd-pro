import React, { useState, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import { categoryOptions, statusOptions, brandOptions, configurationOptions } from "./ProductModels";


const FilterMenu = ({ filter, options, anchorEl, onClick, onClose, onSelect, checkedItems }) => {
  const isSelected = checkedItems.length > 0;

  return (
    <>
      <Button
        onClick={(event) => onClick(event, filter)}
        variant="contained"
        sx={{ 
          backgroundColor: isSelected ? "black" : "#f0f0f0", 
          color: isSelected ? "white" : "black", 
          textTransform: "none", 
          borderRadius: "10px" 
        }}
        endIcon={<ArrowDropDownIcon sx={{ color: isSelected ? "white" : "black" }} />}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </Button>
      <Menu 
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)} 
        onClose={onClose} 
        keepMounted
        MenuProps={{ disableAutoFocusItem: true }} 
      >
        {options.map((option) => (
          <MenuItem 
            key={option} 
            onClick={() => onSelect(filter, option)}
          >
            <Checkbox checked={checkedItems.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
        <MenuItem 
          disableRipple
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            onSelect(filter, "clear");
            onClose(); // Chiude solo se si fa "Clear filters"
          }}
        >
          <ListItemText primary="Clear filters" sx={{ textDecoration: "underline" }} />
        </MenuItem>
      </Menu>
    </>
  );
};

const Filters = ({ setFilters }) => {
  const [anchorEl, setAnchorEl] = useState({});
  const [checkedItems, setCheckedItems] = useState({ 
    category: [], 
    status: [], 
    brand: [], 
    configuration: [] 
  });

  const handleClick = (event, filter) => {
    setAnchorEl((prev) => ({
      ...prev,
      [filter]: prev[filter] ? null : event.currentTarget
    }));
  };

  const handleMenuItemClick = (filter, option) => {
    setCheckedItems((prev) => {
      let newSelections;
      if (option === "clear") {
        newSelections = [];
      } else {
        newSelections = prev[filter].includes(option)
          ? prev[filter].filter((item) => item !== option)
          : [...prev[filter], option];
          console.log(newSelections)
      }
      return { ...prev, [filter]: newSelections };
    });

    //Mantiene aperta la tendina dopo la selezione
    if (option !== "clear") {
      setAnchorEl((prev) => ({ ...prev, [filter]: prev[filter] }));
    } else {
      setAnchorEl((prev) => ({ ...prev, [filter]: null })); // Chiude solo se si fa "Clear filters"
    }
  };

  // Aggiorno i filtri nello stato principale
  useEffect(() => {
    setFilters(checkedItems);
  }, [checkedItems, setFilters]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
      <Typography variant="body1">13 items and 2 sections</Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <IconButton><GridViewIcon /></IconButton>
        <IconButton><LayersIcon /></IconButton>

        <FilterMenu
          filter="category"
          options={categoryOptions}
          anchorEl={anchorEl["category"]}
          onClick={handleClick}
          onClose={() => setAnchorEl((prev) => ({ ...prev, category: null }))}
          onSelect={handleMenuItemClick}
          checkedItems={checkedItems["category"]}
        />

        <FilterMenu
          filter="status"
          options={statusOptions}
          anchorEl={anchorEl["status"]}
          onClick={handleClick}
          onClose={() => setAnchorEl((prev) => ({ ...prev, status: null }))}
          onSelect={handleMenuItemClick}
          checkedItems={checkedItems["status"]}
        />

        <FilterMenu
          filter="brand"
          options={brandOptions}
          anchorEl={anchorEl["brand"]}
          onClick={handleClick}
          onClose={() => setAnchorEl((prev) => ({ ...prev, brand: null }))}
          onSelect={handleMenuItemClick}
          checkedItems={checkedItems["brand"]}
        />

        <FilterMenu
          filter="configuration"
          options={configurationOptions}
          anchorEl={anchorEl["configuration"]}
          onClick={handleClick}
          onClose={() => setAnchorEl((prev) => ({ ...prev, configuration: null }))}
          onSelect={handleMenuItemClick}
          checkedItems={checkedItems["configuration"]}
        />
      </Box>
    </Box>
  );
};

export default Filters;
