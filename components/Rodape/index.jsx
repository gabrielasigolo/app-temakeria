import {View, Text} from 'react-native'
import { styles } from './style'
import { Botao } from '../Botao'

export function Rodape(){
    <View>
        <Text style={styles.titulo}>
            Temaki Salmao
        </Text>
        <Text style={styles.descricao}>
            Nori, Arroz e Salmao. Acompanha Cebolinha Fresca
        </Text>
        <View style={styles.rodapePreco}>
            <Text style={styles.preco}>R$ 34.90</Text>
        </View>
    </View>
}