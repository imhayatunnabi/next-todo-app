"use client"
import { ITask } from '@/model/tasks'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import Modal from './Modal'
interface TaskProps {
    task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const handleSubmit = () =>{};
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td>
                <div className="flex gap-2">
                    <button className='btn btn-success'><FiEdit size={18}></FiEdit></button>
                    <Modal modalOpen={openEditModal} setOpenEditModal={setOpenEditModal}>
                        <form onSubmit={handleSubmit}>
                            <h3 className="font-bold text-large">Add New Task</h3>
                            <div className="modal-action">
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" value={taskToEdit}
                                    onChange={(e) => setTaskToEdit(e.target.value)}
                                />
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </Modal>
                    <button className='btn btn-error'> <MdDelete size={18}></MdDelete> </button>
                </div>
            </td>
        </tr>
    )
}

export default Task