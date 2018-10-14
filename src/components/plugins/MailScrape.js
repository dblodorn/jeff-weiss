import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import config from './../../config.json'
import { P } from '../../../styles/components'
import { buttonInit, media } from '../../../styles/mixins'
import { fonts, colors, spacing } from './../../styles/theme.json'

const cta = `${config.mail_scrape.cta}`
const url = config.mail_scrape.mailchimp_url

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });
  return (
    <div className={className} style={style}>
      {status === "sending" && <div className="message">sending...</div>}
      {status === "error" && (
        <div className="message" dangerouslySetInnerHTML={{ __html: message }}/>
      )}
      {status === "success" && (
        <div className="message" dangerouslySetInnerHTML={{ __html: message }}/>
      )}
      <div className="input-wrapper">
        <input ref={node => (input = node)} type="email" placeholder="email"/>
        <button onClick={submit}/>
      </div>
    </div>
  );
};

export default () =>
  <MailingContainer>
    <P dangerouslySetInnerHTML={{__html: cta}}/>
    <MailchimpSubscribe 
      url={url}
      render={({ subscribe, status, message }) => (
        <SimpleForm
          status={status}
          message={message}
          onSubmitted={formData => subscribe(formData)}
          className={'form-wrapper'}
        />
      )}
    />
  </MailingContainer>

// STYLES
const MailingContainer = styled.div`
  max-width: 70rem;
  .form-wrapper {
    margin-top: 3vmin;
    width: 100%;
    position: relative;
    flex-direction: column;
    display: flex;
    padding-right: ${spacing.medium_left};
    padding-bottom: 1rem;
    color: ${colors.white};
    ${media.medium`
      padding-right: 0;
      padding-bottom: 0;
      padding-bottom: 1.25rem;
    `}
    a {
      color: ${colors.lt_blue};
    }
    .message {
      width: 100%;
      padding-bottom: 1.5rem;
      line-height: 1.2;
      color: ${colors.lt_blue};
    }
    .input-wrapper {
      width: 100%;
      flex-direction: row;
      display: flex;
    }
  }
  input[type=email] {
    ${buttonInit};
    font-family: ${fonts.sans};
    font-weight: bold;
    width: 100%;
    border: 0;
    border-radius: 0;
    background-color: ${colors.lt_blue};
    font-size: 3rem;
    min-height: 5rem;
    padding: .5rem 1.5rem;
    font-weight: bold;
    margin: 0;
    color: ${colors.white};
    &:focus {
      outline: none!important;
      box-shadow: 0;
      color: ${colors.white};
    }
    &::-webkit-input-placeholder {
      color: ${colors.white};
      font-family: ${fonts.sans};
    }
    ${media.medium`
      height: 5rem;
      font-size: 5vmin;
      padding-top: .6rem;
      padding-left: 1.2rem;
    `}
  }
  button {
    ${buttonInit};
    margin: 0;
    padding: 0;
    color: white;
    width: auto;
    height: 5rem;
    width: 5rem;
    font-size: 2rem;
    background-color: ${colors.lt_blue};
    background-image: url('assets/kiss-emoji.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border-left: 1px solid ${colors.blue};
    color: ${colors.white}!important;
    -webkit-text-fill-color: ${colors.white}!important;
    flex-shrink: 0;
    &:hover {
      background-color: ${colors.lt_blue};
    }
    ${media.medium`
      height: 5rem;
      width: 5rem;
      &:hover {
        background-color: ${colors.pink};
        color: ${colors.lt_blue};
      }
    `}
  }
`
