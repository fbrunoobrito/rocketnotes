import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 0 124px;
    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  height: 100vh;

  margin: 36px auto 0;
`;
