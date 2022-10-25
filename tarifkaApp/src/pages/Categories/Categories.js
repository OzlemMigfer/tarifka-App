import React from "react";
import { View, FlatList,Text} from 'react-native';
import styles from './Categories.styles';
import Config from '../../../config';
import CategoryCard from '../../components/CategoryCard';
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
    const {data, loading, error} = useFetch(Config.API_CATEGORIES);

    const handleCategoriesSelect = id => {
        navigation.navigate('Meals',{id});
    }

    renderCategory = ({item}) =>  (
        <CategoryCard category={item} onSelect={() => handleCategoriesSelect(item.id)} />
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