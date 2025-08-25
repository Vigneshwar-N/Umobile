import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { hs, vs } from "../../utility/responsive";

export const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  topInputWrapper: {
    paddingHorizontal: hs(20),
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.blue2,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: hs(20),
  },
  swipeIndicator: {
    height: vs(7),
    width: hs(55),
    backgroundColor: colors.blue1,
    borderRadius: 50,
    alignSelf: 'center',
    paddingHorizontal: hs(20),
  },
  tabsContentContainer: {
    borderBottomWidth: 2,
    borderColor: colors.blue1,
  },
  tabPressable: {
    width: '100%',
  },
  activeTabIndicator: {
    height: vs(3),
    backgroundColor: colors.black,
  },
});