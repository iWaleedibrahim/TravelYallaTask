import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import IMAGES from '../../common/images'


function MovieItem({ onPressEdit, onPressDelete, onPressItem, item }) {

    let currentImage = IMAGES?.[`_${item.id}`]
    let source = currentImage ? currentImage : IMAGES.POSTER

    return (
        <View style={styles.itemContainer}>
            <ImageBackground
                style={styles.image}
                source={source}
            >
                {/* <Text style={{position:'absolute', top: 0, left: 20, top: 70, color:'#fff', fontSize: 25}}>{item.name}</Text> */}
            </ImageBackground>
            <View style={{ flex: 1, alignItems: "flex-start", justifyContent: 'space-between' }}>
                <View>
                <Text style={styles.title}>{item.name} </Text>
                <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'100%' }}>

                    <View style={{ flexDirection: 'row' }}>
                        {[1, 2, 3, 4].map(i =>
                            <>
                                <AntDesign key={item.toString()} name="star" style={{ marginLeft: 4 }} size={12} color="#ffd700" />
                                { i == 4 &&
                                 <FontAwsomeIcon
                                    key={item.toString() + Math.random() + 1 * 999}
                                    name="star-half"
                                    style={{ marginLeft: 4 }} 
                                    size={12}
                                    color="#ffd700"
                                />
                                }
                            </>
                        )
                        }
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={[styles.buttonText, { color: '#006400' }]}>
                                Edit
                     </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={[styles.buttonText, { color:  '#8b0000' }]}>
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

