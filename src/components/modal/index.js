import React, { Component } from 'react';
import { View, Text, Dimensions, Image, Modal, TouchableOpacity } from 'react-native';
import FONTS from '../../common/fonts';
import COLORS from '../../common/colors';
import IMAGES from '../../common/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { cancel, closeBlack } = IMAGES;

export default function ModalWrapper(props) {


    const { modalVisible, closeModal, showClose } = props

    const { width, height } = Dimensions.get('window');

    return (
        <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={() => { }}
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
                style={{
                    zIndex: 10000,
                    position: 'absolute',
                    width,
                    height,
                    left: 0,
                    top: 0,
                    backgroundColor: 'rgba(124,124,124,.5)',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <View
                    style={[{
                        borderRadius: 5,
                        width: '80%',
                        backgroundColor: '#fff',
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                    }]}
                >

                    {showClose && (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginBottom: 0,
                            }}
                        >
                            <TouchableOpacity
                                onPress={closeModal}
                            >
                                <MaterialIcons name={'close'} size={30} />
                            </TouchableOpacity>
                        </View>
                    )}
                    {props.children}
                    <View>

                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}
