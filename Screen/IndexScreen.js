import { View, Text, Button } from 'react-native'
import React from 'react'

const IndexScreen = ({navigation,route}) => {


    React.useEffect(()=>{

        if(route.params?.post){
            //Post updated, do something with 'route.params.post'
            //For example, sent the post to the server
        }

    },[route.params?.post])

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button
       title='Create Post'
       onPress={()=>{
        navigation.navigate('CreatePost')
       }}/>
       <Text>{'\n'}</Text>
       <Text style={{margin:10}}>Post: {route.params?.post}</Text>
    </View>
  )
}

export default IndexScreen