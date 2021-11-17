import React from 'react';
import {Loader, ViewContainer} from './styles';

export default function Loading() {
  return (
    <ViewContainer>
      <Loader size="large" color="#6646ee" />
    </ViewContainer>
  );
}
