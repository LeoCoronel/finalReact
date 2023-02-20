export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("shoes");
    if (serializedData === null) {
      return [];
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.log(error);
  }
};

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem("shoes", serializedData);
  } catch (error) {
    console.log(error);
  }
};
