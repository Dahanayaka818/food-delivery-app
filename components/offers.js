import { View, ScrollView, TouchableOpacity,Text,Image } from "react-native";
import React from "react";
import {offers} from "../constants";
import * as Icon from "react-native-feather";
 
export default function Offers (){
    return (
        
<View className="pt-1 pb-2 pl-2 bg-white ">
<Text className="font-semibold text-2xl text-blue-400 pl-2">OFFERS   <Image source={require('../assets/Images/offers.png')}
                style={{ width: 25, height: 25 }} /> 
</Text>
      <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
             className="overflow-visible gap-2 pt-1"
               >
            <View className="flex-row flex-1 items-center p-3 opacity-80 "> 
                <Image
                source={require('../assets/Images/all-offer.png')}
                style={{ width: 200, height: 200 }} />
                  </View>

                 {
                     offers.map((offers, index)=>{
                         return (
                            <View className="flex-row flex-1 p-3 pl-3 bg-blue-200 rounded-lg"> 
                                <View key={index} >
                                     <TouchableOpacity>
                                   <Image style={{width: 250, height: 150, borderRadius:0, marginLeft:8}}
                                                    source={offers.image}/>
                                    </TouchableOpacity>

                                    <View className ="flex-row pl-1">
                                    <TouchableOpacity>
                                        <View className="p-1 mt-2 mr-20 ml-12 rounded-full border border-black ">
                                           <Icon.ShoppingBag height="20" width="20" strokeWidth={3} stroke="black" />
                                        </View>
                                        <Text className="text-black font-semibold pl-7"> {offers.name}
                                      </Text>
                                     </TouchableOpacity>

                                     <TouchableOpacity>
                                        <View className="p-1 mt-2 mr-20  rounded-full border border-black ">
                                        <Icon.ShoppingCart height="20" width="20" strokeWidth={3} stroke="black" />
                                               
                                        </View>
                                        <Text className="text-black font-semibold  "> {offers.name1}
                                              
                                      </Text>
                                     </TouchableOpacity>
                                     </View>
                                     
                                        
                              
                                     </View>

                                </View>
                              
                            )

                        }
                    )}
                   
                 </ScrollView>
            
</View>
 
    )
}