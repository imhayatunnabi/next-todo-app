"use client"
import { ITask } from '@/model/tasks'
import React, { FormEventHandler, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, updateTodo } from '@/api'
interface TaskProps {
    task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await updateTodo({
            id: task.id,
            text: taskToEdit,
        });
        setTaskToEdit('');
        setOpenEditModal(false);
        router.refresh();
    };
    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        setDeleteModal(false);
        router.refresh();
    };
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td>
                <div className="flex gap-2">
                    <button className='btn btn-success' onClick={() => setOpenEditModal(true)}><FiEdit size={18}></FiEdit></button>
                    <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
                        <form onSubmit={handleSubmit}>
                            <h3 className="font-bold text-large">Update Task</h3>
                            <div className="modal-action">
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" value={taskToEdit}
                                    onChange={(e) => setTaskToEdit(e.target.value)}
                                />
                                <button type="submit" className="btn">Update</button>
                            </div>
                        </form>
                    </Modal>
                    <button className='btn btn-error' onClick={() => setDeleteModal(true)}> <MdDelete size={18}></MdDelete> </button>
                    <Modal modalOpen={openDeleteModal} setModalOpen={setDeleteModal}>
                        <h3 className="font-bold text-large">Are you sure to delete the task ?</h3>
                        <div className="modal-action">
                            <button type="button" className="btn btn-error" onClick={() => handleDelete(task.id)} >Delete</button>
                        </div>
                    </Modal>
                </div>
            </td>
        </tr>
    )
}
export default Task