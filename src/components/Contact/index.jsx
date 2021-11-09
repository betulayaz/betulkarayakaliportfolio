import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>İletişim</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48321.03583808465!2d29.3874169803605!3d40.80457112636819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad8ae0d8aa779%3A0xc50b56d262cb7062!2sGebze%2C%20Kocaeli!5e0!3m2!1str!2str!4v1634814138885!5m2!1str!2str"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <h4>Telefon</h4>
      <p>05xx xxx xx xx</p>

      <h4>Email</h4>
      <p>xxxxx@gmail.com</p>

      <h4>Adres</h4>
      <p>Gebze, Kocaeli</p>
    </div>
  );
};

export default Contact;