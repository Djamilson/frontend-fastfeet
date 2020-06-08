import React from 'react';
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';

import PropTypes from 'prop-types';

import { colors, fonts } from '~/styles';

import { Container, Title, ContentButton, GobackLink, Button } from './styles';

export default function HeaderButton({
  title,
  hadleAction,
  titleAction,
  goback,
  loading,
}) {
  const path = `/${goback}`;

  return (
    <Container>
      <Title>{title}</Title>
      <ContentButton>
        <GobackLink to={path}>
          <span>
            <IoIosArrowBack color={colors.white_} size={fonts.large} />{' '}
          </span>
          <strong>Voltar</strong>
        </GobackLink>
        <Button onClick={() => hadleAction}>
          <span>
            <IoMdCheckmark color={colors.white_} size={fonts.large} />
          </span>
          <strong>{loading ? 'Carregando ...' : `${titleAction}`}</strong>
        </Button>
      </ContentButton>
    </Container>
  );
}

HeaderButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  goback: PropTypes.string.isRequired,
  hadleAction: PropTypes.func.isRequired,
  titleAction: PropTypes.string.isRequired,
};
