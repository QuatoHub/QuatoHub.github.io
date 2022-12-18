import styled from '@emotion/styled';

export const StResume = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0 2rem;
  word-wrap: break-word;

  // Markdown Style
  line-height: 180%;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.colors.text10};

  strong {
    font-weight: 700;
    background: linear-gradient(to top, #6868ac 8%, transparent 10%);
  }

  hr {
    height: 3rem;
    border: none;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    border-style: none;
    border-radius: 1rem;
  }

  // Adjust Code Style
  .deckgo-highlight-code-carbon {
    margin: 1rem 0 2.5rem 0;
    border-radius: 1rem;
    font-size: 1.5rem;
  }
`;
