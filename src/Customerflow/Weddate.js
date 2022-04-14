import React from 'react'
import { Form } from 'react-bootstrap';
 
class Weddate extends React.Component{
 
    render(){
 
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="doj">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control 
                                 type="date" 
                                 name="doj" 
                                 defaultValue={this.props.selectedValue} 
                                 placeholder="Date" 
                                 onChange={(e) => this.props.onChange(e)} />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
     
}
 
export default Weddate;