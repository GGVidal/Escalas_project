import styled from 'styled-components/native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

export const TextInput = styled.TextInput`
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
    width: ${windowWidth / 1.2 + 'px'};
    height: ${windowHeight / 15 + 'px'};
    font-size: 16px;
    border-radius: 10px;
    border-width: 1px;
    background-color: #e5edfc;
`;
