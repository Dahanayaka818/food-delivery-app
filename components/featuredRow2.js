import { View,Text, TouchableOpacity,Image, ImageBackground,ScrollView} from "react-native";
import React from "react";
import {BlurView} from "expo-blur";
import { featuredRow2 } from "../constants";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
 
 
export default function FeaturedRow2( ){
    const navigation = useNavigation();
    return (
         <View>
             <Text className="font-semibold text-2xl text-blue-400 pl-2">NEW ITEMS </Text>
        
        <View className="flex-row justify-between items-center px-4">
           
            <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 className="overflow-visible gap-1"
                   >
              
            {
                featuredRow2.map((feature2, index)=>{
                    return (
                        <View className="flex-row flex-1 p-3 pl-3"> 
                        <View key={index} >
                {/*background image*/}
                       <ImageBackground className= "items-center ml-5"
                                 source={feature2.image}
                                 style={{ width: 300, height: 350, borderRadius:15, justifyContent:"center"}} >
                    
                        <BlurView 
                              style={{
                              width:255, 
                              height:320, 
                              alignSelf:'center',borderRadius:20 
                                         }}
                              blurType="light" blurAmount={20}>

                {/*product images*/}
                        <View className ="flex-row">
                            <Image className="ml-12 mt-2" style={{width: 150, height: 150, borderRadius:10}}
                                                                   source={feature2.image}/>

                {/*favor icon*/}                         
                        <View className="ml-6 mt-4">
                            <Icon.Heart height="20" width="20" strokeWidth={3} stroke="white" />
                        </View>
                        </View>

                {/*details*/}
                        <View className ="flex-column pl-2">
                                       
                            <Text className="text-black font-bold text-3xl pl-6 mt-4"> {feature2.name} </Text>
                            <Text className="text-black font-medium pl-6 mt-2"> {feature2.description} </Text>
                            <Text className="text-black font-medium pl-6 mt-2"> {feature2.price} </Text>

                        <View className ="flex-row mt-2">
                            <Image
                                source={require('../assets/Images/star.png')}
                                style={{ width: 20, height: 20, marginLeft:23}} />
                            <Text className="text-black font-medium mt-0.5"> {feature2.rating} </Text>
                            <Text className="text-black font-medium mt-0.5"> ({feature2.reviews} )</Text>

                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Product')}  >
                        <Image className="mb-5"
                            source={require('../assets/Images/order-now.png')}
                            style={{ width: 49, height: 37, marginLeft:50, marginBottom:70, paddingBottom:10}} onPress={()=> navigation.navigate("ProductScreen")
                                }/>
                        </TouchableOpacity>

                        </View>
                                    
                            </View>
                                     
                        </BlurView>

                            </ImageBackground>
                              
                                </View>

                            </View>
                              
                            )

                        }
                    )}
                   
                 
                 
           

                
                </ScrollView> 
        </View>
        </View>
    )
}