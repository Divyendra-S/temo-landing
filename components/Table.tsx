import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const Table = () => {
  const [data, setData] = useState([
    
    [1, 'Item 1', 'Category A', 'Description 1', '$9.99', 'In Stock', 'Add to Cart'],
    [2, 'Item 2', 'Category B', 'Description 2', '$14.99', 'Out of Stock', 'Notify Me'],
    [3, 'Item 3', 'Category A', 'Description 3', '$7.99', 'In Stock', 'Add to Cart'],
    [4, 'Item 4', 'Category C', 'Description 4', '$19.99', 'In Stock', 'Add to Cart'],
    [5, 'Item 5', 'Category B', 'Description 5', '$11.99', 'Out of Stock', 'Notify Me'],
    [6, 'Item 6', 'Category A', 'Description 6', '$5.99', 'In Stock', 'Add to Cart'],
    [7, 'Item 7', 'Category C', 'Description 7', '$15.99', 'In Stock', 'Add to Cart'],
  ]);

  const columnVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      className="table-container mt-2 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '764px',
        height: '336px',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "white"
      }}
    >
        <div className='px-4 py-[10px] text-[13px] leading-4 border-b flex justify-start mb-2 border-[#70451a12] '>Top customers</div>
      <table className='  px-4 py-4 text-[13px] border-b border-[#70451a12] '>
      <thead>
          <tr>
            <th style={{ fontWeight: 'normal', transform: 'translateX(10px)' }}>ID</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Item</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Category</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Description</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Price</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Status</th>
            <th style={{ fontWeight: 'normal', transform: 'translateX(2px)' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0 ,y:8 }}
              animate={{ opacity: 1 ,y:0}}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            >
              {row.map((cell, cellIndex) => (
                <motion.td
                  key={cellIndex}
                  initial={{ opacity: 0,y:8 }}
              animate={{ opacity: 1,y:0 }}
                  transition={{
                    duration: 0.2,
                    delay: cellIndex * 0.1,
                  }}
                  style={{
                    opacity: 0,
                  }}
                  className=' py-[6px] pl-[16px] text-[#666663] '
                >
                  {cell}
                </motion.td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;