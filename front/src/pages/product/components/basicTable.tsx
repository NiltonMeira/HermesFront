import { useEffect, useState } from "react"
import api from "../../../services/api"
import { toast } from "react-toastify"
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material"
import { Link } from "react-router-dom"
import FormProduct from "./FormPorduct"

export const BasicTable = () => {
    const [rows, setRows] = useState<Array<ReturnType<typeof createRow>>>([])
    const [openModal, setOpenModal] = useState(false)

    interface ProductData {
        id: string,
        name: string,
        description: string
    }

    const token = localStorage.getItem("token")

    function createRow(name: string, description: string) {
        return { name, description }
    }

    const getData = async () => {
        try {
            const response = await api.get("products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data: ProductData[] = response.data

            const newRows = data.map(element =>
                createRow(element.name, element.description)
            )

            setRows(newRows)
        } catch (err) {
            toast.error("Fail to get data: " + err)
        }
    }

    useEffect(() => {
        getData()
    }, [getData])

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    return (
        <>  
            <div className="flex justify-end mb-4">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModal}
                >
                    Add +
                </Button>
            </div>

            <TableContainer style={{ maxHeight: '100%', overflowY: 'auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal for Form */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="add-product-modal"
                aria-describedby="add-product-form"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        maxWidth: 500,
                        width: '100%'
                    }}
                >
                    <FormProduct />
                </Box>
            </Modal>
        </>
    )
}
