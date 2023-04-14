// write your CatList component here
 function CatList ({catPics}){
    return ( 
        <div className="cats" style={{display: "flex", flexWrap: "wrap"}}>
       { catPics.map( cat => {
       return (
        <img src={cat.url} className="card-img-top" alt='cat'key={cat.id}/>
       );
       }
       )
       }
        </div>
     );
}
 
export default CatList;

{/* <div className="card" style={{width: "18rem", margin: '2rem'}} key={cat.id}>
            <img src={cat.url} class="card-img-top" alt={cat.url}/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> */}