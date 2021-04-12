function sharedArrayBufferToUtf16String(buf: Iterable<number>) {
	const array = new Uint16Array(buf);
	return String.fromCharCode.apply(null, array);
}

function utf16StringToSharedArrayBuffer(str: string) {
  const bytes = str.length * 2;
  const buffer = new SharedArrayBuffer(bytes);
  const arrayBuffer = new Uint16Array(buffer);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    arrayBuffer[i] = str.charCodeAt(i);
  }
  return { array: arrayBuffer, buffer: buffer };
}

export { sharedArrayBufferToUtf16String, utf16StringToSharedArrayBuffer };