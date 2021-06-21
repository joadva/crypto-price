import React from 'react'
import { View, Text , StyleSheet ,Image} from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View style={styles.containerItem}>
           <View style={styles.coinName}> 
            <Image style={styles.image} source={{uri:coin.image}}/>
            <View style={styles.coinNames}>
            
            <Text style={styles.text}> {coin.name} </Text>
            <Text style={styles.textSymbol}> {coin.symbol} </Text>
           
              </View>
              </View>
           
           <View>
           <Text style={styles.text}> ${coin.current_price} </Text>
           <Text style={styles.text}> {coin.price_change_percentage_24h} </Text>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinNames: {
        flexDirection: "row",
        justifyContent: 'space-between'
        
    },
    coinName: {
        marginLeft: 10,
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: "#fff"
    },
    textSymbol: {
        color: "#434343",
        textTransform: 'uppercase'
    }
})
export default CoinItem
