import React, { useState, useCallback } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Card, Switch, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import CategoryItem from '../../components/CategoryItem';
import CustomTextInput from 'app/components/CustomTextInput';
import SelectDropdown from 'react-native-select-dropdown';
import { DatePickerModal } from 'react-native-paper-dates';

import styles from './styles';

interface InputFieldProps {
  name: string;
  type: any;
  switch?: boolean;
  date?: Date;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const inputTypes = [
    'text',
    'date',
    'number',
    'checkbox'
  ]

  const [categoryList, setCategoryList] = useState([
    { title: 'Bulldozer' }
  ])

  const [inputFields, setInputFields] = useState<InputFieldProps[]>([
    { "name": "", "type": "default" },
    { "name": "", "type": "date" , "date": new Date('2022-12-14T22:47:05.626Z') },
    { "name": "", "type": "numeric" },
    { "name": "", "type": "checkbox", "switch": false }
  ]);
  const [open, setOpen] = useState<boolean>(false);

  const onToggleSwitch = (index: number) => {
    let data = [...inputFields];
    let prevValue = data[index]['switch'];
    data[index]['switch'] = !prevValue;
    setInputFields(data);
  }

  const handleFormChange = (index: number, value: string) => {
    let data = [...inputFields];
    data[index]['name'] = value;
    setInputFields(data);
  }

  const addFields = (inputType: any) => {
    let newfield: InputFieldProps = { name: '', type: inputType }
    if (inputType === 'checkbox') {
      newfield.switch = false;
    }
    if (inputType === 'date') {
      newfield.date = new Date();
    }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const onDismiss = () => {
    setOpen(false);
  };

  const onConfirm = (params: any, index: number) => {
    setOpen(false);
    let data = [...inputFields];
    data[index].date = params.date;
    setInputFields(data);
  };

  const handleAddNewItem = () => {
    const newFields = inputFields;
    setInputFields([...inputFields, ...newFields])
  }

  return (
    <ScrollView style={styles.container}>
      {
        categoryList.map((item, index) => {
          return <CategoryItem
                    key={index}
                    title={item.title}
                    handleAddItem={() => handleAddNewItem()}
                    showError={inputFields.length ? false : true}
                  />
        })
      }
      <Card style={{
        backgroundColor: 'white',
        padding: 10
      }}>
        {
          inputFields.map((input, index) => {
            return (
              <View key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                {
                  input.type === 'date' ?
                    <>
                      <TouchableOpacity
                        onPress={() => setOpen(true)}
                        style={{
                          flex: 0.95
                        }}
                      >
                        <TextInput
                          style={{
                            backgroundColor: '#EEEADE',
                            borderColor: 'grey',
                            borderWidth: 1,
                            borderRadius: 5,
                            marginTop: 6,
                            height: 54
                          }}
                          pointerEvents='none'
                          value={input.date?.toDateString()}
                        />
                      </TouchableOpacity>
                      <DatePickerModal
                        locale='en'
                        mode='single'
                        visible={open}
                        onDismiss={onDismiss}
                        date={input.date}
                        onConfirm={(params) => onConfirm(params, index)}
                      />
                    </> :
                    input.type === 'checkbox' ?
                      <Switch value={input?.switch} onValueChange={() => onToggleSwitch(index)} /> :
                      <CustomTextInput
                        index={index}
                        label='Name'
                        desc={input.name}
                        type={input.type}
                        handleChange={handleFormChange}
                      />
                }
                <Button icon='delete' onPress={() => removeFields(index)}>
                </Button>
              </View>
            )
          })
        }
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SelectDropdown
            data={inputTypes}
            onSelect={selectedItem => {
              let inputType = '';
              if (selectedItem === 'number') inputType = 'numeric'
              else if (selectedItem === 'text') inputType = 'default'
              else if (selectedItem === 'checkbox') inputType = 'checkbox'
              else inputType = 'date'
              addFields(inputType)
            }}
            buttonTextAfterSelection={() => 'ADD NEW FIELD'}
            rowTextForSelection={item => item}
            defaultButtonText='ADD NEW FIELD'
          />
          <Button icon='delete'>Remove</Button>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Dashboard;
