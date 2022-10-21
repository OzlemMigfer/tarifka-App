import React, {useState,useEffect} from "react";
import {Text, View, FlatList,StyleSheet} from 'react-native';
import styles from './Categories.styles';
import Config from '../../../config';
import CategoryCard from '../../components/CategoryCard';
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = () => {
    const {data, loading, error} = useFetch(Config.API_URL);

    renderCategory = ({item}) =>  (
        <CategoryCard category={item}/>
    );

    if(loading){
        <Loading/>
    };

    if(error){
        <Error/>
    };

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCategory}
            />
        </View>
    );
};

export default Categories;