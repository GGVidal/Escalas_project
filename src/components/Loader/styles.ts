import { ActivityIndicatorProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export const LoaderWrapper = styled.View<ViewProps>`
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ModalBackground = styled.View<ViewProps>`
    flex: 1;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: #00000040;
`;

export const LoaderContainer = styled.ActivityIndicator<ActivityIndicatorProps>``;
