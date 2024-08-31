import HistoryService from '../../services/HistoryService';
import CodeHistoryTable from './CodeHistoryTable';
import style from './CodeHistory.module.css';

export default function CodeHistory({ type }) {
  let data = [];
  if (type === 'generate') {
    data = HistoryService.getGeneratedCodes();
  } else if (type === 'scan') {
    data = HistoryService.getScannedCodes();
  }

  return (
    <div className={style.container}>
      {data.length > 0 ? (
        <CodeHistoryTable data={data} />
      ) : (
        <h1>QR code list is empty</h1>
      )}
    </div>
  );
}
