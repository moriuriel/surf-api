import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreateBeachDto } from '../dtos/CreateBeach.dto';
import { CreateBeachService } from '../services';

@Controller('/beachs')
export class BeachsController {
  constructor(private createBeachService: CreateBeachService) {}
  @Post()
  async create(
    @Body() data: CreateBeachDto,
    @Request() request,
    @Response() response: ExpressResponse,
  ) {
    const beachs = await this.createBeachService.execute(data);

    return response.status(HttpStatus.CREATED).json({ beachs });
  }
}
