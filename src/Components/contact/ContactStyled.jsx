import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
`;

const ContactOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactOption = styled.div`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  > a {
    font-size: 0.8rem;
    margin-top: 0.7;
    display: inline-block;
  }
`;

const ContactIconContainer = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }
`;

export {
  ContactContainer,
  ContactOptionsContainer,
  ContactOption,
  ContactIconContainer,
  ContactForm,
};
