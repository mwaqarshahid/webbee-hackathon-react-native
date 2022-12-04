import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer';

import Login from 'app/screens/Login';
import Dashboard from 'app/screens/Dashboard';
import ForgotPassword from 'app/screens/ForgotPassword';

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Manage Categories"
          component={Dashboard}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Login}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
