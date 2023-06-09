const mapVacationToModel = (store) => {
  return {
    title: store.title,
    subtitle: store.subtitle,
    description: store.description,
    phone: store.phone,
    webUrl: store.web,
    imageUrl: store.image.url,
    imageAlt: store.image.alt,
    state: store.address.state,
    country: store.address.country,
    city: store.address.city,
    street: store.address.street,
    houseNumber: store.address.houseNumber,
    zip: store.address.zip,
  };
};

export default mapVacationToModel;
