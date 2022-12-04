import React from 'react';
import {
  View,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

const CustomDrawer = (props: (JSX.IntrinsicAttributes & ScrollViewProps & { children: React.ReactNode; } & React.RefAttributes<ScrollView>) | (JSX.IntrinsicAttributes & { state: DrawerNavigationState<ParamListBase>; navigation: DrawerNavigationHelpers; descriptors: DrawerDescriptorMap; })) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
