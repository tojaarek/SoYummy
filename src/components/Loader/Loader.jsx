import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Container, Text } from './Loader.styled';
import { useEffect } from 'react';

export const Loader = ({ text }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <Text>{text}</Text>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </Container>
  );
};
