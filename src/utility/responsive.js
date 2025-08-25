// responsive.js
import { Dimensions, PixelRatio } from "react-native";

// Get device window dimensions at runtime
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Use current device as base automatically
const BASE_WIDTH = SCREEN_WIDTH;
const BASE_HEIGHT = SCREEN_HEIGHT;

/**
 * Scale based on device width
 */
export const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;

/**
 * Scale font size for readability
 */
export const fs = (size) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Scale based on height (vertical scaling)
 */
export const vs = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

/**
 * Moderate scaling (less aggressive)
 */
export const hs = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
