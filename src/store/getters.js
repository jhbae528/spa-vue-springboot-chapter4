export default {
    filteredTodoItems (state) {
        // 전체 항목
        if (!state.filter) {
            return state.todoItems
        }
        
        // 미완료 항목
        if (state.filter === 'A') {
            return state.todoItems.filter(todoItem => {
                return todoItem.done === false
            })
        }

        // 완료항목
        if (state.filter === 'B') {
            return state.todoItems.filter(todoItem => {
                return todoItem.done === true
            })
        }
    }
}