import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
  Box,
  Menu,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import { StatusEnum } from "./ProductModels";

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState("1");
  const [menuAnchor, setMenuAnchor] = useState(null);


  const handleOpenMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };


  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  // Gestisco le azioni selezionate dal menu
  const handleMenuAction = (action) => {
    console.log(`Action selected: ${action} for item:`, item);
    handleCloseMenu();
  };


  return (
    <Box>
      <Card sx={{ width: "100%", position: "relative" }}>
        <Checkbox sx={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }} />
        
        <IconButton 
          sx={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }} 
          onClick={handleOpenMenu}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleCloseMenu}
          keepMounted
        >
          <MenuItem onClick={() => handleMenuAction("copy")}>
            <ListItemIcon><FileCopyIcon /></ListItemIcon>
            <ListItemText primary="Copy to..." />
          </MenuItem>
          <MenuItem onClick={() => handleMenuAction("move")}>
            <ListItemIcon><DriveFileMoveIcon /></ListItemIcon>
            <ListItemText primary="Move to..." />
          </MenuItem>
          <MenuItem onClick={() => handleMenuAction("delete")}>
            <ListItemIcon><DeleteIcon/></ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        </Menu>

        <CardMedia 
          component="img" 
          height="300" 
          image={item.image} 
          alt={item.brand} 
          sx={{ objectFit: "cover" }} 
        />
      </Card>
      
      <Box mt={1}>
        <Typography variant="body1" fontWeight="bold">{item.brand}</Typography>
        <Typography variant="body1">{item.desc}</Typography>
        
        {([3, 7, 9].includes(item.id)) && (
          <Box display="flex" alignItems="center" gap={1} sx={{ cursor: "pointer" }}>
            <WarningAmberIcon sx={{ color: "#FFA000" }} />
            <Typography variant="body2" fontWeight="bold" sx={{ color: "black" }}>
              Add configuration
            </Typography>
          </Box>
        )}

        {item.configurations > 0 && (
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" sx={{ cursor: "pointer", textDecoration: "underline" }}>
              {item.configurations} configuration proposed
            </Typography>
            <Button variant="text" size="small" sx={{ textTransform: "none", fontWeight: "bold", color: "black" }}>
              Add new
            </Button>
          </Box>
        )}

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>{item.price}</Typography>
          {(item.isAvailable || item.isOnStock) && (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" sx={{ color: item.isOnStock ? "green" : "orange" }}>●</Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ color: "black" }}>
                {item.isOnStock ? "In Stock" : "Available"}
              </Typography>
            </Box>
          )}
        </Box>

        {Object.values(StatusEnum).includes(item.status) && (
          <Box display="flex" gap={2} mt={1} alignItems="center">
            <FormControl size="small">
              <Select 
                sx={{ borderRadius: "15px", backgroundColor: "#f0f0f0" }} 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem key={num + 1} value={String(num + 1)}>
                    {String(num + 1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small">
              <Select 
                sx={{ borderRadius: "15px", backgroundColor: "#f0f0f0" }} 
                value={item.status || StatusEnum.PROPOSED}
              >
                {Object.values(StatusEnum).map((status) => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const SearchList = ({ items, filters = { category: [], status: [], brand: [], configuration: [] } }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    console.log("Filters aggiornati:", filters);
    console.log("Items disponibili:", items);
  
    if (!filters) return;
  
    const newFilteredItems = items.filter((item) => {
      console.log("Item analizzato:", item);
  
      return (
        (!filters.category.length || filters.category.includes(item.category)) &&
        (!filters.status.length || filters.status.includes(item.status)) &&
        (!filters.brand.length || filters.brand.includes(item.brand)) &&
        (!filters.configuration.length || filters.configuration.includes(item.configurations.toString()))
      );
    });
  
    console.log("Nuovi elementi filtrati:", newFilteredItems);
  
    if (JSON.stringify(newFilteredItems) !== JSON.stringify(filteredItems)) {
      setFilteredItems(newFilteredItems);
    }
  }, [filters, items]);
  

  if (!filteredItems.length) return <Typography variant="body1">No items available</Typography>;

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3} width="100%">
      {filteredItems.map((item) => <ItemCard key={item.id} item={item} />)}
    </Box>
  );
};

export default SearchList;
