import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from './Filter';

export default class CustomerList extends Component {

        state = {
            "customers": [{
                "id": 1,
                "firstName": "Rachel",
                "lastName": "Green "
            },
            {
                "id": 2,
                "firstName": "Chandler",
                "lastName": "Bing"
            },
            {
                "id": 3,
                "firstName": "Joey",
                "lastName": "Tribbiani"
            },
            {
                "id": 4,
                "firstName": "Monica",
                "lastName": "Geller"
            },
            {
                "id": 5,
                "firstName": "Ross",
                "lastName": "Geller"
            },
            {
                "id": 6,
                "firstName": "Phoebe",
                "lastName": "Buffay"
            }
            ]
        };

        constructor(props){
            super(props);
            this.state.complete = this.state.customers;
        }
        deleteCustomer(id){
                let newCust = this.state.customers.filter(c => c.id !== id )
                this.setState({
                    customers:newCust
                })

        }

        filterCustomers(txt){
            let custs = this.state.complete.filter(c => (c.firstName.toUpperCase().indexOf(txt.toUpperCase())>= 0) ||
            (c.lastName.toUpperCase().indexOf(txt.toUpperCase())>= 0))

            this.setState({
                customers: custs
            })
        }
    
    render() {

        return <div>
            <Filter filterEvent={(txt => this.filterCustomers(txt))} /><br />
            {
            this.state.customers.map(c => <CustomerRow 
                key={c.id}
                customer={c}
                delEvent={(id) => this.deleteCustomer(id)}/>)
    }
        </div>
    }
}