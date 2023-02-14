import {useState, useEffect} from "react"
import { MdAddCircleOutline, MdOutlineDeleteOutline } from "react-icons/md"
import { BiMessageSquareEdit } from "react-icons/bi"
import AddUserModal from "../modals/AddUserModal"
import DeleteModal from "../modals/DeleteModal"


export default function UserManagement() {

    const defaultUsers = [
        {
            name:'John Doe',
            email:'john@gmail.com'
        },
        {
            name:'Victor',
            email:'victor@gmail.com'
        }
    ]
    const [users,setUsers] = useState(defaultUsers)
    const [openModal,setopenModal] = useState(false)
    const [updateUser,setUpdateUser] = useState({})
    const [updateModal,setUpdateModal] = useState(false)
    const [deleteModal,setdeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const handleCreateUsers = (newUser)=>{
        setUsers([...users,newUser])
        setopenModal(false)
    }

    const handleDeleteUser = (id)=>{
        setdeleteModal(true)
        setDeleteId(id)
    }

    const handleUpdateUser = (userId) =>{
        const update = users.filter((user,i) => i === userId)
        setUpdateUser(...update)
        setUpdateModal(true)
    }

     useEffect(() => {
      console.log(users,'users');
    }, [users]);
    
   return (
    <>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-full m-4'>
         <div className=' px-4 flex items-center justify-end py-4 bg-white dark:bg-gray-800'>
            <div>
               <button
                  className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                  type='button'
                  onClick={()=>setopenModal(true)}
               >
                  <span className='sr-only'>Add user button</span>
                  Add User
                  <MdAddCircleOutline className='ml-2 text-green-400 text-lg' />
               </button>
            </div>
         </div>
         <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
               <tr>
                  <th scope='col' className='px-6 py-3'>
                     id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     email
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
              {users.map((user,i)=>(
                 <tr key={i} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                 <td className='px-6 py-4'>{i+1}</td>
                <th
                   scope='row'
                   className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
                >
                   <div className='pl-3'>
                      <div className='text-base font-semibold'>{user.name}</div>
                   </div>
                </th>
                <td className='px-6 py-4'>
                   <div className='flex items-center'>
                       {user.email}
                   </div>
                </td>
                <td className='px-6 py-4'>
                   {/* Modal toggle */}
                   <div className=" flex flex-row gap-2">
                   <BiMessageSquareEdit className='text-blue-400 text-xl' onClick={()=>handleUpdateUser(i)}/>
                   <MdOutlineDeleteOutline className='text-red-600 text-xl' onClick={()=>handleDeleteUser(i)}/>
                   </div>

                </td>
             </tr>
              ))}
            </tbody>
         </table>

      </div>
      { openModal ? <AddUserModal setopenModal={setopenModal} users={users} setUsers={handleCreateUsers}/> : ''}
      { updateModal ? <AddUserModal setopenModal={setUpdateModal} users={users} setUsers={setUsers} updateUser={updateUser}/> : ''}
      {deleteModal ? <DeleteModal setDeleteModal={setdeleteModal} users={users} userId={deleteId} setUsers={setUsers}/> : ''}
      </>
   )
}
