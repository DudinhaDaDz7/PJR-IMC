import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setmessageIMC] = useState("Informe seu peso e a sua altura");
    const [imc, setInt] = useState(null)
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
            placeholder="Ex 1.70"
            keyboardType="Numeric"
            />
            
            <Text>Peso</Text>
            <TextInput
            placeholder="Ex. 85.766"
            keyboardType="Numeric"
            />

            <Button
                title={textButton}
            />

        </View>
    
    </View>
);
}