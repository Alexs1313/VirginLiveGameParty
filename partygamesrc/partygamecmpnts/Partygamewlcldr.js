import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Partygamemnbg from './Partygamemnbg';

const { width, height } = Dimensions.get('window');

const Partygamewlcldr = () => {
  const partygameloaderHTML = `
    <!DOCTYPE html>
    <html>
      <head>
           <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=0.6"/>
        <meta charset="UTF-8" />
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
      
          }
          svg {
            width: 120px;
            height: 100px;
          }
        </style>
      </head>
      <body>
        <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" xml:space="preserve">
          <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animateTransform 
              attributeName="transform" 
              dur="1s" 
              type="translate" 
              values="0 15 ; 0 -15; 0 15" 
              repeatCount="indefinite" 
              begin="0.1"/>
          </circle>
          <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animateTransform 
              attributeName="transform" 
              dur="1s" 
              type="translate" 
              values="0 10 ; 0 -10; 0 10" 
              repeatCount="indefinite" 
              begin="0.2"/>
          </circle>
          <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
            <animateTransform 
              attributeName="transform" 
              dur="1s" 
              type="translate" 
              values="0 5 ; 0 -5; 0 5" 
              repeatCount="indefinite" 
              begin="0.3"/>
          </circle>
        </svg>
      </body>
    </html>
  `;

  return (
    <Partygamemnbg>
      <WebView
        originWhitelist={['*']}
        source={{ html: partygameloaderHTML }}
        style={styles.partygamewebview}
      />
    </Partygamemnbg>
  );
};

const styles = StyleSheet.create({
  partygamewebview: {
    width: width,
    height: height,
    backgroundColor: 'transparent',
  },
});

export default Partygamewlcldr;
