import React from 'react'
import {
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from '@material-ui/core';
import Header from '../home/Header';
class Policies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            policies:{}
        }
    }

    componentWillMount(){
        var policies = JSON.parse(localStorage.getItem('policies'))
        this.setState({
            policies:policies
        })
    }

    UNSAFE_componentWillReceiveProps(){
        var policies = JSON.parse(localStorage.getItem('policies'))
        this.setState({
            policies:policies
        })
    }
    render() {
        // console.log(this.state.policies)
        return (
            <div>
                <Header />
                
                <div>
                {/* <Button variant="contained" color="secondary" style={{float:'right'}}>Add Policy</Button> */}
                    <Typography variant="h6" id="tableTitle" 
                    style={{ float: 'left', paddingLeft: '2%' }}>All Policies</Typography>
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
                                <TableCell>Date of Payment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.policies.map((policy, index) => (
                                <TableRow key={index}>
                                    <TableCell>{policy.holderName}</TableCell>
                                    <TableCell>{policy.policyNumber}</TableCell>
                                    <TableCell>{policy.mobileNumber}</TableCell>
                                    <TableCell>{policy.amount}</TableCell>
                                    <TableCell>{policy.email}</TableCell>
                                    <TableCell>{policy.dateOfPayment}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Policies;