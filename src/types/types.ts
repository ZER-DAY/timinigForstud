export interface Lecture {
  lecture_id: number;
  lecture_name: string;
  lecture_date: string;
  room_number: string;
  group_id: number;
  time_slot: string;
}

// types.ts

export const monthNames: { [key: string]: number } = {
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
};

// يمكنك أيضًا تعريف أي نوع بيانات آخر حسب الحاجة.
