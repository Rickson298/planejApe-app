import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import AntDesign from '@expo/vector-icons/AntDesign';

import React from 'react';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#0e131b' },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#496985',
          drawerStyle: {
            backgroundColor: '#0e131b'
          }
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Page 1',
            drawerIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="two" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'Page 2'
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
