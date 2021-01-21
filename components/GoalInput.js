import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [textEntered, setTextEntered] = useState("");

    textInputHandler = (textEntered) => {
        setTextEntered(textEntered);
    };

    clearText = () => {
        setTextEntered("");
    }

    addTextHandler = () => {
        props.addTextHandler(textEntered);
        clearText();
    };

    cancelAddHandler = () => {
        props.onCancel();
        clearText();
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput placeholder="Enter text Here !!!"
                    style={styles.input}
                    value={textEntered}
                    onChangeText={this.textInputHandler} />
                <View style={styles.bottonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addTextHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={cancelAddHandler} />
                    </View>

                </View>

            </View>
        </Modal>


    );
};

const styles = StyleSheet.create(
    {
        inputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            width: '80%'
            , borderColor: "black"
            , borderWidth: 1
            , padding: 10
            , marginBottom: 10
        },
        bottonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '60%'
        },
        button: {
            width: '40%'
        }
    }
);

export default GoalInput;