
import workerPath from 'file-loader?name=[name].js!./worker.js';
class WsConnection {
  worker: Worker;
  constructor() {
    this.worker = new Worker(workerPath);
  }

  sendMessage = (message: any) => {
    this.worker.postMessage(message);
  };
}

export default WsConnection;

