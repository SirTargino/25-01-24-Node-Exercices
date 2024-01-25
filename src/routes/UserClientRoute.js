import { Router } from "express";
import {
    getAllUsers,
    getClientByUsername,
    registerClient,
    getAllClientsByRede,
    getAllUsersOrderBy,
    updateClient,
    updateCoins,
    deleteClient
} from "../controllers/UserClientController.js";
const userClientRouter = Router();

// Create
userClientRouter.post("/client", (req, res) => {
    const { name, email, password, username } = req.body;
    const newClient = registerClient(name, email, password, username);
    res.json({ newClient });
});

// Read
userClientRouter.get("/client", (req, res) => {
    const listUser = getAllUsers();
    res.json({ listUser });
});

userClientRouter.get("/client-find", (req, res) => {
    const { username } = req.body;
    const user = getClientByUsername(username);
    res.json({ user });
});

userClientRouter.get("/client-rede", (req, res) => {
    const { rede } = req.body;
    const listUser = getAllClientsByRede(rede);
    res.json({ listUser });
});

userClientRouter.get("/client-sort", (req, res) => {
    const { order } = req.body;
    const listUser = getAllUsersOrderBy(order);
    res.json({ listUser });
});

// Update
userClientRouter.put("/client-update-username", (req, res) => {
    const { username, password, newUsername } = req.body;
    const listUser = updateClient(username, password, newUsername);
    res.json({ listUser });
});

userClientRouter.put("/client-update-coin", (req, res) => {
    const { email, password, username } = req.body;
    const listUser = updateCoins(email, password, username);
    res.json({ listUser });
});

// Delete
userClientRouter.delete("/client-delete", (req, res) => {
    const { email, password } = req.body;
    const listUser = deleteClient(email, password);
    res.json({ listUser });
});

export { userClientRouter }