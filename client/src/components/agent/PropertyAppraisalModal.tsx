import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { calendarGrayIcon, timeGrayIcon } from '../../assets/icons';
import NotifyModal from './NotifyModal';
import CalenderView from '../root/CalenderView';
import dayjs from 'dayjs';
import TimeView from './TimeView';
import toast from 'react-hot-toast';

interface PropertyAppraisalModalProps {
    show: boolean;
    onClose: () => void;
}

const PropertyAppraisalModal = ({ show, onClose }: PropertyAppraisalModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const timeViewRef = useRef<HTMLDivElement>(null);
    const [showNotifyModal, setShowNotifyModal] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
    const [showTimeView, setShowTimeView] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

    // Handle outside clicks to close the calendar and time view
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Close the modal if clicked outside
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
            // Close the calendar if clicked outside the calendar or input field
            if (
                calendarRef.current &&
                !calendarRef.current.contains(e.target as Node) &&
                !(e.target as HTMLElement).closest('.calendar-container')
            ) {
                setShowCalendar(false);
            }
            // Close the time view if clicked outside the time view or input field
            if (
                timeViewRef.current &&
                !timeViewRef.current.contains(e.target as Node) &&
                !(e.target as HTMLElement).closest('.time-container')
            ) {
                setShowTimeView(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, calendarRef, timeViewRef, onClose]);

    // GSAP animation for modal
    useEffect(() => {
        if (show) {
            gsap.fromTo(modalRef.current,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [show]);

    // Handle date selection from the calendar
    const handleDateSelect = (date: dayjs.Dayjs) => {
        setSelectedDate(date);
        //setShowCalendar(false); // Close the calendar after selecting a date
    };

    if (!show) return null;

    return (
        <>
            <div className='w-full flex items-center justify-center bg-black/20 h-screen fixed top-0 left-0 z-[4000]'>
                <div ref={modalRef} className='w-full max-w-[650px] h-full max-h-[527px] items-center rounded-[30px] drop-shadow-md bg-white flex flex-col p-7 gap-8 overflow-hidden'>
                    <div className='w-full flex flex-row justify-center items-center'>
                        <h2 className='text-[min(3vw,16px)] text-black font-bold'>
                            Property Appraisal
                        </h2>
                    </div>

                    <div className='w-full h-[1px] bg-[#D9D9D9]' />

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setShowNotifyModal(true);
                        }}
                        className='w-full h-[calc(100%-10px)] max-w-[451px] items-center flex flex-col gap-9 py-5'
                    >
                        <div className='w-full grid grid-cols-2 gap-3'>
                            <div
                                ref={calendarRef}
                                className='flex flex-col w-full relative'>
                                <label htmlFor='name' className='text-[min(3vw,10px)] text-[#2d2d2d] font-medium'>
                                    Select Date
                                </label>
                                <div
                                    className='border-[#F2F2F2] border-[1px] w-full h-[43px] rounded-full flex flex-row justify-between items-center py-2 pl-3 pr-2'
                                >
                                    <p className='text-[min(3vw,12px)] text-[#757575] font-medium'>
                                        {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Select a date'}
                                    </p>
                                    <div
                                        onClick={() => setShowCalendar(!showCalendar)}
                                        className='size-[30px] cursor-pointer rounded-full border-[#F2F2F2] border-[1px] flex items-center justify-center'
                                    >
                                        <img src={calendarGrayIcon} alt='Calendar icon' className='size-[10px]' />
                                    </div>
                                </div>

                                {showCalendar && (
                                    <div className='calendar-container w-[250px] p-4 rounded-[14px] flex h-[290px] top-[110%] right-0 justify-center items-center shadow-md drop-shadow-md flex-col absolute bg-white z-10'>
                                        <CalenderView onSelect={handleDateSelect} />
                                    </div>
                                )}
                            </div>

                            <div
                                ref={timeViewRef}
                                className='flex flex-col w-full relative'>
                                <label htmlFor='name' className='text-[min(3vw,10px)] text-[#2d2d2d] font-medium'>
                                    Select Time
                                </label>
                                <div
                                    className='border-[#F2F2F2] border-[1px] w-full h-[43px] rounded-full flex flex-row justify-between items-center py-2 pl-3 pr-2'>
                                    <p className='text-[min(3vw,12px)] text-[#757575] font-medium'>
                                        {selectedTime ? selectedTime : 'Select a time'}
                                    </p>
                                    <div
                                        onClick={() => {
                                            if (selectedDate) {
                                                setShowTimeView(!showTimeView)
                                            } else {
                                                toast.error('Please select a date first');
                                            }
                                        }}
                                        className='size-[30px] cursor-pointer rounded-full border-[#F2F2F2] border-[1px] flex items-center justify-center'>
                                        <img src={timeGrayIcon} alt='time icon' className='size-[10px]' />
                                    </div>
                                </div>
                                {showTimeView && selectedDate && (
                                    <div className='time-container w-[250px] p-4 rounded-[14px] flex h-[290px] top-[110%] right-0 justify-center items-center shadow-md drop-shadow-md flex-col absolute bg-white z-10'>
                                        {selectedDate && <TimeView onSelect={(time) => { setSelectedTime(time) }} date={selectedDate.toString()} duration={30} startTime='08:00 AM' endTime='05:00 PM' bookedTime={selectedTime} />}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='name' className='text-[min(3vw,10px)] text-[#2d2d2d] font-medium'>
                                Enter Name
                            </label>
                            <div className='border-[#F2F2F2] border-[1px] w-full h-[43px] rounded-full flex flex-row justify-between items-center py-2 pl-3 pr-2'>
                                <input type='text' placeholder='Enter name' className='w-full h-full pl-2 bg-transparent outline-none text-[12px]' />
                            </div>
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='name' className='text-[min(3vw,10px)] text-[#2d2d2d] font-medium'>
                                Enter Email
                            </label>
                            <div className='border-[#F2F2F2] border-[1px] w-full h-[43px] rounded-full flex flex-row justify-between items-center py-2 pl-3 pr-2'>
                                <input type='email' placeholder='Enter email' className='w-full h-full pl-2 bg-transparent outline-none text-[12px]' />
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='w-full flex h-[44px] cursor-pointer text-white text-[14px] font-bold flex-row items-center justify-center rounded-l-full rounded-r-full bg-[#4BAE4F]'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {showNotifyModal && <NotifyModal show={showNotifyModal} onClose={() => { setShowNotifyModal(false); onClose(); }} />}
        </>
    );
};

export default PropertyAppraisalModal;