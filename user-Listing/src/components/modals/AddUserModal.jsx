import { useState } from "react"

export default function AddUserModal({ setopenModal, users, setUsers, updateUser }) {
   const [data, setData] = useState({ name: updateUser?.name, email: updateUser?.email })
   const handleChange = (e) => {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
   }

   const updateUsers = () => {
      const result = updateChanges()
      setUsers(result)
      setopenModal(false)
   }

   const updateChanges = () => {
      return users.map((user) => {
         if (user.name === updateUser.name && user.email === updateUser.email) {
            return { ...user, ...data }
         } else {
            return user
         }
      })
   }
   return (
      <>
         <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            <div className='fixed inset-0 z-10 overflow-y-auto'>
               <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                  <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                     <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                        <h2 className='text-center mb-4 font-semibold text-lg'>User Details</h2>
                        <div className='flex flex-col gap-3 items-center justify-center w-full'>
                           <div className='flex gap-2'>
                              <label>Name</label>
                              <input
                                 type='text'
                                 name='name'
                                 onChange={handleChange}
                                 value={data?.name}
                                 className='border rounded text-gray-400'
                                 required
                              />
                           </div>
                           <div className='flex gap-2'>
                              <label>email</label>
                              <input
                                 type='email'
                                 name='email'
                                 onChange={handleChange}
                                 value={data?.email}
                                 className='border rounded text-gray-400'
                                 required
                              />
                           </div>
                        </div>
                     </div>
                     <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                        {updateUser === undefined ? (
                           <button
                              type='button'
                              onClick={() => setUsers(data)}
                              className='disabled:bg-green-300 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                           >
                              Add User
                           </button>
                        ) : (
                           <button
                              type='button'
                              onClick={updateUsers}
                              className='disabled:bg-green-300 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                           >
                              Update User
                           </button>
                        )}
                        <button
                           onClick={() => setopenModal(false)}
                           type='button'
                           className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                        >
                           Cancel
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
