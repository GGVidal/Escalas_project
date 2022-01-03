import styled from 'styled-components/native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

export const TextInput = styled.TextInput`
    width: ${windowWidth / 1.5 + 'px'};
    height: ${windowHeight / 35 + 'px'};
    font-size: 22px;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    background-color: white;
    width: ${windowWidth / 1.2 + 'px'};
    border-radius: 8px;
    border-width: 4px;
    padding: 16px;
    margin: 5px 0;
    border-color: #d7d7d7;
`;
