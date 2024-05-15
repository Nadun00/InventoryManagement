import React from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Footer from "./footer";

const DetailsTable = ({ rows, selectedDetail, deleteDetail }) => {
  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("details-table.pdf");
    });
  };

  return (
    <div>
      <TableContainer component={Paper} id="divToPrint">
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Dose</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>Instruction</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell>{row.productname}</TableCell>
                <TableCell>{row.dose}</TableCell>
                <TableCell>{row.purpose}</TableCell>
                <TableCell>{row.instruction}</TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: '0px 10px' }}
                    onClick={() => selectedDetail(row)}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: '0px 10px' }}
                    onClick={() => deleteDetail(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={6}>No data available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={printDocument} variant="contained" sx={{ mt: 2 }}>
        Download PDF
      </Button>
      <Footer />
    </div>
  );
};

export default DetailsTable;
