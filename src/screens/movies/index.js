import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, RefreshControl, ActivityIndicator } from 'react-native'
import { Input, Button, MovieItem, AddElement } from '../../components'
import IMAGES from '../../common/images'
import { getMoviesForCategoryOfId } from '../../utils/helpers'
import Icon from "react-native-vector-icons/FontAwesome"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesByCateogryId, addNewMovieToCateogryById } from '../../actions'
import styles from './styles'
import COLORS from '../../common/colors'
import TEXT from '../../common/text'


function Movies(props) {

    const [refreshing, setRefreshing] = useState(false);

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
            setMovies(props.movies)
            setRefreshing(false)
        }
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


    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 16 }}>

                <AddElement
                    fields={[
                        {
                            id: 'name',
                            fieldIcon: <Icon name="gavel" color={'red'} size={30} />,
                            placeHolder: 'Movie Name',
                        },
                        {
                            id: 'rate',
                            fieldIcon: <Icon name="gavel" color={'red'} size={30} />,
                            placeHolder: "Movie Rate",
                        },
                        {
                            id: 'desc',
                            fieldIcon: <Icon name="gavel" color={'red'} size={30} />,
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
                                key={item.id}
                                onPressEdit={() => console.warn('hello')}
                                onPressDelete={() => console.warn('there!')}
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
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movies);

