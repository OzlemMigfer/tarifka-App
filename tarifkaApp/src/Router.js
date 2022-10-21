import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from "./pages/Categories";
import List from "./pages/List";
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
        <Stack.Screen name="ListPage" component={List} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;