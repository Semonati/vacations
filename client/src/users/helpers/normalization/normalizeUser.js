const normalizeUser = (user) =>{
  return {
    name: {
      first: user.first,
      middle: user.middle,
      last: user.last,
    },
    email: user.email,
    password: user.password,
    // image: {
    //   url: user.url,
    //   alt: user.alt,
    // },
  };
};

export default normalizeUser;
