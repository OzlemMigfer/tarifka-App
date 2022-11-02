import React from "react";
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './DetailCard.styles';

const DetailCard = ({detail,onSelect}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:detail.strMealThumb}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.country}>{detail.strArea}</Text>
            </View>
            <Text style={styles.description}>{detail.strInstructions}</Text>
            <TouchableWithoutFeedback onPress={onSelect}>
                <Text style={styles.youtube} >Watch On Youtube</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default DetailCard;