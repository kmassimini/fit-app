import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';

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
    return this.prisma.wo_logs.findMany();
  }

  findOne(id: number) {
    return this.prisma.wo_logs.findUnique({
      where: { id }
    });
  }

  update(id: number, dto: UpdateWorkoutLogDto) {
    return this.prisma.wo_logs.update({
      where: { id },
      data: {
        comments: dto.comments,
        question_id: dto.question_id,
        rating_type: dto.rating_type,
        rating_value: dto.rating_value,
        source: dto.source,
      }
    });
  }

  remove(id: number) {
    return this.prisma.wo_logs.delete({
      where: { id }
    });
  }
}
