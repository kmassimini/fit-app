import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutLogModule } from './workout-log/workout-log.module';

@Module({
  imports: [WorkoutLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
