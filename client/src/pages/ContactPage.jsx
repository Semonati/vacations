import React from "react";
import HeaderPage from "../components/HeaderPage";
import PageBox from "../components/PageBox";

const ContactPage = (props) => {
  return (
    <PageBox>
      <HeaderPage title="Contact us" subtitle="Here you can contact us" />
    </PageBox>
  );
};

ContactPage.propTypes = {
  
};

export default ContactPage;
