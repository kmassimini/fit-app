import { rating_type, source_names } from 'generated/prisma/enums';

export class CreateWorkoutLogDto {
  question_id: number;
  rating_value: number;
  rating_type: rating_type;
  user_id: number;
  source: source_names;
  comments?: string;
}
