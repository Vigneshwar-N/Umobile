import { Component } from 'react';
import { StyleSheet, TextInput, View, FlatList } from 'react-native';
import Button from '../customButton';
import CustomText from '../customText';
import { colors } from '../../constants/colors';
import Spacer from '../spacer';
import { vs, hs } from '../../utility/responsive';

/**
 * @typedef {Object} CustomTextInputProps
 * @property {number} [type=1] - Input type (1: number input, 2: search input).
 * @property {string} [label] - Label text displayed above input.
 * @property {number} [labelFontSize=10] - Font size for label.
 * @property {string} [labelColor=colors.gray] - Label color.
 * @property {string} [textColor=colors.white] - Text/Input text color.
 * @property {string} [value] - Current input value.
 * @property {keyof typeof import('../../assets/imageMap').default} [image] - Image key for button.
 * @property {() => void} [onImagePress] - Callback when image button is pressed.
 * @property {(text: string) => void} [onChangeText] - Callback when text input changes.
 * @property {Array} [FlatListData] - Data for filter FlatList.
 * @property {(item: any) => void} [onPress] - Callback for filter option press.
 * @property {string|number} [selectedSpeed] - Currently selected speed in filter.
 * @property {boolean} [isFilter] - Whether filter UI is active.
 * @property {() => void} [handleFilter] - Callback when filter button pressed.
 * @property {() => void} [handleFilterClose] - Callback when closing filter chips.
 * @property {() => void} [handleSearch] - Callback when search icon pressed.
 */

/** @extends {Component<CustomTextInputProps>} */
export default class CustomTextInput extends Component {
  render() {
    const {
      type = 1,
      label,
      labelFontSize = 10,
      image,
      labelColor = colors.gray,
      textColor = colors.white,
      value,
      onImagePress,
      onChangeText,
      FlatListData,
      onPress,
      selectedSpeed,
      isFilter,
      handleFilter,
      handleFilterClose,
      handleSearch,
    } = this.props;

    const numberInput = () => (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <CustomText
            fontSize={labelFontSize}
            textAlign="left"
            color={labelColor}
            text={label}
          />
          <Spacer height={10} />
          <TextInput
            maxLength={10}
            onChangeText={onChangeText}
            keyboardType="numeric"
            value={value}
            placeholderTextColor={textColor}
            style={[
              styles.textInputCommon,
              {
                color: textColor,
                fontSize: vs(15),
              },
            ]}
            placeholder=""
            cursorColor={colors.white}
          />
        </View>
        <Button
          onImagePress={onImagePress}
          imageBorderRadius={0}
          imageBgColor={colors.darkGray}
          imageHeight={30}
          imageWidth={30}
          imagePadding={0}
          image={image}
        />
      </View>
    );

    const searchInput = () => (
      <>
        {!isFilter ? (
          <View style={styles.searchWrapper}>
            <View style={styles.searchInputBox}>
              <TextInput
                placeholderTextColor={colors.gray}
                placeholder="search for plan"
                style={styles.searchTextInput}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                autoCapitalize="none"
              />
              <Button
                onImagePress={handleSearch}
                image="search"
                imageBgColor={colors.white}
                imageBorderRadius={0}
                imageHeight={18}
                imageWidth={18}
                imagePadding={0}
              />
            </View>
            <Spacer width={10} />
            <Button
              onImagePress={handleFilter}
              image="filter"
              imageBorderRadius={12}
              imageBgColor={colors.white}
              imageWidth={18}
              imageHeight={18}
              imagePadding={11.7}
              borderWidth={1}
              borderColor={colors.gray1}
            />
          </View>
        ) : (
          <View style={styles.filterWrapper}>
            <View>
              <Button
                onImagePress={handleFilterClose}
                type={1}
                image="close"
                imageBorderRadius={12}
                imageBgColor={colors.blue}
                imageWidth={18}
                imageHeight={18}
                imagePadding={11.7}
              />
            </View>
            <Spacer width={10} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={FlatListData}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.filterButton}>
                    <Button
                      textBtnBgColor={
                        selectedSpeed == item.speed ? colors.black : colors.white
                      }
                      textColor={
                        selectedSpeed == item.speed
                          ? colors.white
                          : colors.black
                      }
                      onPress={() => onPress(item.speed)}
                      text={item.speed}
                      type={2}
                    />
                  </View>
                );
              }}
            />
          </View>
        )}
      </>
    );

    const all_inputs = {
      1: numberInput,
      2: searchInput,
    };

    return <>{all_inputs[type]()}</>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: hs(5),
    paddingHorizontal: hs(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGray,
    paddingVertical: vs(15),
    width: '100%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  inputWrapper: {
    flex: 1,
    marginRight: hs(10),
  },
  textInputCommon: {
    padding: 0,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  searchInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: vs(10),
    paddingHorizontal: hs(15),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.gray1,
    flex: 1,
  },
  searchTextInput: {
    color: colors.black,
    padding: 0,
    flex: 1,
    marginRight: hs(10),
    fontSize: 14.5,
  },
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  filterButton: {
    marginRight: hs(10),
  },
});
