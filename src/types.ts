export interface PageApi {
  id?: string;
  title: string;
  content: string;
}

export interface PageInfo {
  title: string;
  id: string;
}
export const pages: PageInfo[] = [
  { title: 'About', id: 'about' },
  { title: 'Contacts', id: 'contacts' },
  { title: 'Info', id: 'info' },
  { title: 'General', id: 'general' },
  { title: 'More', id: 'more' },
];