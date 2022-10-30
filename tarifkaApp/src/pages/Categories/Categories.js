import React from "react";
import { View, FlatList,Text} from 'react-native';
import styles from './Categories.styles';
import Config from '../../../config';
import CategoryCard from '../../components/Cards/CategoryCard';
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
    const {data, loading, error} = useFetch(Config.API_CATEGORIES);

    const handleCategoriesSelect = strCategory => {
        navigation.navigate('Meals',{strCategory});
    }

    renderCategory = ({item}) =>  (
        <CategoryCard category={item} onSelect={() => handleCategoriesSelect(item.strCategory)} />
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
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    );
};

export default Categories;