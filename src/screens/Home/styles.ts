import { TextProps, ViewProps } from 'react-native';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col
} from 'react-native-table-component';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<ViewProps>`
    flex: 1;
    padding: 16px;
    padding-top: 30px;
    background-color: #f5f5f1;
`;

export const Text = styled.Text<TextProps>`
    font-size: 20px;
    color: #333333;
    align-self: center;
`;

export const RowContainer = styled(Row)`
    height: 40px;
    background-color: #f1f8ff;
`;

export const TableContainer = styled(Table)``;

export const TableWrapperContainer = styled(TableWrapper)`
    flex-direction: row;
`;
export const ColContainer = styled(Col)`
    flex: 1;
    background-color: #f6f8fa;
`;
export const RowsContainer = styled(Rows)`
    height: 28px;
`;
