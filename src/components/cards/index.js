import React, { PureComponent } from 'react'
import { TouchableOpacity, View, SectionList, Image } from 'react-native'
import { colors } from '../../constants/colors'
import CustomText from '../customText'
import Button from '../customButton'
import Spacer from '../spacer'
import images from '../../assets/imageMap';
import { styles } from './indexStyle'


/**
 * @typedef {Object} CardsProps
 * @property {number} [type=1] - The card type to render. Currently supports:
 * @property {Array} [data] - Data to render inside cards
 * @property {function} [onRefresh] - SectionList refresh handler
 * @property {boolean} [refreshing] - SectionList refreshing state
 * @property {function} [handleActiveTabChange] - Changes active tab on scroll
 * @property {function} [onPress] - Button / Card press handler
 * @property {string|number} [number] - Phone number for display
 * @property {string|number} [price] - Amount for display
 * @property {string} [textBtnBgColor] - Button background color
 * @property {string} [textColor] - Button text color
 * @property {string} [cardTwoText2] - Secondary text color for card 2
 * @property {boolean} [disabled] - Button disabled state
 * @property {string} [text] - Title text
 * @property {string} [desc] - Description text
 * @property {string} [image] - Image key for display
 * @property {string} [backgroundColor] - Background color of the button
 */
/** @extends {React.PureComponent<CardsProps>} */

export default class Cards extends PureComponent {
    constructor(props) {
        super(props);
        this.sectionListRef = React.createRef();
        this.isTabPress = false;
    }
    scrollToSection = (title) => {
        const { data } = this.props;
        this.isTabPress = true;

        const sections = Object.values(
            (data || []).reduce((acc, item) => {
                if (!acc[item.category]) {
                    acc[item.category] = { title: item.category, data: [] };
                }
                acc[item.category].data.push(item);
                return acc;
            }, {})
        );

        const index = sections.findIndex((s) => s.title === title);
        if (index !== -1 && this.sectionListRef.current) {
            this.sectionListRef.current.scrollToLocation({
                sectionIndex: index,
                itemIndex: 0,
                animated: true,
                viewPosition: 0, // top of the list
            });
        }
        setTimeout(() => {
            this.isTabPress = false;
        }, 300);
    };
    render() {
        const {
            type = 1,
            data,
            onRefresh,
            refreshing,
            handleActiveTabChange,
            onPress,
            number,
            price,
            textBtnBgColor = colors.gray2,
            textColor = colors.gray,
            cardTwoText2 = colors.black,
            disabled,
            text,
            desc,
            image,
            backgroundColor
        } = this.props


        const sections = Object.values(
            (data || []).reduce((acc, item) => {
                if (!acc[item.category]) {
                    acc[item.category] = { title: item.category, data: [] };
                }
                acc[item.category].data.push(item);
                return acc;
            }, {})
        );

        const VerticalText = ({ text1 = text1, text2 = text2, isIcon = isIcon }) => {
            return (
                <>
                    {!isIcon ? (
                        <View>
                            <CustomText
                                fontSize={15}
                                fontWeight="700"
                                color={colors.black}
                                text={text1}
                            />
                            <CustomText
                                fontSize={14.5}
                                fontWeight="400"
                                color={colors.gray}
                                text={text2}
                            />
                        </View>
                    ) : (
                        <View style={styles.iconRow}>
                            <View>
                                <View style={styles.iconLabelRow}>
                                    <CustomText
                                        fontSize={15}
                                        fontWeight="700"
                                        color={colors.black}
                                        text={text1}
                                    />
                                    <Spacer width={6} />
                                    <Button
                                        type={1}
                                        imagePadding={0}
                                        borderWidth={0}
                                        imageBorderRadius={0}
                                        imageHeight={19}
                                        imageWidth={19}
                                        imageBgColor={'#F8F9FE'}
                                        image={'next'}
                                    />
                                </View>
                                <CustomText
                                    fontWeight="400"
                                    fontSize={14.5}
                                    color={colors.gray}
                                    text={text2}
                                />
                            </View>
                        </View>
                    )}
                </>
            )
        }

        const cardOne = () => {
            return (
                <>
                    <SectionList
                        ref={this.sectionListRef}
                        stickySectionHeadersEnabled={false}
                        showsVerticalScrollIndicator={false}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold:50
                        }}
                        onViewableItemsChanged={({ viewableItems }) => {
                            if (this.isTabPress) return;
                            const firstVisible = viewableItems.find(v => v.section);
                            if (firstVisible) {
                                handleActiveTabChange(firstVisible.section.title)
                            }
                        }}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        sections={sections}
                        renderSectionHeader={({ section }) => (
                            <View style={styles.sectionHeader}>
                                <CustomText
                                    fontSize={16}
                                    fontWeight="700"
                                    color={colors.black}
                                    text={section.title}
                                />
                            </View>
                        )}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.cardOneContainer}>
                                    {(item?.isLastRecharged || item?.onlyForYou?.label != '') && (
                                        <View
                                            style={[
                                                styles.bannerWrapper,
                                                {
                                                    backgroundColor: !item?.onlyForYou?.label != ''
                                                        ? colors.gray2
                                                        : colors.purple,
                                                },
                                            ]}
                                        >
                                            <View style={styles.bannerContent}>
                                                <CustomText
                                                    fontSize={12}
                                                    fontWeight="700"
                                                    color={colors.white}
                                                    text={
                                                        (item?.isLastRecharged
                                                            ? 'LAST RECHARGED'
                                                            : item?.onlyForYou?.label)
                                                    }
                                                />
                                            </View>
                                        </View>
                                    )}

