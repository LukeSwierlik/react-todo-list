export interface Settings {
    columnCreatorText: string;
    cardCreatorText: string;
    creator: {
        buttonOK: string;
        buttonCancel: string;
        defaultText: string;
    };
    search: {
        defaultText: string;
        icon: string;
    };
    defaultListDescription: string;
    defaultColumnIcon: string;
}

export interface TodoItem {
    id: string;
    title: string;
    description: string;
    image: string;
}
