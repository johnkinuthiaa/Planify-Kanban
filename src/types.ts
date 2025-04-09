export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE' |'CANCELLED';

export type Task = {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
};

export type Column = {
    id: TaskStatus;
    title: string;
};