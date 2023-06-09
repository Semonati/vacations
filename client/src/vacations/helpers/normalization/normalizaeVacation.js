const normalizaeVacation = (vacation) => {
  return {
    title: vacation.title,
    subtitle: vacation.subtitle,
    description: vacation.description,
    phone: vacation.phone,
    web: vacation.webUrl,
    image: {
      url: vacation.imageUrl,
      alt: vacation.imageAlt,
    },
    address: {
      state: vacation.state,
      country: vacation.country,
      city: vacation.city,
      street: vacation.street,
      houseNumber: vacation.houseNumber,
      zip: vacation.zip,
    },
  };
};

export default normalizaeVacation;
