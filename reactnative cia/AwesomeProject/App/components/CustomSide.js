import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import AppText from './Apptext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function CustomSide(props) {
  return (
    <View style={styles.container}
    
    ><Image source={require('../../assets/Rectangle.png')} style={{width:200,height:200}}></Image>
    
    <View style={styles.container1}>
      
    <TouchableOpacity  >
  <AppText> EDUCATION              <Icon name="chevron-right" size={20} style={styles.Icon}></Icon> </AppText>
  </TouchableOpacity>
  <TouchableOpacity style={{padding:5}} >
<AppText>SKILLS                        <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>
<TouchableOpacity style={{padding:5}}>
<AppText>Connect to people        <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>

<TouchableOpacity style={{padding:5}} > 
<AppText>MY connections          <Icon name="chevron-right" size={20}></Icon> </AppText>
</TouchableOpacity>
<TouchableOpacity style={{padding:5}}>
<AppText> Share Profile  </AppText>
</TouchableOpacity>
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#E5E5E5",
  },
container1:{
  marginTop:40,

},
icon:{
  justifyContent:"center",
  alignSelf:"center"
}
});

export default CustomSide;