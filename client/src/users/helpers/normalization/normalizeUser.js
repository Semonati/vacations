const normalizeUser = (user) =>{
  return {
    name: {
      first: user.first,
      last: user.last,
    },
    phone: user.phone,
    aboutMe: user.aboutMe,
    email: user.email,
    password: user.password,
    address: {
      state: user.state,
      country: user.country,
      city: user.city,
      street: user.street,
      zip: user.zip,
      houseNumber: user.houseNumber,
    },
  };
};

export default normalizeUser;
