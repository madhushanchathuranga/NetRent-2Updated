import React, { useState } from 'react';
import { arrowLeftWhiteIcon, arrowRightWhiteIcon } from '../../assets/icons';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      // Show all pages if total pages are 4 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <div
            key={i}
            className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
              i === currentPage ? 'bg-[#4BAE4F] text-black' : 'bg-[#F7F7F7] text-[#4BAE4F]'
            }`}
            onClick={() => {
              setCurrentPage(i);
              onPageChange(i);
            }}
          >
            {i}
          </div>
        );
      }
    } else {
      // Show dynamic pages based on current page
      if (currentPage <= 3) {
        // Show first 3 pages and last 2 pages
        for (let i = 1; i <= 3; i++) {
          pages.push(
            <div
              key={i}
              className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
                i === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
              }`}
              onClick={() => {
                setCurrentPage(i);
                onPageChange(i);
              }}
            >
              {i}
            </div>
          );
        }
        pages.push(<div key="ellipsis1" className='flex items-center h-full'>...</div>);
        for (let i = totalPages - 1; i <= totalPages; i++) {
          pages.push(
            <div
              key={i}
              className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
                i === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
              }`}
              onClick={() => {
                setCurrentPage(i);
                onPageChange(i);
              }}
            >
              {i}
            </div>
          );
        }
      } else if (currentPage >= totalPages - 2) {
        // Show first 2 pages and last 3 pages
        for (let i = 1; i <= 2; i++) {
          pages.push(
            <div
              key={i}
              className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
                i === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
              }`}
              onClick={() => {
                setCurrentPage(i);
                onPageChange(i);
              }}
            >
              {i}
            </div>
          );
        }
        pages.push(<div key="ellipsis2" className='flex items-center h-full'>...</div>);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(
            <div
              key={i}
              className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
                i === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
              }`}
              onClick={() => {
                setCurrentPage(i);
                onPageChange(i);
              }}
            >
              {i}
            </div>
          );
        }
      } else {
        // Show first page, current page - 1, current page, current page + 1, and last page
        pages.push(
          <div
            key={1}
            className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
              1 === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
            }`}
            onClick={() => {
              setCurrentPage(1);
              onPageChange(1);
            }}
          >
            {1}
          </div>
        );
        pages.push(<div key="ellipsis3" className='flex items-center h-full'>...</div>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <div
              key={i}
              className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
                i === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
              }`}
              onClick={() => {
                setCurrentPage(i);
                onPageChange(i);
              }}
            >
              {i}
            </div>
          );
        }
        pages.push(<div key="ellipsis4" className='flex items-center h-full'>...</div>);
        pages.push(
          <div
            key={totalPages}
            className={`size-[26px] rounded-full cursor-pointer flex items-center justify-center ${
              totalPages === currentPage ? 'bg-[#EEEEEE] text-black' : 'bg-[#F7F7F7] text-[#A3A3A3]'
            }`}
            onClick={() => {
              setCurrentPage(totalPages);
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </div>
        );
      }
    }

    return pages;
  };

  return (
    <div className='w-full flex flex-row items-center text-[10px] justify-between gap-3 py-2'>
      <div
        className='size-[26px] rounded-full bg-[#F7F7F7] flex items-center justify-center cursor-pointer'
        onClick={handlePrevious}
      >
        <img src={arrowLeftWhiteIcon} alt='arrow left' className='w-[4px] h-[6px] invert filter grayscale brightness-75' />
      </div>

      <div className='flex flex-row gap-2 items-center'>{renderPageNumbers()}</div>

      <div
        className='size-[26px] rounded-full bg-[#F7F7F7] flex items-center justify-center cursor-pointer'
        onClick={handleNext}
      >
        <img src={arrowRightWhiteIcon} alt='arrow left' className='w-[4px] h-[6px] invert filter grayscale brightness-75' />
      </div>
    </div>
  );
};

export default Pagination;