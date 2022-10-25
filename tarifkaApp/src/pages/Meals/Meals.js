import React from "react";
import {View, FlatList} from 'react-native';
import styles from './Meals.styles';
import MealCard from "../../components/MealCard";
import Config from "../../../config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";

const Meals = ({route,navigation}) => {
    const {strCategory} = route.params;
    // const {data, loading, error} = useFetch(`${Config.API_MEALS}${strCategory}`);
    const {data, loading, error} = useFetch(Config.API_MEALS);

    const handleMealsSelect = idMeal => {
        navigation.navigate('Detail' ,{idMeal})
    }

    const renderMeals = ({item}) => (
        <MealCard meals={item} onSelect={() => handleMealsSelect(item.idMeal)}/>
    )

    if(loading){
        <Loading/>
    }

    if(error){
        <Error/>
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals}
                keyExtractor={data => data.idMeal}
            />
        </View>
    );
};

export default Meals;