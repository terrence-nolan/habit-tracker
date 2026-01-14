import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/breadcrumb-section.styles';

type BreadcrumbProps = {
  isActive?: boolean;
}

export function Breadcrumb({ isActive = false }: BreadcrumbProps) {
  const [active, setActive] = useState(isActive);
  
  function handleBreadcrumbTap() {
    setActive(!active);
  };

  return (
    <View>
      <Text>Title</Text>
      <TouchableOpacity
        onPress={handleBreadcrumbTap}
        style={[styles.container, active && styles.active]}
      >
        <View />
      </TouchableOpacity>
    </View>
  );
};