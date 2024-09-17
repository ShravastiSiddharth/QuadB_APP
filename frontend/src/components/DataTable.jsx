import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/DataTable.module.css';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quadb-app.onrender.com/api/quadb/get-data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.datatable}>
      <h1 className={styles.heading}>Best Price to Trade</h1>
      <table className={styles.tablebody}>
        <thead className={styles.tablehead}>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody className={styles.tablebody}>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td data-label="#"> {index + 1}</td>
              <td data-label="Platform">{item.name}</td>
              <td data-label="Last Traded Price" className={styles.priceSection}>
                ₹ {item.last}
              </td>
              <td data-label="Buy / Sell Price" className={styles.priceSection}>
                <span>Buy: ₹{item.buy}</span> / <span>Sell: ₹{item.sell}</span>
              </td>
              <td data-label="Difference" className={styles.difference}>
                -3.14%
              </td>
              <td data-label="Savings" className={styles.savings}>
                ₹ 83,498
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
