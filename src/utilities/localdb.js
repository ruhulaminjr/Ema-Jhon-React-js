const getLocalDb = () => localStorage.getItem("shopping-cart");
const setLocalDb = (cart) =>
  localStorage.setItem("shopping-cart", JSON.stringify(cart));
// saveitem to localStorage;
// if local storage item not available set new local item if available update local item

const saveItemLocalDb = (id) => {
  const exists = getLocalDb();
  let data = {};
  if (!exists) {
    data[id] = 1;
  } else {
    data = JSON.parse(exists);
    if (data[id]) {
      data[id] = data[id] + 1;
    } else {
      data[id] = 1;
    }
  }
  setLocalDb(data);
};
const RemoveFromDb = (key) => {
  let db = getLocalDb();
  let localObject = JSON.parse(db);
  delete localObject[key];
  localStorage.setItem("shopping-cart", JSON.stringify(localObject));
};

const ClearLocalDb = () => {
  localStorage.removeItem("shopping-cart");
};

const getFromLocalDb = () => JSON.parse(getLocalDb());
export { saveItemLocalDb, getFromLocalDb, RemoveFromDb,ClearLocalDb };
