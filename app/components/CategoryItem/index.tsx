import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './styles';

interface CategoryItemProps {
  title: string;
  handleAddItem: () => void;
  showError: boolean;
}

const CategoryItem: React.FC <CategoryItemProps> = (props) => {
  const { title, handleAddItem, showError } = props;

  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.buttonLayout} onPress={() => handleAddItem()}>
          <Text style={styles.buttonText}>ADD NEW ITEM</Text>
        </TouchableOpacity>
      </View>
      {
        showError &&
        <Text style={styles.noItemText}>No Items to display</Text>
      }
    </View>
  );
};

export default CategoryItem;
