import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import Gap from '../Gap'

const CardPesananCS = ({pesanan, navigation}) => {
  console.log('data pesanan di cs:', pesanan)
  return (
    <TouchableOpacity style={styles.card} 
    onPress={() => navigation.navigate('DetailPesananCS', {pesanan})}>
    
    <View style={styles.container}>
    <View style={styles.content}>
    <Text style={styles.dataMebel}>{pesanan.product.nama}</Text>
    <Gap height={3}/>
    <Text style={styles.dataMebel}>Rp. {pesanan.product.harga}</Text>
    <Gap height={10}/>
    <Text style={styles.dataPembeli}>{ pesanan.product.namaMebel }</Text>
    <Gap height={3}/>
    <Text style={styles.dataPembeli}>No Hp : {pesanan.product.noHp}</Text>
    </View>
    
    <View style={styles.contentGambar}>
    <Image source={{uri: pesanan.product.gambar[0]}} style={styles.gambar}/>
    </View>
    </View>
    <View style={styles.containerStatus}>
    <Text style={styles.status}>{pesanan.product.status}</Text>
    </View>
    
    </TouchableOpacity>
  )
}

export default CardPesananCS

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pertama,
    paddingHorizontal: 20,
    paddingTop: 20,
    height: responsiveHeight(147),
    marginBottom: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  containerStatus: {
    backgroundColor: colors.kedua,
    borderRadius: 5,
    height: responsiveHeight(25),
    width: responsiveWidth(70),
    justifyContent: 'center',
    position: 'absolute',
    bottom: 23,
    right: 15,
  },
  status: {
    color: colors.keempat,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  container: {
  flexDirection: 'row',
  justifyContent: 'space-between'
  },
  dataMebel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(16, heightMobileUI),
    textTransform: 'capitalize',
    color: colors.keempat,
  },
  dataPembeli: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(15, heightMobileUI),
    color: colors.keempat,
  },
  gambar: {
    width: 72,
    height: 72,
    // marginLeft: 30,
    // marginTop: 3
  },
  content: {
    
  },
  contentGambar: {
  },
})