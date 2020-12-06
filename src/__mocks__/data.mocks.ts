import { Settings, TodoItem } from '../interfaces/data.interfaces';

export const mockSettings: Settings = {
    columnCreatorText: 'Add new column',
    cardCreatorText: 'Add new card',
    creator: {
        buttonOK: 'OK',
        buttonCancel: 'Cancel',
        defaultText: 'Add new item',
    },
    search: {
        defaultText: 'Search...',
        icon: 'search',
    },
    defaultListDescription: '<p>I can do all the things!!!</p>',
    defaultColumnIcon: 'list-alt',
};

export const mockTodoItems: TodoItem[] = [
    {
        id: 'list-1',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },
    {
        id: 'list-2',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },
    {
        id: 'list-3',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },
];
