import React, { Component } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import IMAGES from '../../common/images'

export default function CategoryItem({ onPressItem, item }) {
    
    let currentImage  = IMAGES?.[`_${item?.movies[0]?.id}`]
    let source = currentImage ? currentImage : IMAGES.NO_IMAGE

    return (
        <TouchableOpacity 
        onPress={onPressItem}
        style={styles.itemContainer}>
            <Image
                style={styles.image}
                source={source}
            />
            <Text style={styles.title}>{item.name} </Text>
            <Text style={styles.description}>{item.desc}...</Text>
        </TouchableOpacity>
    )
}
