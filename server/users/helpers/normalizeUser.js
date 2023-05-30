const normalizeUser = rawUser => {
  return {
    ...rawUser,
    isUserNormalized: true,
  };
};

module.exports = normalizeUser;
