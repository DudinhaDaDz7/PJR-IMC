import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Informe seu peso e a sua altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
}

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("SEU IMC É = ")
            setTextButton("CALCULAR NOVAMENTE")
            return
        }
    
        setImc(null)
        setTextButton("calcular")
        setMessageIMC("preencha Peso e Altura")
    }

    return(
        <View>
            <View>
                <Text>
                    Altura
                </Text>
            <TextInput
            onChangeText={setHeight}
            value = {height}
            placeholder="Ex 1.70"
            keyboardType="Numeric"
            />
            
            <Text>Peso</Text>
            <TextInput
            onChangeText={setWeight}
            value = {weight}
            placeholder="Ex. 85.766"
            keyboardType="Numeric"
            />

            <Button
                onPress={() => validationImc()}
                title={textButton}
            />

        </View>
            <ResultImc
                messageResultImc = {messageIMC}
                ResultImc = {imc}            
            />
    </View>
);
}