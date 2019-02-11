import React from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Typography } from '@material-ui/core';
import { getExpiringPolicies } from '../../services/PolicyService';
class ExpiringPolicies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expiringPolicies: []
        }
    }
    componentDidMount() {
        const expiringPolicies = getExpiringPolicies()
        this.setState({
            expiringPolicies: expiringPolicies
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Typography variant="h6" id="tableTitle" style={{ float: 'left', paddingLeft: '2%' }}>Expiring Policies</Typography>
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
                            {this.state.expiringPolicies.map((policy, index) => (
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