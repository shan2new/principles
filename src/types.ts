export interface Principle {
    name: string;
    desc: string;
  }
  
  export interface Category {
    name: string;
    principles: Principle[];
  }
  
  export interface Habit {
    title: string;
    categories: Category[];
  }
  
  export interface Group {
    name: string;          // 🔒 Private Victory …
    habits: Habit[];
  }