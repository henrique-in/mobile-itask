import React,{useState, useEffect} from 'react';
import { Alert, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Network from 'expo-network';

import Header from '../../components/Header';
import * as S from './styles';


const QrCode = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  

  async function getMacAddress(){
    await Network.getMacAddressAsync().then(mac=>{
      Alert.alert(`Seu número é : ${mac}`)
    })
  }

  useEffect(()=>{
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  },[])

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    if (data == 'getmacaddress') 
    getMacAddress();
    else Alert.alert("QrCode Inválido!");
  };

  return (
    <S.Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <S.Header>
        <S.Title>Conectar com minha conta na web</S.Title>
      </S.Header>

      <S.BtnView>
        <S.ButtonBack onPress={() => navigation.navigate("Home")}>
          <S.LabelButton>Voltar</S.LabelButton>
        </S.ButtonBack>

        {scanned ? (
          <S.ButtonScanActive onPress={() => setScanned(false)}>
            <S.LabelButton>Scan</S.LabelButton>
          </S.ButtonScanActive>
        ) : (
          <S.ButtonScanInactive onPress={() => setScanned(false)}>
            <S.LabelButton>Scan</S.LabelButton>
          </S.ButtonScanInactive>
        )}
      </S.BtnView>
    </S.Container>
  );
}

export default QrCode;