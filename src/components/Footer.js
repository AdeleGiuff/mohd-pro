import React from "react";
import { Box, Typography, Button, Select, MenuItem, Divider } from "@mui/material";
import Logo from "./LogoMohd";

const FooterSection = ({ title, items }) => (
  <Box>
    <Typography variant="h6">{title}</Typography>
    {items.map((item) => (
      <Typography key={item} variant="body2">{item}</Typography>
    ))}
  </Box>
);

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "white", padding: "30px 20px", marginTop: "40px" }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
        <FooterSection title="About us" items={["Platform overview", "How to", "Register", "Terms of usage"]} />
        <FooterSection title="Customer Service" items={["Contact us", "FAQ", "Payment methods", "Money-back guarantee", "Returns", "Shipping", "Warranty and claims"]} />
        <FooterSection title="Catalogue" items={["Furniture", "Lighting", "Kitchen", "Accessories", "Outdoor", "Brand", "Designers"]} />
        <Box sx={{ display: "flex", alignItems: "center", transform: "scale(1.5)" }}>
          <Logo />
        </Box>
      </Box>
      <Divider sx={{ my: 3, backgroundColor: "#444" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", height: "40px" }}>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", height: "100%" }}>
          {[{ label: "Language", options: ["English", "Italian"], default: "English" }, { label: "Currency", options: ["EUR", "USD"], default: "EUR" }].map(({ label, options, default: defaultValue }) => (
            <Box key={label}>
              <Typography variant="body2" sx={{ marginBottom: "5px", color: "gray" }}>{label}</Typography>
              <Select defaultValue={defaultValue} sx={{ color: "white", backgroundColor: "#333", height: "30px", minWidth: "100px" }}>
                {options.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </Box>
          ))}
          <Button variant="contained" sx={{ backgroundColor: "#555", height: "34px", borderRadius:"10px", textTransform: "none", marginBottom: "-20px" }}>Confirm</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <Typography variant="body2" sx={{ marginBottom: "5px", color: "gray" }}>Secure Payments</Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center", height: "100%" }}>
            {["Visa", "MasterCard", "American Express", "PayPal"].map((payment) => (
              <img key={payment} src={`https://upload.wikimedia.org/wikipedia/commons/${payment === "Visa" ? "0/04/Visa.svg" : payment === "MasterCard" ? "b/b7/MasterCard_Logo.svg" : payment === "American Express" ? "3/30/American_Express_logo.svg" : "b/b5/PayPal.svg"}`} alt={payment.toLowerCase()} style={{ height: "25px" }} />
            ))}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 3, backgroundColor: "#444" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}>
        <Typography sx={{ color: "gray" }} variant="body2">© 2011-2022 Mollura & C. S.p.A. S.S. 114 km 6, 400 98128, Tremestieri Messina | P.IVA IT02759750835</Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          {["Privacy Policy", "Cookies Policy"].map((policy) => (
            <Typography key={policy} sx={{ color: "gray", cursor: "pointer" }} variant="body2">{policy}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
