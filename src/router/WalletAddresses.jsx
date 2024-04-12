import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import api from "../../config/axiosConfig";

const WalletAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/wallet-address");
        setAddresses(response.data.data);
      } catch (error) {
        console.error("Error fetching wallet addresses:", error.response.data);
      }
    };

    fetchAddresses();
  }, []);
  const addAddress = async () => {
    try {
      const response = await api.post("/wallet-address/add", {
        address: newAddress,
        name: newName,
      });
      setAddresses([...addresses, response.data]);
      setNewAddress("");
      setNewName("");
    } catch (error) {
      console.error("Error adding wallet address:", error.response.data);
    }
  };

  const deleteAddress = async (id) => {
    try {
      await api.delete(`/wallet-address/delete/${id}`);
      setAddresses(addresses.filter((address) => address._id !== id));
    } catch (error) {
      console.error("Error deleting wallet address:", error.response.data);
    }
  };

  return (
    <Container>
      <TextField
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        label="Address"
        fullWidth
        margin="normal"
      />
      <TextField
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        label="Name"
        fullWidth
        margin="normal"
      />
      <Button onClick={addAddress} variant="contained" color="primary">
        Add Address
      </Button>
      <List>
        {addresses.map((address) => (
          <ListItem key={address._id}>
            <Avatar alt={address.network} src={address.iconUrl} />
            <ListItemText
              primary={address.address}
              secondary={address.name || "No name"}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteAddress(address._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WalletAddresses;
