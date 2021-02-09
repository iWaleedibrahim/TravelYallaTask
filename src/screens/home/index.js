import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import IMAGES from '../../common/images'
import FONTS from '../../common/fonts'


export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Image 
            source={IMAGES.TRAVELYALLA}
            style={{width: 400, height:  300}}
            resizeMode={'contain'}
            />   
            <Text 
            style={{
                fontSize: 16,
                fontFamily: FONTS.GillSans,
                marginBottom: 20

            }}
            > 
            </Text>
        </View>
    )
}
