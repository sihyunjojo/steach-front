export interface Curricula {
  title: string;
  sub_title: string;
  intro: string;
  information: string;
  category: string;
  sub_category : string;
  banner_img_url : string;
  start_date : string;
  end_date : string;
  lecture_start_time : string;
  lecture_end_time: string;
  weekdays_bitmask: any;
  max_attendees: number;
  teacher_name: string;
  current_attendees: string;
}

export interface CurriculaFormData {
  title: string;
  sub_title: string;
  intro: string;
  information: string;
  category: string;
  sub_category: string;
  banner_img_url: string | File;
  start_date: string;
  end_date: string;
  lecture_start_time: string;
  lecture_end_time: string;
  weekdays_bitmask: any;
  max_attendees: number;
}

export interface Lectures {
  lecture_id: number;
  lecture_title: string;
  lecture_order: number;
  lecture_start_time: string;
}

// 학생 커리큘럼 신청 리스트 조회 폼
export interface returnStudentCurriculaList {
  current_page_number: number;
  total_page: number;
  page_size: number;
  curricula: Curricula[];
}
