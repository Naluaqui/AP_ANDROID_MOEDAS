import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './App.styles';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { currencies } from './src/constants/currencies'
import { Input } from './src/components/input';
import { ResultCard } from './src/components/ResultCard';
import { exchangeRateApi } from './src/services/api';


export default function App() {

  async function fetchExchangeRate(){
    const data = await exchangeRateApi('BRL')
    console.log(data)
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>

        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>
              Conversor de Moedas
              </Text>
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
              </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>
              De:
            </Text>
            <View style={styles.currencyGrid}>

              {currencies.map( currency => (
                <Button variant='primary'
                key={(currency.code)}
                currency={currency}
                >
                </Button>
              ))}

            </View>
            <Input label="Valor:"/>

              <TouchableOpacity style={styles.swapButton}>
                <Text style={styles.swapButtonText}>
                  ↑↓
                </Text>
              </TouchableOpacity>

              <Text style={styles.label}>
                Para:
              </Text>
              <View style={styles.currencyGrid}>

                {currencies.map( currency => (
                <Button variant='secondary'
                key={(currency.code)}
                currency={currency}
                >
                </Button>
              ))}

              </View>
          </View>

          <TouchableOpacity style={styles.convertButton}
          onPress={fetchExchangeRate}
          >
            <Text style={styles.swapButtonText}>
              Converter
              </Text>
          </TouchableOpacity>

          <ResultCard></ResultCard>
        </View>
      
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

