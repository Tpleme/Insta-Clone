import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        
    }

    render() {
        return (
            <View>
                <textInput
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <textInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <textInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={() => this.onSignUp()}
                    title = "Sign Up"
                />
            </View>
        )
    }
}

export default Register
