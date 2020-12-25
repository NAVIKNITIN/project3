import React , {Component} from "react";
class SearchProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            searchfield:''
        };
    };
    searchData = (e) =>{
        this.props.filterData(this.state.searchfield);
        e.preventDefault();
    };
    render(){
        return <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.searchData}>
                            <input type="search" className="form-control" placeholder="search products" 
                            onChange={(e)=> this.setState({searchfield : e.target.value})}
                            value={this.state.searchfield}
                            
                            ></input>
                        </form>
                    </div>
                </div>
        </React.Fragment>
    }
}
export default SearchProduct;