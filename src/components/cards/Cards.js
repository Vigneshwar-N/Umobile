import { PureComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import images from '../../assets/imageMap';
import { colors } from '../../constants/colors';
import CustomText from '../customText';
import Spacer from '../spacer';
import { styles } from './styles';

/**
 * @typedef {Object} CustomCardsProps
 * @property {string} [title] - Optional title text for the card.
 * @property {boolean} [checkBox] - Whether to render a checkbox on the left.
 * @property {string} [leftIcon] - Key for the left icon image from imageMap.
 * @property {string} [leftIcon2] - Optional secondary left icon from imageMap.
 * @property {string} [name] - Main title/name displayed on the card.
 * @property {string} [rightIconNext] - Icon displayed on the right (next arrow).
 * @property {boolean} [disabled] - Whether the entire card is disabled.
 * @property {string} [rightIcon] - Optional right-side icon key.
 * @property {string} [nameDescription] - Small subtitle/description below `name`.
 * @property {string} [nameDescription2] - A second description displayed separately.
 * @property {string|number} [balance] - Balance value to show if applicable.
 * @property {string} [offerDescription] - Text inside the offer box if present.
 * @property {boolean} [end] - Flag to apply bottom radius/styling.
 * @property {Function} [onPress] - Callback when card is pressed.
 * @property {Object} [customStyle] - Extra custom styles merged into card.
 * @property {string} [selectedPayment] - Currently selected payment option name.
 */

export default class CustomCards extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isArrowDown: false,
        }
    }

    render() {
        const {
            title,
            checkBox,
            leftIcon,
            leftIcon2,
            name,
            rightIconNext,
            disabled,
            rightIcon,
            nameDescription,
            nameDescription2,
            balance,
            offerDescription,
            end,
            onPress,
            customStyle,
            selectedPayment
        } = this.props;

        const { isArrowDown } = this.state;

        let borderRadius = title == 'RECOMMENDED' || rightIcon == 'downArrow' && !end || rightIcon == 'up-arrow' ? 8 : 0
        let borderBottomLeftRadius = isArrowDown || end ? 8 : 0;
        let borderBottomRightRadius = isArrowDown || end ? 8 : 0;
        let borderBottomWidth = isArrowDown || end ? null : 1;
        let borderBottomColor = isArrowDown ? null : colors.gray;

        const renderContent = () => {
            return (
                <>
                    <View style={nameDescription2 ? styles.flexAlt : styles.flexRow}>
                        <View>
                            <View style={styles.rowAlign}>
                                {leftIcon && <Image resizeMode='contain' style={styles.leftImage} source={images[leftIcon]} />}
                                {checkBox && <View style={[
                                    styles.checkBox,
                                    selectedPayment == name ? styles.checkBoxSelected : null
                                ]} />}
                                {leftIcon2 && <Spacer width={20} />}
                                {leftIcon2 && <Image resizeMode='contain' style={styles.leftImage} source={images[leftIcon2]} />}
                                {nameDescription2 &&
                                    <>
                                        <Spacer width={20} />
                                        <CustomText fontSize={15} color={colors.black} fontWeight='700' text={name} />
                                    </>
                                }
                                <Spacer width={20} />
                                <View>
                                    {!nameDescription2 ? name && <CustomText fontSize={15} color={colors.black} fontWeight='700' text={name} /> : null}
                                    {!nameDescription2 ? nameDescription && <CustomText fontSize={15} color={colors.black} fontWeight='400' text={nameDescription} /> : null}
                                </View>
                            </View>

                            {nameDescription2 &&
                                <>
                                    <View style={styles.rowAlign}>
                                        {leftIcon && <Image resizeMode='contain' style={styles.leftImage} source={images[null]} />}
                                        {checkBox && <View style={styles.checkBoxNoBorder} />}
                                        <Spacer width={20} />
                                        {leftIcon2 && <Image resizeMode='contain' style={styles.leftImage} source={images[null]} />}
                                        <Spacer width={20} />
                                        <View>
                                            {balance &&
                                                <Text style={styles.balanceText}>
                                                    balance: <Text style={styles.balanceInner}>{balance}</Text>
                                                </Text>
                                            }
                                            {!balance && <CustomText fontWeight='400' fontSize={14} color={colors.gray} text={nameDescription} />}
                                            <CustomText fontSize={14} color={balance ? colors.gray : colors.green} fontWeight='400' text={nameDescription2} />
                                        </View>
                                    </View>
                                </>
                            }

                            {offerDescription &&
                                <>
                                    <Spacer height={15} />
                                    <View style={styles.offerBox}>
                                        <View style={styles.offerLeft}>
                                            <Image
                                                tintColor={colors.black}
                                                style={styles.tagIcon}
                                                source={images["tag"]}
                                            />
                                            <Spacer width={15} />
                                            <View style={styles.offerDescWrap}>
                                                <CustomText
                                                    color={colors.black}
                                                    fontWeight="700"
                                                    text={offerDescription}
                                                />
                                            </View>
                                        </View>
                                        <Spacer width={10} />
                                        <TouchableOpacity>
                                            <CustomText color={colors.blue} fontWeight="700" text="APPLY" />
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                        </View>

                        {rightIconNext && <Image resizeMode='contain' tintColor={colors.gray} style={styles.leftImage} source={images[rightIconNext]} />}
                        {rightIcon && <Image resizeMode='contain' style={styles.leftImage} source={images[rightIcon]} />}
                    </View>
                </>
            )
        }

        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                style={[
                    styles.cardContainer,
                    {
                        borderRadius,
                        borderBottomLeftRadius,
                        borderBottomRightRadius,
                        borderBottomWidth,
                        borderBottomColor,
                    },
                    customStyle
                ]}
            >
                {renderContent()}
            </TouchableOpacity>
        );
    }
}
