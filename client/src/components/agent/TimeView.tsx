import { useEffect, useState } from 'react';

interface TimeViewProps {
    onSelect: (time: string) => void;
    date: string;
    startTime: string;
    endTime: string;
    duration: number;
    bookedTime?: string;
}

const TimeView = ({ onSelect, date, startTime, endTime, duration, bookedTime }: TimeViewProps) => {
    const [timeSlots, setTimeSlots] = useState<{ startTime: string; endTime: string; booked: boolean }[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<{ startTime: string; endTime: string; booked: boolean } | null>(null);

    useEffect(() => {
        if (bookedTime) {
            const [start, end] = bookedTime.split(' - ');
            setSelectedSlot({ startTime: start, endTime: end, booked: true });
        }
    }, [bookedTime]);

    useEffect(() => {
        generateTimeSlots();
    }, [date, startTime, endTime, duration]);

    // Convert time string (e.g., "08:00 AM") to total minutes
    const convertToMinutes = (time: string) => {
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        if (modifier === 'PM' && hours !== '12') {
            hours = String(Number(hours) + 12);
        }
        if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
        return Number(hours) * 60 + Number(minutes);
    };

    // Convert total minutes to 12-hour format with AM/PM
    const convertTo12HourFormat = (minutes: number) => {
        let hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        let modifier = 'AM';
        if (hours >= 12) {
            modifier = 'PM';
            if (hours > 12) hours -= 12;
        }
        if (hours === 0) hours = 12;
        return `${hours}:${String(mins).padStart(2, '0')} ${modifier}`;
    };

    // Generate time slots
    const generateTimeSlots = () => {
        const slots: { startTime: string; endTime: string; booked: boolean }[] = [];
        let currentTime = convertToMinutes(startTime);
        const endTimeMinutes = convertToMinutes(endTime);

        while (currentTime + duration <= endTimeMinutes) {
            const endSlotTime = currentTime + duration;
            slots.push({
                startTime: convertTo12HourFormat(currentTime),
                endTime: convertTo12HourFormat(endSlotTime),
                booked: false, // You can update this based on your booking logic
            });
            currentTime = endSlotTime;
        }

        setTimeSlots(slots);
    };

    return (
        <div className='w-full flex flex-col gap-2 rounded-[20px] bg-white max-h-[310px] h-full p-3'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='text-[#2d2d2d] text-[min(3vw,12px)] font-medium'>Select Time</p>
                <div className='flex flex-row items-center w-[84px] text-[10px] justify-center rounded-l-full rounded-r-full h-[24px] px-2 bg-[#B9B9B9]/20 border-[#616161] border-[1px]'>
                    {`${date.split(' ')[1]} ${date.split(' ')[2]} ${date.split(' ')[3]}`}
                </div>
            </div>

            <div className='w-full flex flex-col gap-2 h-full overflow-y-auto'>
                {timeSlots.map((slot, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(`${slot.startTime} - ${slot.endTime}`)}
                        className='w-full h-fit flex flex-col'>
                        <div className='w-full flex flex-row gap-1 text-[10px] whitespace-nowrap items-center'>
                            {slot.startTime}
                            <div className='w-full flex flex-row border-[#757575] border-dashed border-t-[1px] ' />
                        </div>
                        <div className='flex flex-row gap-2 w-full items-center'>
                            <div className={`w-[94px] h-[38px] rounded-[5px] cursor-pointer justify-center flex flex-col ${slot.booked ? 'bg-[#2d2d2d]' : ' bg-gradient-to-l to-[#4BAE4F] from-[#8AEA8E] items-center'}`}>
                                {
                                    slot.booked ? (
                                        <div className='w-full flex flex-col p-2'>
                                            <p className='text-white text-[8px]'>{slot.startTime} - {slot.endTime}</p>
                                            <p className='text-white text-[10px]'>Booked</p>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => { setSelectedSlot(slot); onSelect(`${slot.startTime} - ${slot.endTime}`) }}
                                            className='w-full flex flex-row gap-2'>
                                            <div className='w-full flex flex-col items-center'>
                                                {
                                                    selectedSlot === slot ?
                                                        <div className='w-full flex flex-col p-2'>
                                                            <p className='text-white text-[9px]'>{slot.startTime} - {slot.endTime}</p>
                                                            <p className='text-white text-[10px]'>Booked</p>
                                                        </div>
                                                        :
                                                        <div className='w-full flex flex-col items-center'>
                                                            <div className='flex items-center justify-center relative size-[16px] rounded-[4px] bg-[#3B8C3E] border-[1px] border-white'>
                                                                <div className=' w-[6px] h-[1px] rounded-l-full rounded-r-full bg-white rotate-90 absolute' />
                                                                <div className=' w-[6px] h-[1px] rounded-l-full rounded-r-full bg-white  absolute' />
                                                            </div>
                                                            <p className='text-white text-[8px]'>Available this time</p>
                                                        </div>
                                                }

                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                            {
                                selectedSlot === slot &&
                                <div 
                                onClick={() => setSelectedSlot(null)}
                                className='size-[16px] border-[1px] border-black/50 rounded-full relative flex items-center justify-center cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out'>
                                <div className=' w-[6px] h-[1px] rounded-l-full rounded-r-full bg-black/50 rotate-45 absolute' />
                                <div className=' w-[6px] h-[1px] -rotate-45 rounded-l-full rounded-r-full bg-black/50  absolute' />
                            </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeView;