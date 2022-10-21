import React from "react";
import {Text, View, Image} from 'react-native';
import styles from './CategoryCard.styles';

const CategoryCard = ({category}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:category.strCategoryThumb }}/>
            <Text style={styles.title}>{category.strCategory} kategoriAdi</Text>
        </View>
    );
};

export default CategoryCard;