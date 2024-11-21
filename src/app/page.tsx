"use client";

import { useState } from "react";
import { Lecture } from "@/types/types";

const monthNames = {
  январь: 0,
  февраль: 1,
  март: 2,
  апрель: 3,
  май: 4,
  июнь: 5,
  июль: 6,
  август: 7,
  сентябрь: 8,
  октябрь: 9,
  ноябрь: 10,
  декабрь: 11,
} as const;

const Home = () => {
  const [groupName, setGroupName] = useState<string>("");
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const fetchLectures = async () => {
    const res = await fetch("/api/lectures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ group_name: groupName }),
    });

    if (res.ok) {
      const data: Lecture[] = await res.json();
      setLectures(data);
    } else {
      console.error("Failed to fetch lectures:", res.status);
    }
  };

  const parseRussianDate = (dateString: string): Date | null => {
    const regex = /(\d{1,2})\s+(\w+)\s+(\d{4})\s+г\./;
    const match = dateString.match(regex);

    if (match) {
      const day = parseInt(match[1], 10);
      const month = monthNames[match[2] as keyof typeof monthNames];
      const year = parseInt(match[3], 10);

      if (month !== undefined) {
        return new Date(year, month, day);
      }
    }

    console.error("Invalid date format:", dateString);
    return null;
  };

  const formatDate = (dateString: string) => {
    const parsedDate = parseRussianDate(dateString);

    if (!parsedDate || isNaN(parsedDate.getTime())) {
      return "Invalid Date"; // رسالة احتياطية
    }

    // تنسيق التاريخ كرقم (dd/mm/yyyy)
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const year = parsedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Find Lectures</h1>
      <input
        type="text"
        placeholder="Enter group name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={fetchLectures}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>

      <div className="mt-8 w-full max-w-lg">
        {lectures.map((lecture: Lecture) => (
          <div key={lecture.lecture_id}>
            <h3>Lecture: {lecture.lecture_name}</h3>
            <p>Date: {lecture.lecture_date}</p> {/* عرض التاريخ كما هو */}
            <p>Room: {lecture.room_number}</p>
            <p>Time: {lecture.time_slot}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
