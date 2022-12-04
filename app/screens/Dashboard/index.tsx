import React, { useState } from 'react';
import { View, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import CategoryItem from '../../components/CategoryItem';
import CustomTextInput from 'app/components/CustomTextInput';

import styles from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const [categoryList, setCategoryList] = useState([
    { title: 'Bulldozer' }
  ])

  const [inputFields, setInputFields] = useState([
    { name: '' }
  ])

  const handleAddItem = (id: number) => {
    const newList = [...categoryList]
    setCategoryList(newList)
  }

  const handleFormChange = (index: number, value: string) => {
    let data = [...inputFields];
    data[index]['name'] = value;
    setInputFields(data);
 }

  const addFields = () => {
    let newfield = { name: '' }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  return (
    <ScrollView style={styles.container}>
      {
        categoryList.map((item, index) => {
          return <CategoryItem key={index} title={item.title} handleAddItem={() => handleAddItem(index)} />
        })
      }
      {
        inputFields.map((input, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <CustomTextInput
                index={index}
                label='Name'
                desc={input.name}
                handleChange={handleFormChange}
              />
              <Button icon='delete' onPress={() => removeFields(index)}>
              </Button>
            </View>
          )
        })
      }
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Button mode='outlined' onPress={() => addFields()}>Add New Field</Button>
        <Button icon='delete'>Remove</Button>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
