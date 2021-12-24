import { Document, model, Model, Schema } from 'mongoose';

interface MemberDetail {
  handle: string;
  rollNum: number;
  year: number;
  branch: string;
  created_at: string;
  updated_at: string;
}
export type MemberDetailsDocument = MemberDetail & Document;

const MemberDetailsSchema: Schema = new Schema({
  handle: { type: String, required: true },
  rollNum: { type: Number, required: true },
  year: { type: Number, required: true },
  branch: { type: String, required: true },
  created_at: { type: Date, required: false, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() }
});

const MemberDetails: Model<MemberDetailsDocument> = model(
  'MemberDetails',
  MemberDetailsSchema
);
export default MemberDetails;
