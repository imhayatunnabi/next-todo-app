import { ITask } from "@/model/tasks"
import React from "react"

interface TodoListProps {
    tasks: ITask[]
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList