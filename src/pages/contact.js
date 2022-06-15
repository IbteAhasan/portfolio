import React, { useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

import SEO from "../components/seo";
import { Button } from "../styles/buttons";
import { StyledHeading, Subtext } from "../styles/globalStyles";
import Alert from "../components/alert";
import ClipLoader from "react-spinners/ClipLoader";
import PaperPlane from "../components/icons/paperPlane";
import Success from "../components/icons/success";
import Spinner from "../components/icons/spinner";

const ContactSection = styled.section`
  margin-top: 30px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  padding: 5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    border: none;
  }
`;
const ContactTop = styled.div`
  margin-bottom: 30px;
`;
const ContactForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;

  textarea {
    padding: 15px;
    color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    background-color: ${(props) => props.theme.colors.background1};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    resize: none;
    font-size: 1.5rem;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background1};
  border-style: none;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 15px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`;
const ButtonText = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.background1};
  margin-right: 10px;
`;
export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, variant: null, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, variant, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, variant: variant, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, variant: variant, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, variant: "", msg: "" },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/meqndnkb",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "success",
          "Thank you, your message has been submitted."
        );
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        handleServerResponse(false, "danger", error.response.data.error);
      });
  };

  //spinner
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState(
    localStorage.getItem("theme") == "Light" ? "white" : "black"
  );
  const ButtonItems = () => {
    if (!status.submitted && !status.submitting) {
      return (
        <>
          <ButtonText>Send it already!</ButtonText>
          <PaperPlane />
        </>
      );
    } else if (!status.submitted && status.submitting) {
      return (
        <>
          <ButtonText>Submitting</ButtonText>
          <Spinner />
        </>
      );
    } else {
      return (
        <>
          <ButtonText>Submitted!</ButtonText>
          <Success />
        </>
      );
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Ibte Ahasan by filling out this form"
      />
      <ContactSection>
        <ContactTop>
          <Subtext align="center">Got any queries?</Subtext>
          <StyledHeading align="center">Get in touch!</StyledHeading>
        </ContactTop>
        <ContactForm>
          <InputWrapper>
            <StyledInput
              className="label"
              name="name"
              id="name"
              type="text"
              placeholder="Your Name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              id="email"
              name="_replyto"
              type="email"
              placeholder="example@gmail.com"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </InputWrapper>
          <InputWrapper>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={10}
              onChange={handleOnChange}
              required
              value={inputs.message}
            ></textarea>
          </InputWrapper>
          <Button
            onClick={handleOnSubmit}
            disabled={status.submitted ? true : false}
          >
            <ButtonItems />
          </Button>
        </ContactForm>

        {status.info.variant ? (
          <Alert variant={status.info.variant} message={status.info.msg} />
        ) : (
          ""
        )}
      </ContactSection>
    </>
  );
}
