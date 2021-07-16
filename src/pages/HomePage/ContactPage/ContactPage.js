import "./ContactPage.css";
import ContactForm from "@/pages/HomePage/ContactPage/ContactForm";
import { ContactWrapper } from "@/components/StyledComponents";
import contact from "@/assets/contact.svg"


const ContactPage = () => {
  return (

    <ContactWrapper id="contact">
      <ContactForm />
    </ContactWrapper>
    
  );
};

export default ContactPage;
