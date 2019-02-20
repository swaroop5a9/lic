import React from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Typography } from '@material-ui/core';
class ExpiringPolicies extends React.Component {
  
    render() {
        return (
            <div>
                <div>
                    <Typography variant="h6" id="tableTitle">Expiring Policies</Typography>
                </div>
                <div>
                    <Table variant="outlined">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Policy Number</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.expiringPolicies.length > 0 && this.props.expiringPolicies.map((policy, index) => (
                                <TableRow key={index}>
                                    <TableCell>{policy.MemberName}</TableCell>
                                    <TableCell>{policy.PolicyNumber}</TableCell>
                                    <TableCell>{policy.PhoneNumber}</TableCell>
                                    <TableCell>{policy.Amount}</TableCell>
                                    <TableCell>{policy.Email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ExpiringPolicies;