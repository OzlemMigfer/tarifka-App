import React from "react";
import {Text, View, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({meal, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground
                    imageStyle={{ borderRadius:10 }}
                    style={styles.image}
                    source={{ uri:meal.strMealThumb }}
                >                
                    <Text style={styles.title}>{meal.strMeal}</Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MealCard;