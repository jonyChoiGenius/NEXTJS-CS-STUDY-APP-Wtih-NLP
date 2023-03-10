import React from "react";
import styled from "styled-components";

const TextWrapper = ({ children }) => {
  return (
    <StyledTextWrapper>
      <div className="top-padding"></div>
      {children}
      <div className="bottom-padding"></div>
    </StyledTextWrapper>
  );
};

export default TextWrapper;

const StyledTextWrapper = styled.div`
  font-family: "Noto Sans KR";
  height: 90%;
  width: 100%;
  white-space: pre-wrap;
  line-height: 1.5rem;
  padding: 1rem;
  overflow-y: scroll;
  .top-padding {
    width: 100%;
    height: 1rem;
  }
  .bottom-padding {
    width: 100%;
    height: 50vh;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
