import { useReducer } from "react";

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name": {
      return {
        ...state,
        studentName: action.payload,
      };
    }
    case "add_student": {
      const newStudent = {
        id: Date.now(),
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }

    case "remove_student": {
      return {
        ...state,
        students: state.students.filter((item) => item.id !== action.payload),
      };
    }

    case "update_student": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === state.editableStudent.id) {
            item.name = state.studentName;
          }
          return item;
        }),
        editable: false,
        studentName: "",
        editableStudent: null,
      };
    }

    case "edit_handler": {
      const studentToEdit = state.students.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        editable: true,
        editableStudent: studentToEdit,
        studentName: studentToEdit.name,
      };
    }

    case "present_handler": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload) {
            if (item.isPresent === undefined) {
              item.isPresent = true;
            } else if (item.isPresent === true) {
              alert("Student already present");
            } else if (item.isPresent === false) {
              alert("Please use accidentally added button");
            }
          }
          return item;
        }),
      };
    }

    case "absent_handler": {
      const newList = state.students.map((item) => {
        if (item.id === action.payload) {
          if (item.isPresent === undefined) {
            item.isPresent = false;
          } else if (item.isPresent === false) {
            alert("Student already is absent list");
          } else if (item.isPresent === true) {
            alert("Please use accidentally removed button");
          }
        }
        return item;
      });

      return {
        ...state,
        students: newList,
      };
    }

    case "accident_handler": {
      const newList = state.students.map((item) => {
        if (item.id === action.payload) {
          item.isPresent = !item.isPresent;
        }
        return item;
      });

      return {
        ...state,
        students: newList,
      };
    }

    default:
      break;
  }
};
