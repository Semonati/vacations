const mapVacationToModel = (vacation) => {
  return {
    title: vacation.title,
    subtitle: vacation.subtitle,
    description: vacation.description,
    creatorName: vacation.creatorName,
    phone: vacation.phone,
    webUrl: vacation.web,
    imageUrl: vacation.image.url,
    imageAlt: vacation.image.alt,
    state: vacation.address.state,
    country: vacation.address.country,
    city: vacation.address.city,
    street: vacation.address.street,
    houseNumber: vacation.address.houseNumber,
    zip: vacation.address.zip,
    price: vacation.price,
    createdAt: vacation.createdAt,
    updatedAt: vacation.updatedAt,
  };
};

export default mapVacationToModel;
