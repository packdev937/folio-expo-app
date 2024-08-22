import React, {useState} from 'react'
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native'
import Icon from "@/components/common/Icon";

interface DropDownProps<T extends string> {
  initialValue: string,
  options: Record<T, string>
}

function DropDown<T extends string>({initialValue, options}: DropDownProps<T>) {
  const [expanded, setExpanded] = useState(false)
  const [selectedValue, setSelectedValue] = useState(initialValue)

  const handleSelectOption = (value: T) => {
    console.log(value)
    setSelectedValue(options[value])
    setExpanded(false)
  }

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.text}>{selectedValue}</Text>
        <Icon name={'chevron-down-outline'} size={20}/>
      </Pressable>
      {expanded && (
        <FlatList
          data={Object.keys(options) as T[]}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Pressable onPress={() => handleSelectOption(item)}>
              <Text style={styles.dropdownItem}>{options[item]}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    width: 110,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
  },
  dropdownItem: {
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})

export default DropDown
