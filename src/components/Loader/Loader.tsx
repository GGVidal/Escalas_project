import React from 'react';
import { Modal } from 'react-native';
import { LoaderContainer, LoaderWrapper, ModalBackground } from './styles';

interface LoaderProps {
    loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
    return (
        <Modal
            onRequestClose={() => {
                console.log('CLOSE');
            }}
            transparent={true}
            animationType={'none'}
            visible={loading}
        >
            <ModalBackground>
                <LoaderWrapper>
                    <LoaderContainer
                        animating={loading}
                        size="large"
                        color="#6646ee"
                    />
                </LoaderWrapper>
            </ModalBackground>
        </Modal>
    );
}
