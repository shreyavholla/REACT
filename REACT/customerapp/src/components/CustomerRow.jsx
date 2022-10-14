import { Component } from "react";

export default class CustomerRow extends Component {

    render(){
        let {id, firstName, lastName} = this.props.customer;

        return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
           <button onClick={() => this.doDelete(id)}>Delete</button>

            
        </div>
    }

    doDelete(id){
        this.props.delEvent(id);
    }
}