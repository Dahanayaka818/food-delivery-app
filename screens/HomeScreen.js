import { Text,View,TextInput,Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
 
import Categories from '../components/categories';
import Offers from '../components/offers';
import Bottom from '../components/bottom';
import FeaturedRow from '../components/featuredRow';
import FeaturedRow2 from '../components/featuredRow2';
 
 
export default function HomeScreen ( ) {
    
    return(
       <><SafeAreaView className='bg-blue-700'>
          <StatusBar barStyle="dark-content" />
          {/*search bar*/}
          <View className="flex-row items-center space-x-2 px-4 py-5  ">
             <View className="flex-row flex-1 items-center p-3 rounded-full border border-white">
                <TextInput placeholder='Foods' placeholderTextColor={'white'} className=" flex-1 placeholder-white text-white pl-3" />
                <Icon.Search height="25" width="25" stroke="white" />
             </View>

             {/*location*/}
             <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-white">
                <Icon.MapPin height="25" width="25" stroke="white" />
                <Text className="text-white font-bold">Colombo</Text>
             </View>

             {/*sort*/}
             <View className="p-3 square-full bg-white">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="blue" />
             </View>
          </View>

          {/*self pickup*/}
          <View className="flex-row items-center space-x-3 pl-10 pt-0.5">
             <Image
                source={require('../assets/Images/pickup_icon.jpg')}
                style={{ width: 48, height: 48 }} />
                <TouchableOpacity>
             <View className="p-3 rounded-full border border-white ">
                <Text className="text-white font-semibold">
                   Self Pickup
                </Text>
             </View>
             </TouchableOpacity>

             {/*delivery*/}
             <Image
                source={require('../assets/Images/delivery2_icon.jpg')}
                style={{ width: 47.5, height: 47.5}} />
                <TouchableOpacity>
             <View className="p-3 rounded-full border border-white ">
                <Text className="text-white font-semibold">
                   Delivery
                </Text>
             </View>
             </TouchableOpacity>
          </View>

          {/*main*/}
          <ScrollView showsVerticalScrollIndicator={false}
            className="overflow-visible"
             contentContainerStyle={{
                paddingBottom:20
             }}
             
             >
          </ScrollView>
         
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}
           
             contentContainerStyle={{
                paddingBottom:10
             }}
             >

            {/*category*/}
               <Categories />
           
            {/*offers*/}
               <Offers/>
           
            {/*featured*/}
           <FeaturedRow/>
           <FeaturedRow2/>
   </ScrollView>

  
            {/*bottom*/}
           <Bottom/>
   </>
      ) ; 
 
}

 
 