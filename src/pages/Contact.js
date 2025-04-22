import styled from "styled-components";


const Wrapper = styled.section`
  padding: 5rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.857839669764!2d77.36777847495684!3d28.634022484014015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce553b0e6714d%3A0xdb3902c3387d039a!2sShipra%20Mall!5e0!3m2!1sen!2sin!4v1745207296617!5m2!1sen!2sin" width="90%" height="550" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title="Shipra Mall Location on Google Maps"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjkydgjw"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
