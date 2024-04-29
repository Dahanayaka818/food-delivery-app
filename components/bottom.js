import { View, Text, ScrollView, TouchableOpacity,Image  } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
 
import * as Icon from "react-native-feather";

export default function Bottom(){
    return (
        <SafeAreaView className='bg-blue-700 mb-2 p-0 ml-2 mr-2 rounded-full'>
       <View className="mb-1 flex-row items-center space-x-5 ml-8 ">

      <View>
      <TouchableOpacity>
      <Icon.Heart height="20" width="50" stroke="white" />                          
      </TouchableOpacity>
      <Text className="text-white font-medium pr-1">Favourite</Text> 
      </View>

      <View>
      <TouchableOpacity>
      <Icon.List height="20" width="50" stroke="white" />                          
      </TouchableOpacity>
      <Text className="text-white font-medium pl-1">Orders</Text>
      </View>

      <View>
      <TouchableOpacity  className="rounded-full shadow bg-gray-100 pt-1 mb-1 ">
      <Icon.Home height="20" width="50" stroke="black" />                          
      </TouchableOpacity>
      <Text className="text-white font-medium pl-1"> Home</Text> 
      </View>

      <View>
      <TouchableOpacity>
      <Icon.ShoppingCart height="20" width="50" stroke="white" />                          
      </TouchableOpacity>
      <Text className="text-white font-medium pl-3.5">Cart</Text> 
      </View>

      <View>
      <TouchableOpacity>
      <Icon.User height="20" width="50" stroke="white" />                          
      </TouchableOpacity>
      <Text className="text-white font-medium pl-1"> Profile</Text> 
      </View>
                                      
                                
                                
    
    </View>
                            
        </SafeAreaView>
    )}