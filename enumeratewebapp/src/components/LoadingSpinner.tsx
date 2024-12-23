import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  top: 3px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${rotate} 1s linear infinite;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer style={{ display: 'inline-block', marginLeft : '5px' }}>
      <Spinner />
    </SpinnerContainer>
  );
}