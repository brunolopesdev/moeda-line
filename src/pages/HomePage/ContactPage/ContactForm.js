import "./ContactPage.css";
import { Container } from "../../../components/StyledComponents"
import { CustomButton } from "../../../components/Buttons/Button";
import contact from "../../../assets/contact.svg"

const ContactForm = () => {
	return (

		<Container>

			<img src={contact} width="20%" />

			<h1 className="titulo">
				Entre em <span className="span">Contato</span>!
			</h1>
			<div className="contact-container">
				<form action="">

					<label>Nome</label>
					<input type="text" id="firstName" name="firstname" placeholder="Seu nome" />

					<label >Sobrenome</label>
					<input type="text" id="lastName" name="lastname" placeholder="Seu sobrenome" />

					<label>Assunto</label>
					<textarea id="subject" name="subject" placeholder="Digite a sua mensagem" ></textarea>

					<CustomButton>Enviar</CustomButton>

				</form>
			</div>
		</Container>
	);
};

export default ContactForm;