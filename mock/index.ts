export type HomeItem = {
  id: number;
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
};

export const homeItems: HomeItem[] = [
  {
    id: 1,
    title: 'Generic Feed Post',
    type: 'Post',
    text: 'This is a generic entry for the feed template.',
    author: 'Admin',
    authorAvatar: '',
    image: '',
  },
];

export type NotificationItem = {
  id: number;
  title: string;
  when: string;
};

export const notifications: NotificationItem[] = [
  { id: 1, title: 'Notification 1', when: '1 hr' },
  { id: 2, title: 'Notification 2', when: '1 day' },
];

export type ListItem = {
  name: string;
  done?: boolean;
};

export type TodoListItem = {
  name: string;
  id: string;
  items?: ListItem[];
};

export const lists: TodoListItem[] = [
  {
    name: 'Generic List',
    id: 'list-1',
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
    ],
  },
];

export type Settings = {
  enableNotifications: boolean;
};

export const settings: Settings = {
  enableNotifications: true,
};
