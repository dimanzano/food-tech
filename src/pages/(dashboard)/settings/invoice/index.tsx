import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// Mock Data
const invoiceData = [
  { id: 1, planName: "Basic Plan", price: "$9.99", datePayed: "01-10-2023" },
  { id: 2, planName: "Pro Plan", price: "$19.99", datePayed: "01-09-2023" },
  { id: 3, planName: "Premium Plan", price: "$29.99", datePayed: "01-08-2023" },
];

export default function SettingsInvoicePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        backgroundColor: "grey.100",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight={"bold"}>
        Invoice
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {/* Invoice Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Plan Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Date Paid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceData.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.planName}</TableCell>
                  <TableCell>{invoice.price}</TableCell>
                  <TableCell>{invoice.datePayed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
