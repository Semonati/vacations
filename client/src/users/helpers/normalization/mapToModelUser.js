const mapUserToModel = (user) => {
  return {
    first: user.name.first,
    last: user.name.last,
    email: user.email,
    phone: user.phone,
    password: user.password,
    confirmPassword: user.confirmPassword,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    zip: user.address.zip,
    aboutMe: user.aboutMe,
  };
};

export default mapUserToModel;
