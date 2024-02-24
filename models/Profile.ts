import { Schema, model, Types, Document } from 'mongoose';

interface Profile extends Document {
  userId: string;
  name?: string;
  imageUrl?: string;
  email: string;
  servers?: Types.ObjectId[];
  members?: Types.ObjectId[];
  channels?: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const profileSchema = new Schema<Profile>({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   default: Schema.Types.ObjectId,
  //   required: true,
  // },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  servers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Server',
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],
  channels: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},
{
  // timestamps: { createdAt: 'createdAt' },
  collection: "profiles",
});

// Model
export default model<Profile>('Profile', profileSchema);

