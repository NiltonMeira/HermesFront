import { useEffect, useState } from "react"
import api from "../../../services/api"
import { toast } from "react-toastify"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const BasicTable = () => {
    const [rows, setRows] = useState<Array<ReturnType<typeof createRow>>>([])

    interface ProductData {
        id: string,
        name: string,
        description: string
    }

    function createRow(name: string, description: string) {
        return {name, description}
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async () => {
        try {
            const response = await api.get("products")
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

    return (
        <>
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

        </>
    )

}

