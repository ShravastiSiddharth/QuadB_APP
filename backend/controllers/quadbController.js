const axios = require('axios');
const Quadb = require('../models/Quadb');

const callAPI =async (req, res)=>{
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = Object.values(response.data).slice(0, 10); 
    
       
        await Quadb.deleteMany({});
    
       
        const dataToSave = tickers.map(ticker => ({
          name: ticker.name,
          last: ticker.last,
          buy: ticker.buy,
          sell: ticker.sell,
          volume: ticker.volume,
          base_unit: ticker.base_unit
        }));
    
        await Quadb.insertMany(dataToSave);
    
        res.json({ message: 'Data saved successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch and store data' });
      }
}

const fetchData = async (req,res) => {
    try {
        const data = await Quadb.find({});
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    
}

module.exports = {callAPI, fetchData}