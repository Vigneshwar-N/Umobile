import { StyleSheet } from "react-native";
import { hs, vs } from "../../utility/responsive";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F8F9FE',
    paddingVertical: vs(23),
    shadowColor:'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,
    elevation: 4,
  },
  leftImage: {
    height: vs(25),
    width: hs(25),
    padding: 0,
  },
  checkBox: {
    height: vs(20),
    width: hs(20),
    padding: 0,
    borderRadius: 100,
    borderColor: colors.green,
    borderWidth: hs(1.5),
  },
  checkBoxSelected: {
    backgroundColor: colors.green,
  },
  checkBoxNoBorder: {
    height: vs(20),
    width: hs(20),
    borderRadius: 100,
    borderWidth: 0,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hs(20),
  },
  flexAlt: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: hs(20),
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: "400",
  },
  balanceInner: {
    color: colors.red,
  },
  offerBox: {
    padding: hs(20),
    borderColor: colors.purple,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%",
  },
  offerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  offerDescWrap: {
    flex: 1,
    justifyContent: "center",
  },
  tagIcon: {
    height: vs(20),
    width: hs(20),
  },
});
