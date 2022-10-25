import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Categories" 
          component={Categories} 
          options={{ 
            headerStyle:{backgroundColor:'white'},
            headerTitleStyle:{color:'#ff8000',alignItems:'center'},
            headerTitleAlign:'center'
          }}
        />
        <Stack.Screen 
          name="Meals" 
          component={Meals} 
          options={{ 
            headerStyle:{backgroundColor:'white'},
            headerTitleStyle:{color:'#ff8000',alignItems:'center'},
            headerTitleAlign:'center',
          }}     
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;