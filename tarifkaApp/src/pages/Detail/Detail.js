import React from "react";
import {Text, View, FlatList, Linking} from 'react-native';
import DetailCard from "../../components/Cards/DetailCard/DetailCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import Config from "../../../config";

const Detail = ({route}) => {
    const {idMeal} = route.params;
    const {data, loading, error} = useFetch(`${Config.API_DETAIL}=${idMeal}`);

    const renderDetail = ({item}) => {
        <DetailCard detail={item} onSelect={() => Linking.openURL(item.strYoutube)} />
    }
    
    if(loading){
        <Loading/>
    }

    if(error){
        <Error/>
    }

    return(
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
                key={renderDetail}
            />
        </View>
    );
};

export default Detail;