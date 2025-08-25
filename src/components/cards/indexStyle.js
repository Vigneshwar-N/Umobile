import { StyleSheet } from "react-native"
import { hs, vs } from "../../utility/responsive"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
    cardOneContainer: {
        marginVertical: vs(15),
    },
    bannerWrapper: {
        height: vs(20),
        borderTopRightRadius: hs(10),
        borderTopLeftRadius: hs(10),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    bannerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: hs(10),
    },
    card: {
        backgroundColor: '#F8F9FE',
        width: '100%',
        padding: hs(10),
        borderRadius: hs(15),
    },
    planRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: hs(20),
    },
    divider: {
        height: vs(1),
        width: '100%',
        backgroundColor: '#EFEEF3',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: hs(10),
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerBanner: {
        borderBottomLeftRadius: hs(15),
        borderBottomRightRadius: hs(15),
        backgroundColor: colors.purple,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    footerTextWrapper: {
        paddingVertical: vs(15),
        paddingHorizontal: hs(20),
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    iconLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    cardTwoContainer: {
        backgroundColor: colors.blue2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: hs(20),
        alignItems: "center",
        paddingVertical: vs(20)
    },

    cardFourWrapper: {
        justifyContent: "center",
        backgroundColor: colors.white,
        paddingHorizontal: hs(10),
        paddingVertical: vs(10),
        borderRadius: hs(8),
        shadowColor: colors.gray1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 4,
    },
    cardFourInnerRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    offerCard: {
        backgroundColor: colors.white,
        paddingHorizontal: hs(10),
        paddingVertical: vs(20),
        borderRadius: hs(8),
        shadowColor: colors.gray1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    offerCardLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    greenCircle: {
        backgroundColor: colors.green,
        borderRadius: 100,
        height: vs(25),
        width: hs(25),
        justifyContent: "center",
        alignItems: "center",
        top: vs(3)
    },
    tagIcon: {
        height: vs(16),
        width: hs(16),
    },
    offerRightIcon: {
        marginRight: hs(10),
    },

    cardFiveWrapper: {
        alignItems: "center",
        padding: hs(10),
    },
    cardFiveImage: {
        height: vs(50),
        width: hs(50),
    },
    sectionHeader:{
        paddingVertical:vs(5)
    }
})
