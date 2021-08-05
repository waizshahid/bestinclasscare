import Card from './card';

export default function CardList(props){
  return(
    <div className="container mt-2">
      
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{flexDirection:"column" , backgroundColor:"white"}}> 
      {
        props.products.map(product => <Card product={product}/>)
        
      }
      </div>
    </div>


  )
}