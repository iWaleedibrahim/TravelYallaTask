import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, RefreshControl, ActivityIndicator } from 'react-native'
import { Input, Button, MovieItem, AddElement, ModalWrapper } from '../../components'
import IMAGES from '../../common/images'
import Icon from "react-native-vector-icons/FontAwesome"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesByCateogryId, addNewMovieToCateogryById, editMovieItem, deleteMovieItem } from '../../actions'
import styles from './styles'
import COLORS from '../../common/colors'
import FONTS from '../../common/fonts'
import DIMS from '../../common/dims'
import TEXT from '../../common/text'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


function Movies(props) {

    const [refreshing, setRefreshing] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        props.getMoviesByCateogryId(props.route.params.id)
        return setMovies([])
    }, [])

    useEffect(() => {
        if (props.error) {
            alert(props.error)
        }
    }, [props.error]);

    useEffect(() => {
        if (props.movies) {
            setMovies(props.movies.reverse())
        }
        setRefreshing(false)
    }, [props.movies]);

    function createNewMovie(values) {

        let name = values?.name
        let rate = values?.rate
        let desc = values?.desc

        if (movies.includes(item => item.name === name)) {
            alert(TEXT.ERRORS.CATEGORYEXIST)
        } else {
            if (name && rate && desc) {
                props.addNewMovieToCateogryById(name, rate, desc, props.route.params.id)
            } else {
                alert(TEXT.ENTER_ALL_VALUES)
            }
        }
    }
    function editItem(itemId) {
        props.editMovieItem(itemId)
    }

    function deleteItem(itemId) {
        props.deleteMovieItem(itemId, props.route.params.id)
    }

    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 16, marginTop: 24 }}>

                {editModalVisible &&
                    <ModalWrapper
                        closeModal={() => setEditModalVisible(false)}
                    >
                        <View style={{ paddingHorizontal: 8, paddingVertical: 24 }}>
                            <Text style={{
                                fontFamily: FONTS.Baskerville,
                                fontSize: 18,
                            }}>
                                We Should Implement Movie Edit Feature in this modal. ~ {'\n'} {'\n'}
                            </Text>
                        </View>
                    </ModalWrapper>}
                <AddElement
                    fields={[
                        {
                            id: 'name', // icon was set the same despite repeatation of design in case we needed to one o them 
                            fieldIcon: <MaterialIcons name="domain" size={20} color="gray" style={{ marginRight: 10 }} />,
                            placeHolder: 'Movie Name',
                        },
                        {
                            id: 'rate',
                            fieldIcon: <MaterialIcons name="domain" size={20} color="gray" style={{ marginRight: 10 }} />,
                            placeHolder: "Movie Rate",
                            keyboardType: 'numeric',
                        },
                        {
                            id: 'desc',
                            fieldIcon: <MaterialIcons name="domain" size={20} color="gray" style={{ marginRight: 10 }} />,
                            placeHolder: "Movie Description",
                        },
                    ]}
                    onPressButton={(values) => createNewMovie(values)}
                    buttonTitle={'ADD MOVIE'}
                />

            </View>

            {movies === null ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator />
                </View>
                :
                movies.length === 0 ?
                    <View style={styles.loadingContainer}>
                        <Text>No Movies Found</Text>
                    </View> :

                    <FlatList
                        data={movies}
                        // style={{ backgroundColor: "#c3c3c3", }}
                        renderItem={({ item }) =>
                            <MovieItem
                                key={item.id.toString()}
                                onPressEdit={() => setEditModalVisible(true)}
                                onPressDelete={() => deleteItem(item.id)}
                                item={item}
                            />
                        }
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                title={TEXT.PULL_TO_REFRESH}
                                tintColor={COLORS.VERY_LIGHT_BLUE}
                                titleColor={COLORS.TRAVELYALLA_BLUE}
                                onRefresh={() => {
                                    props.getMoviesByCateogryId(props.route.params.id)
                                    setRefreshing(true)
                                }}
                            />
                        }
                    />}
        </>
    )
}


const mapStateToProps = state => {
    const {
        movies,
        error
    } = state.mainReducer;
    return {
        movies,
        error
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMoviesByCateogryId,
            addNewMovieToCateogryById,
            editMovieItem,
            deleteMovieItem
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movies);

