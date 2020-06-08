import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';
import media from 'styled-media-query';

import { colors, fonts, metrics } from '~/styles';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${colors.white_};
  border: 1px solid ${colors.twelve};
  border-radius: 4px;
  height: 35px;
  width: 237px;
  padding: 10px;
  margin: 0px 0 0px;

  ${media.lessThan('515px')`
  width: 100%;
`}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.lessThan('515px')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`}

  input {
    outline: 0;
    padding-left: 0px;
    background: ${colors.white_};
    border: 0;
    height: 33px;
    margin: 10px 5px 0px;

    &::placeholder {
      color: ${colors.twelve};
    }
  }

  label {
    top: 0;
    bottom: 0;
    line-height: 3.8;
    left: 0px;
  }
`;

export const Title = styled.span`
  font-size: ${fonts.large}px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const NextLink = styled(Link)`
  width: 100%;
  max-width: 135px;
  height: 35px;
  font-size: ${fonts.small}px;
  background: ${colors.third};
  font-weight: bold;
  border-radius: ${metrics.border_radius_4}px;
  margin-right: 15px;

  text-decoration: none;
  border: 0;
  padding: 0;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 0px;

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);

    width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
  }

  ${media.lessThan('515px')`
  width: 100%;
  margin:0;
  margin-top: 10px;
`}
`;
