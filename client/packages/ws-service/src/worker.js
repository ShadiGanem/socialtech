const WS_STATE = {
  CONNECTING: 0,
  OPENED: 1,
  CLOSING: 2,
  CLOSED: 3,
};

const ws = new WebSocket('ws://localhost:8080');

function sharedArrayBufferToUtf16String(buf) { //
	const array = new Uint16Array(buf);
	return String.fromCharCode.apply(null, array);
}

onmessage = function (e) {
  if (ws.readyState === WS_STATE.OPENED) {
    const sharedArray = new Uint16Array(e.data);
    const message = sharedArrayBufferToUtf16String(sharedArray);
    ws.send(message);
  }
};
ws.onmessage = (e) => {
  postMessage(e.data);
};
