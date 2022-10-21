import React, {useState,useEffect} from "react";
import {Text, View, FlatList,StyleSheet} from 'react-native';
// import styles from './Categories.styles';
import Config from '../../../config';
import CategoryCard from '../../components/CategoryCard';
import useFetch from "../../hooks/useFetch";

const Categories = () => {
    const {data, loading, error} = useFetch(Config.API_URL);

    renderCategory = ({item}) =>  (
        <CategoryCard category={item}/>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCategory}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink'
    }
})

export default Categories;