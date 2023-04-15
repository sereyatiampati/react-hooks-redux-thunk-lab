function CatList({ catPics }) {
    return (
      <div className="cats" style={{ display: "flex", flexWrap: "wrap" }}>
        {catPics &&
          catPics.map((cat) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "2rem" }} key={cat.id}>
                <img src={cat.url} className="card-img-top" alt="cat" />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  export default CatList;