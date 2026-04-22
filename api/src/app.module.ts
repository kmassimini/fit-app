import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutLogModule } from './modules/workout-log/workout-log.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [PrismaModule, WorkoutLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
