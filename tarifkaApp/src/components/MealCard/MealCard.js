import React from "react";
import {Text, View, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({meals, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground
                    imageStyle={{ borderRadius:10 }}
                    style={styles.image}
                    source={{ uri:meals.strMealThumb }}
                >                
                    <Text numberOfLines={1} style={styles.title}>{meals.strMeal}</Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MealCard;