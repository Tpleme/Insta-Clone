import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommuntyIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const EmptyScreen = () => {
    return (null)
}

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Feed");
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommuntyIcons name="home" color={color} size={26} />
                        ),
                    }} />

                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add");
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommuntyIcons name="plus-box" color={color} size={26} />
                        ),
                    }} />

                <Tab.Screen name="Profile" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Profile");
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommuntyIcons name="account-circle" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
