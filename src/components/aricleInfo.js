import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AdvantagesAndDisadvantagesTable = () => (
  <Paper sx={{ width: "100%", mb: 2}}>
     <Table>
    <TableBody>
      <TableRow>
        <TableCell>
          <img src="https://www.shutterstock.com/image-photo/hand-writing-advantages-isolated-on-260nw-1743132350.jpg" alt="Advantages of GraphQL" />
        </TableCell>
        <TableCell>
          <ul>
            <li>Faster and more efficient data retrieval</li>
            <li>Strong type system for better API management</li>
            <li>Intuitive and flexible query language</li>
            <li>Reduced over- and under-fetching of data</li>
            <li>Better developer experience and tooling</li>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <img src="https://t3.ftcdn.net/jpg/01/30/48/44/360_F_130484462_KSPqFam8ND9EPHBFuxFWbrccHFdtNJlY.jpg" alt="Disadvantages of GraphQL" />
        </TableCell>
        <TableCell>
          <ul>
            <li>Steeper learning curve compared to REST</li>
            <li>Initial setup can be more complex</li>
            <li>Limited support for real-time updates</li>
            <li>Potential security risks with complex queries</li>
            <li>Lack of support for certain advanced features in some databases</li>
          </ul>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </Paper>
);

export default AdvantagesAndDisadvantagesTable;