                                    <TouchableOpacity
                                        onPress={() => { onPress(item?.price) }}
                                        style={[
                                            styles.card,
                                            (item?.isLastRecharged || item?.onlyForYou?.label != '') && {
                                                borderTopLeftRadius: 0,
                                            },
                                            item?.onlyForYou?.label != '' && {
                                                borderColor: colors.purple,
                                                borderWidth: 1,
                                                borderBottomLeftRadius: 0,
                                                borderBottomRightRadius: 0,
                                            },
                                        ]}
                                    >
                                        <Spacer height={15} />

                                        <View style={styles.planRow}>
                                            <View style={styles.centerItem}>
                                                <VerticalText text1={`₹ ${item?.price}`} text2={'Unlimited'} />
                                            </View>
                                            <View>
                                                <VerticalText text1={item?.speed} text2={'Speed'} />
                                            </View>
                                            <VerticalText isIcon text1={item?.validity} text2={'Validity'} />
                                        </View>

                                        <Spacer height={20} />
                                        <View style={styles.divider} />
                                        <Spacer height={20} />

                                        <View style={styles.bottomRow}>
                                            <View style={styles.logoRow}>
                                                <Button
                                                    type={1}
                                                    imagePadding={0}
                                                    borderWidth={0}
                                                    imageBorderRadius={0}
                                                    imageHeight={25}
                                                    imageWidth={25}
                                                    imageBgColor={colors.white}
                                                    image={'xtreamLogo'}
                                                />
                                                <Spacer width={10} />
                                                <CustomText
                                                    fontSize={16}
                                                    color={colors.black}
                                                    text="Xstream Premium"
                                                />
                                            </View>
                                            <CustomText fontSize={16} color={colors.gray} text="view details" />
                                        </View>

                                        <Spacer height={5} />
                                    </TouchableOpacity>

                                    {item?.onlyForYou?.label != '' && (
                                        <View style={styles.footerBanner}>
                                            <View style={styles.footerTextWrapper}>
                                                <CustomText
                                                    fontSize={14}
                                                    fontWeight="700"
                                                    color={colors.white}
                                                    text={item?.onlyForYou?.description ?? 'Get this plan'}
                                                />
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        }} />
                </>
            )
        }

        const cardTwo = () => {
            return (
                <View>
                    <View style={[styles.cardTwoContainer, { backgroundColor, borderTopWidth: backgroundColor ? 2 : 0, borderTopColor: backgroundColor ? "#D8DCE5" : null }]}>
                        <View>
                            <CustomText textAlign='left' fontWeight='700' fontSize={15} color={colors.black} text={`₹ ${price}`} />
                            <Spacer height={5} />
                            <CustomText textAlign='left' fontWeight='500' fontSize={12} color={cardTwoText2} text='VIEW DETAILS' />
                        </View>
                        <Button disabled={disabled} onPress={onPress} paddingHorizontal={15} fontWeight={'700'} paddingVertical={15} textBtnBgColor={textBtnBgColor} textColor={textColor} borderRadius={8} type={2} text={'PAY NOW'} />
                    </View>
                </View>
            )
        }

        const cardFour = () => {
            return (
                <View>
                    <Spacer height={8} />
                    <View style={styles.cardFourWrapper}>
                        <View style={styles.cardFourInnerRow}>
                            <CustomText fontSize={16} color={colors.black} fontWeight='700' text={"amount payable"} />
                            <CustomText fontSize={16} color={colors.black} fontWeight='700' text={`₹ ${price}`} />
                        </View>
                        <Spacer height={5} />
                        <CustomText fontSize={12} color={colors.gray} fontWeight='700' text={`number · ${number}`} />
                    </View>

                    <Spacer height={20} />
                    <View style={styles.offerCard}>
                        <View style={styles.offerCardLeft}>
                            <View style={styles.greenCircle}>
                                <Image resizeMode='contain' style={styles.tagIcon} source={images["tag"]} />
                            </View>
                            <Spacer width={10} />
                            <CustomText fontSize={15} color={colors.black} fontWeight='700' text={`select offers, save more`} />
                        </View>
                        <View style={styles.offerRightIcon}>
                            <Button imageBgColor={colors.white} image={`next`} imageBorderRadius={0} imagePadding={0} imageHeight={25} imageWidth={25} />
                        </View>
                    </View>

                    <Spacer height={20} />
                    <CustomText color={colors.black} fontSize={14} fontWeight='600' text='Select payment options' />
                    <Spacer height={20} />
                </View>
            )
        }

        const cardFive = () => {
            return (
                <View style={styles.cardFiveWrapper}>
                    <CustomText color={colors.black} fontSize={13} fontWeight='700' text={text} />
                    <Spacer height={5} />
                    <CustomText color={colors.gray} fontSize={13} fontWeight='600' text={desc} />
                    <Spacer height={5} />
                    <Image resizeMode='contain' style={styles.cardFiveImage} source={images[image]} />
                    <Spacer height={20} />
                </View>
            )
        }

        const all_Cards = {
            1: cardOne,
            2: cardTwo,
            6: cardFour,
            7: cardFive
        }

        return <>{all_Cards[type]()}</>
    }
}
