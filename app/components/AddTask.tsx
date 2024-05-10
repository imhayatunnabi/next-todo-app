import { AiOutlinePlus } from "react-icons/ai"

const AddTask = () => {
  return (
    <div>
        <button className="btn btn-primary w-full">Add New Task
        <AiOutlinePlus size={18} className="ml-2"></AiOutlinePlus>
        </button>
    </div>
  )
}

export default AddTask