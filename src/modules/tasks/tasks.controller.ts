import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TasksService){

    }
    
    @Get()
    findAllTasks(){
        return this.taskService.findAllTasks();
    }

    @Get('/:id')
    findOneTasks(@Param('id') id: string){
        return this.taskService.findOneTask(id);
    }

    @Post()
    createTask(@Body() data: any){
        return this.taskService.createTask(data);
    }

    @Put('/:id')
    updateTask(@Param('id') id: string, @Body() data: any){
        return this.taskService.updateTask(id, data);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(id);
    }



}
