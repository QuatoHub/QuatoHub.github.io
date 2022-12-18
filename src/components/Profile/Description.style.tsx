import styled from '@emotion/styled';
import { device, theme } from 'styles/theme';
import { customMQ } from 'styles/theme';

export const DescriptionWrap = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 100;
  font-size: 40px;
  line-height: 1.5;

  @media ${device.tablet} {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 0;
  }

  div.introduction {
    display: flex;
    flex-direction: column;
    word-break: keep-all;

    .react-rotating-text-cursor {
      animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
    }

    strong {
      display: inline-block;
      font-weight: 600;
    }

    p.title {
      .react-rotating-text-cursor {
        font-size: 45px;
        line-height: 45px;
        }
      }

    div.social-links {
      margin-top: 20px;
      color: grey;
      > a {
        margin: 10px;
      }
    }
  }

    .thumbnail {
      display: block;
      width: 250px;
    }
  }
`;