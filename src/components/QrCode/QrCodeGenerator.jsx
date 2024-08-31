import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import HistoryService from '../../services/HistoryService';
import style from './QrCode.module.css';

export default function QrCodeGenerator() {
  const [text, setText] = useState('');
  const [resultText, setResultText] = useState('');
  const [isShowingQRCode, setIsShowingQRCode] = useState(false);

  function generateQRCode() {
    console.log('Text: ', text);
    setResultText(text);
    HistoryService.saveGeneratedCode(text);
    setText('');
    setIsShowingQRCode(true);
  }

  return (
    <div className={style.container}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={style.text_input}
        placeholder="Input text..."
      />
      <button
        type="button"
        onClick={generateQRCode}
        className={style.button_generate_qr_code}
      >
        Generate QR code
      </button>

      {isShowingQRCode && (
        <>
          <QRCodeSVG value={resultText} size={256} />
          <p>
            Text: <strong>{resultText}</strong>
          </p>
        </>
      )}
    </div>
  );
}
