import React, { Component } from 'react';
import CateringService from '../services/CateringService';


class CreateCateringComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           foodItem: '',
           price: ''
        }
        
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this); 
        this.changeFoodPriceHandler = this.changeFoodPriceHandler.bind(this);
        this.saveCatering= this.saveCatering.bind(this);
    }
    
    saveCatering = (e) => {
        e.preventDefault();
        let catering = {foodItem: this.state.foodItem, price :this.state.price};
        console.log('catering =>' + JSON.stringify(catering));

        CateringService.createCatering(catering).then(res =>{
           this.props.history.push('/caterings')
        });
    }

    changeFoodNameHandler = (event)=> {
        this.setState({foodItem: event.target.value})
    }

    changeFoodPriceHandler= (event)=> {
        this.setState({price: event.target.value})
    }
    
    cancel(){
        this.props.history.push('/caterings')
    
    }
    cateringList = () => {
        return this.props.history.push("/caterings");
    }
    render() {
        return (
            <div>
                
               

              <div className="container">
                  <div className="row">
                      <div className= "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "100px"}}>
                          <h3 className="text-center">Add Catering</h3>
                          <div className= "card-body">
                             <form>
                                 <div className= "form-group">
                                 <label>Food name: </label>
                                 <input placeholder="Food Name" name="foodItem" className="form-control"
                                  value={this.state.foodItem} onChange={this.changeFoodNameHandler}/>
                                 </div>
                                 <div className= "form-group">
                                 <label>Food Price: </label>
                                 <input placeholder="Food Price" name="price" className="form-control"
                                  value={this.state.price} onChange={this.changeFoodPriceHandler}/>
                                 </div>

                                 <button className="btn btn-success" onClick={this.saveCatering}  style={{marginTop: "10px"}}>Save</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>
                                 <button size="sm" className="btn btn-info" type="button" onClick={this.cateringList.bind()} style={{marginLeft: "10px" ,marginTop: "10px"}}> List</button>
                             </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default CreateCateringComponent;