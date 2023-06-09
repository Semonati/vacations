const normalizeVacation = async (vacation, userId) => {
  const { url, alt } = vacation.image;
  const image = {
    url: url || "https://cdn.quotesgram.com/img/45/47/573559000-beach.jpg",
    alt: alt || "vacation image",
  };
  return {
    ...vacation,
    image,
    address: {
      ...vacation.address,
      state: vacation.address.state || "NOT DEFINED",
    },
    user_id: vacation.user_id || userId,
  };
};

module.exports = normalizeVacation;
