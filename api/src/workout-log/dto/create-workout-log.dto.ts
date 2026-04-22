import { RatingType, SourceType } from 'src/common/enums';

export class CreateWorkoutLogDto {
  id: Number;
  question_id: Number;
  rating_value: Number;
  rating_type: RatingType;
  created_at: Date;
  user_id: Number;
  source: SourceType;
  comments?: String;
  updated_at: Date;
}
