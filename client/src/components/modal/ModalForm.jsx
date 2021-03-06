import React from 'react';
import {
  Container1, LabelArea, LargeText, InputArea, Notes,
  SubmitInput, SubmitContainer, Title, SubTitle, TitleContainer, Exit,
} from '../styles/Modal.style';

const ModalForm = ({
  setOpen,
  newQuestion,
  setNewQuestion,
  handleAddQuestion,
}) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log('hello')
    // handleAddQuestion(newQuestion);
  };
  return (
    <form onSubmit={handleSumbit}>
      <TitleContainer>
        <Title>
          Your Opinion Matters
        </Title>
        <Exit onClick={() => setOpen(false)}>
          X
        </Exit>
      </TitleContainer>
      <Container1>
        <LabelArea htmlFor="question">
          What's your thoughts?
        </LabelArea>
        <LargeText
          id="question"
          type="text"
          maxlength="100"
          required
          onChange={(e) => setNewQuestion({ ...newQuestion, body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="nickname">
          Your nickname
        </LabelArea>
        <InputArea
          id="nickname"
          type="text"
          required
          maxlength="60"
          onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
        />
        <Notes>
          For privacy reasons, do not use your full name or email address
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="link">
          Where to read more about it, please provide link?
        </LabelArea>
        <InputArea
          id="link"
          type="text"
          required
          maxlength="100"
          onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
        />
        <Notes>
          For authentication reasons, you will not be emailed
        </Notes>
      </Container1>
      <SubmitContainer>
        <SubmitInput
          type="submit"
          value="Submit Question"
        />
      </SubmitContainer>
    </form>
  );
};


export default ModalForm;