const handelFilter = (vacations, price) => {
return fillterByPrice(vacations, price);
};

export default handelFilter;


const fillterByPrice = (vacations, price) => {
  return vacations.filter((vacation) => vacation.price > price);
};
