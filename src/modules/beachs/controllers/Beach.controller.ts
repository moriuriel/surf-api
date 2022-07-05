import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreateBeachDto } from '../dtos/CreateBeach.dto';
import { CreateBeachService } from '../services';
import { FindAllBeachsService } from '../services/FindAllBeachs.service';

@Controller('/beachs')
export class BeachsController {
  constructor(
    private createBeachService: CreateBeachService,
    private findAllBeachsController: FindAllBeachsService,
  ) {}
  @Get()
  async index(@Response() response: ExpressResponse): Promise<ExpressResponse> {
    const beachs = await this.findAllBeachsController.execute();

    return response.status(HttpStatus.OK).json({ beachs });
  }
  @Post()
  async create(
    @Body() data: CreateBeachDto,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const beachs = await this.createBeachService.execute(data);

    return response.status(HttpStatus.CREATED).json({ beachs });
  }
}
