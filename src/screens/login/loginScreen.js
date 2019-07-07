import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";
import logo from '../../../assets/imgs/logo.png'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: '',
            dataSource: ''

        };
    }

    async componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                });

                console.log(this.state);

            })
            .catch((error) => {
                console.error(error);
            });

    }

    handleSubmit = () => {
        // do the things  

        const user = this.state;

        if (user.username && user.password) {
            this.props.navigation.navigate('Home', { user });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginView}>
                    <Image
                        style={styles.loginLogo}
                        source={logo}
                    />

                    <TextInput
                        style={styles.loginInput}
                        onChangeText={(username) => this.setState({ username })}
                        type="text"
                        placeholder='Username'
                        value={this.state.username} />
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={this.state.password} />

                    <TouchableOpacity
                        style={styles.loginBtnContainer}
                        onPress={this.handleSubmit} >

                        <Text style={styles.loginBtnText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20, 
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    loginView: { 
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'column', 
        marginTop: 100 
    },
    loginLogo: { width: 200, 
        height: 200 
    },
    loginInput: { 
        height: 40, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10, 
        padding: 10 
    },
    loginBtnContainer: {
        width: 300, 
        backgroundColor: '#2980b6', 
        paddingVertical: 15, 
        marginBottom: 10
    },
    loginBtnText: { 
        color: '#fff', 
        textAlign: 'center', 
        fontWeight: '700' 
    }
    
});


export default LoginScreen; 