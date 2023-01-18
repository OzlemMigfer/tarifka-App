import React from 'react';
import {Text, View, FlatList, Linking} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import Config from '../../../config';
import DetailCard from '../../components/Cards/DetailCard';

const Detail = ({route}) => {
  const {idMeal} = route.params;
//   console.log('Route:',route.params);
  const {data, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+idMeal,
  );
  const renderKey = (item) => item.idMeal;

  const renderDetail = ({item}) => {
    return (
      <DetailCard
        detail={item}
        onSelect={() => {
          Linking.openURL(item.strYoutube);
        }}
      />
    );
  };

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  return (
    <View>
      <FlatList
        data={data.meals}
        renderItem={renderDetail}
        keyExtractor={renderKey}
      />
      {console.log('DATA:',data.meals)}
    </View>
  );
};

export default Detail;
