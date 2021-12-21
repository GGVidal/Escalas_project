import React, { useContext } from 'react';
import {
    Container,
    RowContainer,
    RowsContainer,
    TableContainer,
    TableWrapperContainer,
    ColContainer,
    Text
} from './styles';
import FormButton from '../../components/FormButton/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStack } from '../../navigation/routesTypes';
import { useNavigation } from '@react-navigation/native';

type Props = StackNavigationProp<RootStack, 'Auth'>;

export default function HomeScreen() {
    const { userAuth, logout } = useContext(AuthContext);
    const navigation = useNavigation<Props>();
    const { navigate } = navigation;
    const tableHead = ['', 'Head1', 'Head2', 'Head3'];
    const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
    const tableData = [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
    ];
    const onLogout = async () => {
        await logout!();
        navigate('Auth', { screen: 'Login' });
    };
    return (
        <Container>
            <Text>Welcome user {userAuth?.displayName}</Text>
            <TableContainer borderStyle={{ borderWidth: 1 }}>
                <RowContainer
                    data={tableHead}
                    flexArr={[1, 2, 1, 1]}
                    textStyle={{ textAlign: 'center' }}
                />
                <TableWrapperContainer>
                    <ColContainer
                        data={tableTitle}
                        heightArr={[28, 28]}
                        textStyle={{ textAlign: 'center' }}
                    />
                    <RowsContainer
                        data={tableData}
                        flexArr={[2, 1, 1]}
                        textStyle={{ textAlign: 'center' }}
                    />
                </TableWrapperContainer>
            </TableContainer>
            <FormButton buttonTitle="Logout" onPress={onLogout} />
        </Container>
    );
}
