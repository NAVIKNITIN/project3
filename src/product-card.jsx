import React from 'react';

const ProductCard=(props)=>{
    if(!props.products){return null}
    return(
        
        <React.Fragment>
            <div className="row"> 
            {
                 props.products.map(data=>{
            return(

        <div className="col-md-4" key={data.id}>
            <div className="card text-left">
              <img className="card-img-top" src={data.largeImageURL} alt={data.tags}/>
              <div className="card-body">
                <h4 className="card-title">{data.user}</h4>
                <p className="card-text">likes:{data.likes}</p>
              </div>
            </div>

        </div>
    )
})
}
           
            </div>
            
        </React.Fragment>
    )
}
export default ProductCard;