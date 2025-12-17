// Tipos de datos para Linked Together

export interface User {
  id: string;
  username: string;
  emoji: string;
  createdAt: Date;
}

export interface Friend {
  id: string;
  userId: string;
  friendId: string;
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: Date;
}

export interface Mood {
  id: string;
  userId: string;
  emoji: string;
  timestamp: Date;
}