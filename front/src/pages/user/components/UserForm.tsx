import { FormEventHandler, useState } from "react";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";

export const UserForm = () => {
    const [name, setName] = useState("")
    const [edv, setEdv] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const formValue = {
            name: name,
            description: edv,
            email: email,
            password: password
        };

        try {
            const response = await api.post("users", formValue, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Produto criado com sucesso!");
            console.log(response);
        } catch (err) {
            toast.error("Ocorreu um erro ao criar o produto.");
            console.log(err);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                bgcolor: 'background.paper',
                p: 4,
                borderRadius: 2,
                maxWidth: 500,
                mx: 'auto',
                mt: 4,
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Cadastro de Usuario
            </Typography>

            <TextField
                label="Nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
            />

            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
            />

            <TextField
                label="EDV"
                variant="outlined"
                value={edv}
                onChange={(e) => setEdv(e.target.value)}
                fullWidth
                required
            />

            <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
            >
                Cadastrar
            </Button>
        </Box>
    );
}