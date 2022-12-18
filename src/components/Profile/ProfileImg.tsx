import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import GIF from '../../assets/images/profile.gif'
import { ImgWrap } from './ProfileImg.style';

type ProfileProps = {
  profile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

function ProfileImg() {
  const { profile } = useStaticQuery<ProfileProps>(
    graphql`
      query {
        profile: file(name: { eq: "profile" }) {
          childImageSharp {
            gatsbyImageData(width: 130)
          }
        }
      }
    `,
  );

  return (
    <ImgWrap>
        <img src={ GIF } alt="profile" /> 
    </ImgWrap>
  );
}

export default ProfileImg;
