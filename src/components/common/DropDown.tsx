import React, {useState, useRef} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from "@/components/common/Icon";

interface DropDownProps<T extends string> {
  initialValue: string;
  options: Record<T, string>;
}

function DropDown<T extends string>({initialValue, options}: DropDownProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [dropdownPosition, setDropdownPosition] = useState({top: 0, left: 0, width: 0});

  const buttonRef = useRef<View>(null);

  const handleSelectOption = (value: T) => {
    setSelectedValue(options[value]);
    setExpanded(false);
  };

  const handlePress = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      setDropdownPosition({top: y + height, left: x, width});
      setExpanded(!expanded);
    });
  };

  return (
    <View>
      <Pressable ref={buttonRef} style={styles.container} onPress={handlePress}>
        <Text style={styles.text}>{selectedValue}</Text>
        <Icon name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'} size={20}/>
      </Pressable>
      {expanded && (
        <Modal visible={expanded} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View style={styles.modalBackdrop}>
              <View
                style={[
                  styles.dropdownContainer,
                  {
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                    width: dropdownPosition.width,
                  },
                ]}
              >
                <FlatList
                  data={Object.keys(options) as T[]}
                  keyExtractor={(item) => item}
                  renderItem={({item}) => (
                    <Pressable key={item} onPress={() => handleSelectOption(item)}>
                      <Text style={styles.dropdownItem}>{options[item]}</Text>
                    </Pressable>
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    width: 110,
    borderWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
  },
  dropdownItem: {
    marginVertical: 8,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 0.5,
    maxHeight: 250,
    zIndex: 1000,
  },
});

export default DropDown;
