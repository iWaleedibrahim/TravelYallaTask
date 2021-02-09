import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'


function MovieItem({ onPressEdit, onPressDelete, onPressItem, item }) {

    let currentImage  = IMAGES?.[`_${item.id}`]
    let source = currentImage ? currentImage : IMAGES.NO_IMAGE

    return (
        <View style={styles.itemContainer}>
            <Image
                style={styles.image}
                source={source}
            />
            <View style={{flex:1}}>
                <Text style={styles.title}>{item.name} </Text>
                <Text style={styles.description}>{item.description}</Text>

                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        {[1, 2, 3, 4, 5].map(item => <AntDesign key={item.toString()} name="star" size={15} color="black" />)}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={[styles.buttonText, { color: 'green' }]}>
                                Edit
                     </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={[styles.buttonText, { color: 'red' }]}>
                                Delete
                   </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}



export default MovieItem;

