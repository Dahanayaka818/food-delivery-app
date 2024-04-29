import { View, Text, ScrollView, TouchableOpacity,Image, ImageBackground  } from "react-native";
import React from "react";
import { categories } from "../constants";

export default function Categories(){
    return (
        <View className="pt-1 pb-2 bg-white">
          
            <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 className="overflow-visible"
                 contentContainerStyle={{
                    paddingHorizontal:15
                 }} >

                    {
                        categories.map((category, index)=>{
                            return (
                                <View key={index} className="flex justify-center items-center mr-6">
                                    <TouchableOpacity
                                        className="p-1 mt-1 rounded-full shadow bg-gray-200">
                                             <Image style={{width: 45, height: 45 }}
                                        source={category.image}/>
                                

                               
                                        </TouchableOpacity>
                                        <Text className="items-center text-black font-medium"> {category.name}</Text>
                                </View>
                            )

                        }
                    )
                    }
                 </ScrollView>
          
        </View>
    )
}
 