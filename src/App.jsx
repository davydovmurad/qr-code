import { Routes, Route, Navigate } from 'react-router-dom';
import QrCodeGenerator from './components/QrCode/QrCodeGenerator';
import QrCodeScanner from './components/QrCode/QrCodeScanner';
import Navigation from './components/Navigation/Navigation';
import CodeHistory from './components/History/CodeHistory';
import './App.css';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="generate" replace />} />
        <Route path="generate" element={<QrCodeGenerator />} />
        <Route path="scan" element={<QrCodeScanner />} />
        <Route
          path="generate_history"
          element={<CodeHistory type="generate" />}
        />
        <Route path="scan_history" element={<CodeHistory type="scan" />} />
      </Routes>
    </>
  );
}

export default App;
