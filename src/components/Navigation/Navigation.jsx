import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={style.container}>
      <Link to="/generate">QR Code Generate</Link>
      <Link to="/scan">QR Code Scan</Link>
      <Link to="/generate_history">Generate History</Link>
      <Link to="/scan_history">Scan History</Link>
    </nav>
  );
}
