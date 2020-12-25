
import React,{Component} from "react";
import SearchProduct from "./search-product";
import ProductCard from "./product-card";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
class App extends Component{
    constructor(){
        super();
        this.state = {
            products : [],

        };
    };
    fetchData = async (data)=>{
        let url = `https://pixabay.com/api/?key=19575457-d79bb13438961bc7935733883&q=yellow+${data}&image_type=photo&pretty=true`
        let response = await axios.get(url);
        
        this.setState({products: response.data.hits});

    };


    render(){
        return <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <SearchProduct filterData={this.fetchData}/>
                </div>
                
        </div>
            
        <div className="row">
                <div className="col-md-12">
                    <ProductCard products={this.state.products}/>
                </div>
            </div>
        </div>
        </>
    }
}
export default App;