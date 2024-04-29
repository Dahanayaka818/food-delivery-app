import { View,Text, TouchableOpacity,Image, ImageBackground} from "react-native";
import React from "react";

import {BlurView} from "expo-blur";
import * as Icon from "react-native-feather";

export default function Details({item}){
 
    return (
          
        <View className="flex-row ">
            
            {/*background image*/}
                    <ImageBackground source={item.image}
                                      style={{ width: 380, height: 550, borderRadius:10, justifyContent:"center"}}className= "items-center ml-5 rounded-lg" >
                     
                    <BlurView 
                            style={{
                            width:350, 
                            height:500, 
                            alignSelf:'center',borderRadius:20
                            }}
                            blurType="light" blurAmount={20}>
                                    
                        {/*product images*/}
                            <View className ="flex-row">
                            <Image className="ml-12 mt-2" style={{width: 150, height: 150, borderRadius:10, marginLeft:97}}
                                                                    source={item.image}/>
 
                        {/*favor icon*/}                         
                            <View className="ml-10 mt-4">
                                <Icon.Heart height="20" width="20" strokeWidth={3} stroke="white" />
                                    </View>
                                    </View>
 
                        {/*details*/}
                            <View className ="pl-1">
                                <View className ="flex-row pl-7">
                                        <Text className="text-black font-bold text-3xl pl-5 mt-4"> {item.name }     </Text>
                                        <View className="items-center border-l-2 pr-8 border-1-black mt-3">
                                        <Text className="text-black font-bold text-1xl pl-6 mt-3.5"> {item.category} </Text>
                                        </View>
                                </View>
                                        
                                        <Text className="text-black text-1xl font-medium pl-9 mt-2"> {item.description} </Text>
                                        <View className ="flex-row mt-2 ">
                                        <Text className="text-black font-medium pl-9 mt-2"> {item.price} </Text>
                                        <Text className="ml-5 mt-2 line-through">{item.oprice}</Text>
                                        </View>
                                     <View className ="flex-row mt-2">
                                        <Image
                                             source={require('../assets/Images/star.png')}
                                             style={{ width: 20, height: 20, marginLeft:23}} />
                                          <Text className="text-black font-medium mt-1"> {item.rating} </Text>
                                          <Text className="text-black font-medium mt-1"> ({item.reviews} )</Text>
                                    </View>
                                    <View className ="flex-row mt-2 ml-10">
                                     <Icon.Truck height="25" width="25" stroke="black" /> 
                                     <Text className="ml-3 mt-1">Delivery</Text>
                                     <Text className="ml-3 mt-1">Fee:$2          </Text>
                                     <Icon.Watch height="25" width="25" stroke="black" /> 
                                     <Text className="ml-1 mt-1">Est:20Min</Text>
                                     </View>

                                     <Text className="text-black font-thin mt-3">{item.note} </Text>
                                     </View>

                                     <View className="flex-row items-center px-8 mt-5 ml-20 space-x-2 ">
                                        <TouchableOpacity>
                                        <Icon.MinusCircle height="40" width="40" strokeWidth={1} stroke="white"/>
                                        </TouchableOpacity>
                                        <View className="  items-center p-3 squar-full border border-white">
                                        <Text className="font-medium text-white">1</Text>
                                        </View>
                                        <TouchableOpacity>
                                        <Icon.PlusCircle height="40" width="40" strokeWidth={1} stroke="white" />
                                        </TouchableOpacity>
                                     </View>
                                      </BlurView>
 
                                 </ImageBackground>
                               
                                      </View>
 
                                  
                               
                         
                    
                
       
       
     )
 }