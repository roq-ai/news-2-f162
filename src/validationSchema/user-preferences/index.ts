import * as yup from 'yup';

export const userPreferenceValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  category_id: yup.string().nullable().required(),
});
