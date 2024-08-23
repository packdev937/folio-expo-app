import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {CameraType, CameraView} from "expo-camera";

interface QrScanScreenProps {
}

function QrScanScreen({}: QrScanScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>QR코드 스캔하기</Text>
        <Text style={styles.subText}>지원하지 않는 브랜드라면 웹사이트를 열어드려요.</Text>
      </View>
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          // onBarcodeScanned={}
        />
        <View style={styles.overlay}>
          <View style={styles.borderTopLeft}/>
          <View style={styles.borderTopRight}/>
          <View style={styles.borderBottomLeft}/>
          <View style={styles.borderBottomRight}/>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{uri: 'https://img.icons8.com/material-outlined/24/000000/add-image.png'}}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>사진 앱에서 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  cameraContainer: {
    width: '80%',
    height: '40%',
    borderRadius: 20,
    borderWidth: 4,  // 카메라 주위에 테두리 추가
    borderColor: '#fff',  // 테두리 색상
    overflow: 'hidden',
    marginVertical: 50,
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
  // 테두리가 카메라 위에 위치할 수 있도록
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    margin: 60,
    borderRadius: 5,
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderColor: '#fff',
  },
  borderTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    margin: 60,
    borderRadius: 5,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderColor: '#fff',
  },
  borderBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 50,
    margin: 60,
    borderRadius: 5,
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderColor: '#fff',
  },
  borderBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    margin: 60,
    borderRadius: 5,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default QrScanScreen;
