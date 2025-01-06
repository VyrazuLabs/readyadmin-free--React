export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  invoiceNumber: string;
  status: string;
  senderName: string;
  senderAddress: string;
  senderPhone: string;
  senderImage: string;
  senderEmail: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  receiverEmail: string;
  receiverImage: string;
  createdAt: string;
  dueDate: string;
  subtotal: number;
  shipping: number;
  discount: number;
  taxes: number;
  items: Item[];
}

export interface KanbanTask {
  id: number;
  taskTitle: string;
  taskImage: string;
  numberOfComments: number;
  numberOfAttachments: number;
  assignedName: string;
  assignedImage: string;
}

export interface kanbanTasksProps {
  colId: any;
  title: string;
  tasks: KanbanTask[];
}

export interface BlogPost {
  id: string;
  title: string;
  coverUrl: string;
  totalViews: number;
  description: string;
  totalShares: number;
  totalComments: number;
  totalFavorites: number;
  postedAt: string | number | null;
  author: {
    name: string;
    avatarUrl: string;
  };
  status: string;
}

export type User = {
  fullName: string;
  workPosition: string;
  followerCount: number;
  followingCount: number;
  totalPosts: number;
  profilePicture: string;
  coverImage: string;
};

export type Follower = {
  fullName: string;
  location: string;
  isFollowing: boolean;
  profilePicture: string;
  profession: string;
};

export type Friend = {
  fullName: string;
  profilePicture: string;
  workPosition: string;
};
