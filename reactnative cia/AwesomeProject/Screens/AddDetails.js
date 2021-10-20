import React from 'react';
import { View, StyleSheet,Button} from 'react-native';
import AppText from '../App/components/Apptext';
import AppTextInput from '../App/components/AppTextInput';
import Slide from '../App/components/Slide';
import colors from '../App/config/colors';

function AddDetails({navigation}) {
  return (
      
    <View style={styles.container}>
        <AppText> Insitution/ university </AppText> 
<AppTextInput placeholder="Add education(eg: MCA) ">
    

</AppTextInput>
<AppText> DEGREE </AppText> 
<AppTextInput placeholder="Add education(eg: MCA) ">

</AppTextInput>
<AppText>FIELD OF STUDY </AppText> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<AppText>GRADE </AppText> 
<AppTextInput placeholder="Add education(eg: MCA) " />
<AppText>ACTIVITIES </AppText> 
<AppTextInput placeholder="Add education(eg: PLACEMENT, SPORTS) " />
<View style={styles.extra}>
<AppText style={styles.create}>START YEAR</AppText> 
<AppTextInput keyboardType="numeric" />
<AppText style={styles.create}>END YEAR</AppText> 
<AppTextInput keyboardType="numeric" />
</View>

<AppText>DESCRIPTION</AppText> 
<AppTextInput placeholder="OPTIONAL" />
<Slide name="chevron-right" size={20} color="black" ></Slide>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
    top:40
  },
  extra:{
   

    flexDirection:"row",
      height:40,
      width:"50%"
},
extras:{
    flexDirection:"row",

    height:40,
    width:"40%"
},
create:{
paddingBottom:10,
marginBottom:10,

}
});

export default AddDetails;