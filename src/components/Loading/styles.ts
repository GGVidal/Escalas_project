import { ActivityIndicatorProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export const ViewContainer = styled.View<ViewProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Loader = styled.ActivityIndicator<ActivityIndicatorProps>``;
