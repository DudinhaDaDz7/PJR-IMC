import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setmessageIMC] = useState("prencha seu peso e a sua altura");
    const [imc, setInt] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

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
                title="Qualquer Coisa"
            />

        </View>
    
    </View>
);
}