import './globals.css';

export const metadata = {
  title: 'DREI — Decent Rowing Education ID',
  description: 'Structured coaching education from Olympic champions and world-class coaches.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
