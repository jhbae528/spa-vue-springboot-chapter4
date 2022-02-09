import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
    RESTORE,
    EDIT_TODO,
    TOGGLE_TODO_STATUS
} from './mutation-types'

export default {
    addTodo ({ commit }, payload) {
        commit(ADD_TODO, payload)
    },
    removeTodo ({ commit }, id) {
        commit(REMOVE_TODO, id)
    },
    clearAll ({ commit }) {
        commit(CLEAR_ALL)
    },
    save ({ state }) {
        const data = {
            todoItems: state.todoItems,
            nextTodoId: state.nextTodoId
        }
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    },
    restore ({ commit }) {
        const data = localStorage.getItem('todo-app-data')
        if (data) {
            commit (RESTORE, JSON.parse(data))
        }
    },
    editTodo ({ commit }, payload) {
        commit(EDIT_TODO, payload)
    },
    toggleTodoStatus ({ commit }, id) {
        commit(TOGGLE_TODO_STATUS, id)
    }
}