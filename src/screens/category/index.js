import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View, RefreshControl } from 'react-native'
import { CategoryItem, AddElement} from '../../components'
import Icon from "react-native-vector-icons/FontAwesome"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories, addNewCateogry } from "../../actions";
import styles from './styles'
import COLORS from '../../common/colors'
import TEXT from '../../common/text'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




function Category(props)  {

    const [refreshing, setRefreshing] = useState(false);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        props.getCategories()
    }, []);

    useEffect(() => {
        if(props.error) { 
            alert(props.error)
        }
    }, [props.error]);

    useEffect(() => {
        if(props.storageCategories) { 
            setCategories(props.storageCategories.reverse())
        }
        setRefreshing(false)
    }, [props.storageCategories]);


    function createNewCateogry(values) {

        let categoryName = values?.categoryName
        let categoryDesc = values?.categoryDesc
 
        if(categories.includes(item =>  item.name === categoryName || item.desc === categoryDesc )) { 
            alert(TEXT.ERRORS.CATEGORYEXIST)
        } else { 
            if(categoryName && categoryDesc ) { 
                props.addNewCateogry(categoryName, categoryDesc)
            } else { 
                alert(TEXT.ENTER_ALL_VALUES)
            }
        }
    }

    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 16, marginTop: 24 }}>
              <AddElement 
              fields={[
                { 
                    id: 'categoryName',
                    //  fieldIcon: <Icon name="gavel" color={'red'} size={30} />,
                     fieldIcon: <MaterialIcons name="domain" size={20} color="gray" style={{marginRight: 10}}/>,
                     placeHolder: 'Cateogry Name',
                },
                {
                    id: 'categoryDesc',
                    fieldIcon: <MaterialIcons name="domain" size={20} color="gray" style={{marginRight: 10}}/>,
                    placeHolder: "Cateogry Description",
                },
              ]}
              onPressButton={(values) => createNewCateogry(values)}
              buttonTitle={'CREATE'}
              />

            </View>
            {props.loading ?
            <View style={styles.loadingContainer}> 
                <ActivityIndicator /> 
            </View>
                :
                <FlatList
                    data={categories}
                    numColumns={2}
                    // style={{ backgroundColor: "#c3c3c3", }}
                    renderItem={({ item }) =>
                        <CategoryItem
                            key={Math.random().toString() + item.id}
                            onPressItem={() => props.navigation.navigate("Movies", { id: item.id, name: item.name })}
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
                                props.getCategories()
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
        storageCategories,
        // loading,
        error
    } = state.mainReducer;
    return {
        storageCategories,
        // loading,
        error
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getCategories,
            addNewCateogry,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Category);

