import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from '../../lib/Calendar';

/**
 * Calendar View Component - for selecting date and time
 */

// Selection props for selecting date to return selected value
interface SelectProps {
  onSelect: (value: dayjs.Dayjs) => void;
}

const CalenderView: React.FC<SelectProps> = ({ onSelect }) => {
  const currentDate = dayjs(); // Current date
  const [today, setToday] = useState(currentDate); // Set and track current date
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SUN']; // Days of the week
  const [selectDate, setSelectDate] = useState<dayjs.Dayjs>(); // Selected day

  // Use effect for updating selected value
  useEffect(() => {
    if (selectDate) {
      onSelect(selectDate);
    }
  }, [selectDate, onSelect]);

  // Filter dates to only include the current month
  const currentMonthDates = generateDate(today.month(), today.year()).filter(
    ({ date }) => date.month() === today.month()
  );

  return (
    <>
      {/* Calendar View */}
      <div className="grid w-full gap-1">
        {/* Calendar Header */}
        <div className="flex gap-5 w-full items-center justify-between pb-2">
          <GrFormPrevious
            className="w-4 h-4 cursor-pointer hover:scale-105 transition-all text-[#757575]"
            onClick={() => {
              setToday(today.month(today.month() - 1)); // Go to previous month
            }}
          />
          <h1 className="font-semibold text-[12px]">
            {months[today.month()]}, {today.year()}
          </h1>
          <GrFormNext
            className="w-4 h-4 cursor-pointer hover:scale-105 transition-all text-[#757575]"
            onClick={() => {
              setToday(today.month(today.month() + 1)); // Go to next month
            }}
          />
        </div>
            <div className='w-full h-[0.5px] bg-[#757575]/50 ' />

        {/* Calendar Days */}
        <div className="grid grid-cols-7 w-full">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-[8px] font-semibold text-center h-7 w-7 grid place-content-center select-none "
              >
                {day}
              </h1>
            );
          })}
        </div>



        {/* Calendar Dates */}
        <div className="w-52 h-52 grid grid-cols-7">
          {currentMonthDates.map(({ date, today }, index) => {
            return (
              <div key={index} className="flex items-center justify-center flex-col">
                <h1
                  onClick={() => {
                    if (date.toDate() >= currentDate.toDate()) {
                      setSelectDate(date);
                    }
                  }}
                  className={`
                    ${
                      date.toDate() >= currentDate.toDate()
                        ? 'text-[#292929]'
                        : 'text-[#292929] opacity-50 cursor-not-allowed'
                    }
                    ${
                      selectDate && date.isSame(selectDate, 'day')
                        ? 'bg-[#4BAE4F] text-white'
                        : ''
                    }
                    h-6 w-6 text-[10px] rounded-full grid place-content-center transition-all cursor-pointer select-none
                  `}
                >
                  {date.date()}
                </h1>
                {today && <div className="w-1 h-1 bg-[#292929] rounded-full" />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CalenderView;