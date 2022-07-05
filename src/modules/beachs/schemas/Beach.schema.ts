import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { GeoPosition } from '../interfaces/Beachs.interfaces';

@Schema({ timestamps: true, autoCreate: true })
export class Beach {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, enum: GeoPosition })
  position: GeoPosition;
  @Prop({ required: true })
  lat: number;
  @Prop({ required: true })
  lng: number;
}

export const BeachSchema = SchemaFactory.createForClass(Beach);

export type BeachDocument = Beach & Document;
