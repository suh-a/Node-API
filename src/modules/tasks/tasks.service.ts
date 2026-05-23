import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { finished } from 'stream';
import { Task } from './task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

    public findAllTasks(){
        return this.taskModel.find();
    }

    public findOneTask(id: string){
        return this.taskModel.findById(id);
    }

    public createTask(data: any){
        return this.taskModel.create(data);
    }

    public updateTask(id: string, data: any){
        return this.taskModel.findByIdAndUpdate(id, data, { new: true });
    }

    public deleteTask(id: string){
        return this.taskModel.findByIdAndDelete(id);
    }
}
