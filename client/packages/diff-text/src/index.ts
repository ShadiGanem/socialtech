import {
  utf16StringToSharedArrayBuffer,
  sharedArrayBufferToUtf16String,
} from './helpers';

const setTextToSAB = (str: string) => {
  return utf16StringToSharedArrayBuffer(str);
};

const getTextFromBuffer = (buf: Iterable<number>) => {
  return sharedArrayBufferToUtf16String(buf);
};

export default { setTextToSAB, getTextFromBuffer };
