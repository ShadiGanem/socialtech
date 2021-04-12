import WsService from '@test-assignment/ws-service';
import DiffTextService from '@test-assignment/diff-text';

class App {
  private _wsService: WsService;
  constructor() {
    this._wsService = new WsService();
    document.addEventListener('DOMContentLoaded', (event) => {
      this.init();
    });
  }

  init = () => {
    const textareaElem = document.querySelector<HTMLTextAreaElement>(
      '#textarea'
    );
    textareaElem.oninput = this.handleChangeText;
    this._wsService.worker.onmessage = (e) => {
      document.querySelector<HTMLTextAreaElement>('#textarea').value = e.data;
    };
  };

  handleChangeText = (e: any) => {
    const { buffer, array } = DiffTextService.setTextToSAB(e.data);
    this._wsService.sendMessage(buffer);
  };
}

export default new App();
