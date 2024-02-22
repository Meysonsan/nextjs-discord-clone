import { Schema, model, Types, Document } from 'mongoose';
// import { MemberRole } from '@/models/MemberRole';

interface MemberDocument extends Document {
  role: string;
  profileId: string;
  profile: Types.ObjectId; // Assuming Profile type is defined elsewhere
  serverId: string;
  server: Types.ObjectId[]; // Assuming Server type is defined elsewhere
  messages: Types.ObjectId[];
  directMessages: Types.ObjectId[];
//   conversationsInitiated: Types.ObjectId[];
//   conversationsReceived: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const memberRole = [
    'ADMIN',
    'MODERATOR',
    'GUEST',
]

const memberSchema = new Schema<MemberDocument>({
  role: {
    type: String,
    enum: memberRole,
    default: memberRole[2],
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
  directMessages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DirectMessage',
    },
  ],

//   conversationsInitiated: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Conversation',
//     },
//   ],
//   conversationsReceived: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Conversation',
//     },
//   ],

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
memberSchema.index({ profileId: 1 });
memberSchema.index({ serverId: 1 });

export default model<MemberDocument>('Member', memberSchema);
