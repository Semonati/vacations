const mapUserToModel = (user) => {
  return {
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    isBusiness: user.isBusiness,
    email: user.email,
    // url: user.image.url,
    // alt: user.image.alt,
  };
};

export default mapUserToModel;
