import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.styles';

const CategoryCard = ({category, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri:category.strCategoryThumb }}/>
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoryCard;