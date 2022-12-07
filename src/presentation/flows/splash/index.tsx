import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo } from './styles';

export function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomRouter');
    }, 2000);
  }, []);

  return (
    <Container>
      <Logo />
    </Container>
  );
}
