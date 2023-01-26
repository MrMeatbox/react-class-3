export const taskReduder = (tasks, action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const task = {
        id: action.payload.id,
        title: action.payload.title,
        boardId: action.payload.boardId,
        listId: action.payload.listId,
      };
      console.log("called");
      return [...tasks, task];
    }
    case "REMOVE_TASK": {
      return tasks.filter((item) => item.id !== action.payload);
    }
    case "UPDATE_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    }
    case "CHANGE_LIST_ID_OF_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          item.listId = action.payload.listId;
        }
        return item;
      });
    }
    case "CHANGE_BOARD_ID_OF_TASK": {
      return tasks.map((item) => {
        if (item.if === action.payload.id) {
          item.boardId = action.payload.boardId;
        }
        return item;
      });
    }
    default:
      return tasks;
  }
};