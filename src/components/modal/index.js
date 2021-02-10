import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function ModalWrapper(props) {

    const { modalVisible, closeModal } = props

    return (
        <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            supportedOrientations={[
                'portrait',
                'landscape',
                'landscape-left',
                'landscape-right',
            ]}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={closeModal}
                style={styles.modalParentContainer}
            >
                <View style={[styles.modalWrapper]} >
                    {props.children}
                    <View>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};



