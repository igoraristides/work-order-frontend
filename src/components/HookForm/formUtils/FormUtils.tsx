export const FormUtils = {
  cellPhoneMask: {
    mask: "(99) 99999-9999",
    maskChar: "_",
  },
  phoneMask: {
    mask: "(99) 9999-9999",
    maskChar: "_",
  },
  cpfMask: {
    mask: "999.999.999-99",
    maskChar: "_",
  },
  RGMask: {
    mask: "9.999.999-9",
    maskChar: "_",
  },
  dateMask: {
    mask: "99/99/9999",
    maskChar: "_",
  }
}


export interface FormUtils {
  cellPhoneMask: Mask;
  phoneMask: Mask;
  cpfMask: Mask;
  RGMask: Mask;
  dateMask: Mask;
}


export interface Mask {
  mask: string;
  maskChar: string;
}