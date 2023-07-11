const normalizeMessage = (data) => {
  return {
    name: {
      first: data.first,
      last: data.last,
    },
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    email: data.email,
    password: data.password,
  };
};

export default normalizeMessage;
