"use client"
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    });
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  }
  return (
    <div>
      <button className="btn btn-primary w-full" onClick={() => setModalOpen(true)}>Add New Task
        <AiOutlinePlus size={18} className="ml-2"></AiOutlinePlus>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-large">Add New Task</h3>
          <div className="modal-action">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
            />
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask