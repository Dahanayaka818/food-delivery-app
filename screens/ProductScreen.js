import {View, SafeAreaView, TouchableOpacity,Text } from 'react-native';
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Details from '../components/details';
import Carousel from 'react-native-snap-carousel';
import { details} from '../constants';
 
export default function ProductScreen () {
     const navigation = useNavigation();
    return(
     <SafeAreaView>
          <StatusBar barStyle="dark-content" />
           <TouchableOpacity 
             onPress={()=> navigation.navigate('Home')}>

          <View className="ml-6 mt-4">
               <Icon.ArrowLeftCircle height="35" width="35" strokeWidth={2} stroke="blue" />
               
             
               </View>
           </TouchableOpacity>
           {/*item details*/}
          <View className="mt-4"> 
          <Carousel
                 containerCustomStyle={{overflow:'visible'}}
                 data={details}
                 renderItem={({item})=> <Details item={item}/>}
                 firstItem={1}
                 inactiveSlideOpacity={0.75}
                 inactiveSlideScale={0.50}
                 sliderWidth={400}
                 itemWidth={320}
                 slideStyle={{display:'flex',alignItems:'center'}}
                 />
           
          </View>
          {/*bottom*/}
          <View className="flex-row px-20">
              <Icon.ArrowLeft height="20" width="20" strokeWidth={2} stroke="black" />
              <Text>                                                              </Text>
              <Icon.ArrowRight height="20" width="20" strokeWidth={2} stroke="black" />
              </View>

          <TouchableOpacity>
          <View className="items-center p-3 mt-5 ml-20 mr-20 rounded-full border border-black bg-blue-700">
               <Text className="font-semibold text-white">View Cart</Text>
          </View>
          </TouchableOpacity>

        

          
     </SafeAreaView>
     
    )
}