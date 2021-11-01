import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

const actions=[
    {
    id: 1,
    text: "Creer Boutique",
    name: "Boutique",
    position: 1
},
{
    id: 2,
    text: "Modifie Boutique",
    name: "Other",
    position: 2
},

]

const Boutique= props =>{
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Dashboard')}><Text>dkl,slk,ckl</Text></TouchableOpacity>
      <FloatingAction
          ref={(id) => {{}}}
          actions={actions}
          onPressItem={ name => props.navigation.navigate(`${name}`)}
          position={"right"}
      />
     </View>
  );
}

export default Boutique;
