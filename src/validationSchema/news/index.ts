import * as yup from 'yup';

export const newsValidationSchema = yup.object().shape({
  title: yup.string().required(),
  summary: yup.string().required(),
  url_id: yup.string().nullable().required(),
  category_id: yup.string().nullable().required(),
});
