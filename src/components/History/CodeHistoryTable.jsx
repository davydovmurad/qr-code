import { QRCodeSVG } from 'qrcode.react';

export default function CodeHistoryTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Text</th>
          <th>QR Code</th>
        </tr>
      </thead>

      <tbody>
        {data.map((text, id) => (
          <tr key={id}>
            <td>{text}</td>
            <td>
              <QRCodeSVG value={text} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
