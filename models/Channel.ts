import { Schema, model, Types, Document } from 'mongoose';

export interface ChannelDocument extends Document {
  name: string;
  type: string;

  profileId: string;
  profile: Types.ObjectId;

  serverId: string;
  server: Types.ObjectId[];

  messages: Types.ObjectId[];

  createdAt: Date;
  updatedAt: Date;
}

const channelType = [
    'TEXT',
    'AUDIO',
    'VIDEO',
]

const channelSchema = new Schema<ChannelDocument>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: channelType,
    default: channelType[0],
  },

  profileId: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },

  serverId: {
    type: String,
    required: true,
  },
  server: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Server',
      required: true,
    },
  ],

  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
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
});

// Indexes for efficient queries
channelSchema.index({ profileId: 1 });
channelSchema.index({ serverId: 1 });

export default model<ChannelDocument>('Channel', channelSchema);
