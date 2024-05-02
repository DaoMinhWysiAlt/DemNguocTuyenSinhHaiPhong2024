'use client'
import { useState, useEffect } from 'react';

export default function Component() {
  const calculateTimeUntilTest = () => {
    // Date of the test
    const testDate = new Date('June 4, 2024 07:00:00');

    // Current date
    const now = new Date();

    // Calculate the difference in milliseconds
    let difference = testDate.getTime() - now.getTime();

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference %= 1000 * 60 * 60 * 24;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference %= 1000 * 60 * 60;
    const minutes = Math.floor(difference / (1000 * 60));
    difference %= 1000 * 60;
    const seconds = Math.floor(difference / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeUntilTest, setTimeUntilTest] = useState(calculateTimeUntilTest());

  useEffect(() => {
    // Update time remaining every second
    const timer = setInterval(() => {
      setTimeUntilTest(calculateTimeUntilTest());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Đếm Nguợc </h1>
        <p className="text-lg text-gray-400 md:text-xl">Ngày Tuyển Sinh vào 10 Hải Phòng</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-lg bg-gray-800 p-6 sm:p-8 md:p-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl">{timeUntilTest.days}</span>
            <span className="text-sm text-gray-400">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl">{timeUntilTest.hours}</span>
            <span className="text-sm text-gray-400">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl">{timeUntilTest.minutes}</span>
            <span className="text-sm text-gray-400">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl">{timeUntilTest.seconds}</span>
            <span className="text-sm text-gray-400">Seconds</span>
          </div>
        </div>
      </div>
    </main>
  );
}
