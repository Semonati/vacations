const normalization = (vacation) =>{
return {
  title: vacation.title,
  subtitle: vacation.subtitle,
  description: vacation.description,
  web: vacation.webUrl,
  image: {
    url: vacation.imageUrl,
    alt: vacation.imageAlt,
  },
};
}

export default normalization;