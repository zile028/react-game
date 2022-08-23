const reducer = (state, action) => {
  switch (action.type) {
    case "set_deck":
      return { ...state, decks: action.payload };
    default:
      console.log("err");
      break;
  }
};

export default reducer;
