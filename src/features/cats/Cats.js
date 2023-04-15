import React, { useEffect } from "react";
import CatList from "./CatList";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.cats.entities);
  const dispatch = useDispatch()
  console.log(catPics);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
