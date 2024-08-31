import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import HistoryService from '../../services/HistoryService';
import style from './QrCode.module.css';

export default function QrCodeScanner() {
  const [text, setText] = useState('');

  function onScanHandler(result) {
    const value = result[0].rawValue;
    setText(value);
    HistoryService.saveScannedCode(value);
  }

  return (
    <div className={style.container}>
      <h1>QR Code Scanner</h1>
      <Scanner
        styles={{ container: { width: 400 } }}
        components={{ finder: false }}
        onScan={onScanHandler}
        allowMultiple
      />
      <p>
        Text: <strong>{text}</strong>
      </p>
    </div>
  );
}
