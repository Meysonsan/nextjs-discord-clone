import { Schema, model, Types, Document } from 'mongoose';

interface Server extends Document {
  name: string;
  imageUrl?: string;
  inviteCode: string;
  profile: Types.ObjectId;
  members?: Types.ObjectId[];
  channels?: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const serverSchema = new Schema<Server>({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  inviteCode: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'Member',
  }],
  channels: [{
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

serverSchema.index({ profile: 1 });

export default model<Server>('Server', serverSchema);
