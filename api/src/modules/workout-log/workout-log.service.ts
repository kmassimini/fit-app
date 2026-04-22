import { Injectable } from '@nestjs/common';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';

@Injectable()
export class WorkoutLogService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateWorkoutLogDto) {
    return this.prisma.wo_logs.create({
      data: {
        question_id: dto.question_id,
        rating_value: dto.rating_value,
        rating_type: dto.rating_type,
        user_id: dto.user_id,
        source: dto.source,
        comments: dto.comments,
      },
    });
  }

  findAll() {
    return `This action returns all workoutLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutLog`;
  }

  update(id: number, updateWorkoutLogDto: UpdateWorkoutLogDto) {
    return `This action updates a #${id} workoutLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutLog`;
  }
}
