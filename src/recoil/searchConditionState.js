import { atom } from 'recoil';
export const searchConditionState = atom({
  key: 'SearchConditions',
  default: {
    keyword: '',
    location: '',
    min_salary: 0,
    min_years_of_experience: 0,
    type: [],
  },
});
