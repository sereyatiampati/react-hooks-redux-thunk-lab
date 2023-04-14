const initialState = {
    entities: [], //array of cats
    status: "idle", //loading status for fetch
  };

export function fetchCats() {
    return function (dispatch) {
        dispatch({ type: "cats/catsLoading" });
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
          .then((response) => response.json())
          .then((cats) =>
            dispatch({
              type: "cats/catsLoaded",
              payload: cats.images
            })
          )
      };
}

export default function catsReducer(state=initialState, action) {
    switch (action.type) {
        case "cats/catsLoading":
            return {
                ...state,
                status: "loading",
              };
        case "cats/catsLoaded":
            return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
        default:
            return state
    }
}
