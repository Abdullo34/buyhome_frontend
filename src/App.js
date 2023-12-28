import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {

  const [isUpDate, setIsUpDate] = useState(false)

  const [updateContact, setUpdateContact] = useState({
    title: "",
    price: "",
    location: "",
    bedroom: '',
    bath: "",
    area: "",
    location_url: "",
    _id: ""
  })

  const [contacts, setContacts] = useState([
    {
      title: "",
      price: "",
      location: "",
      bedroom: '',
      bath: "",
      area: "",
      location_url: "",
      _id: ""
    }
  ])




  const [contact, setContact] = useState([{
    title: "",
    price: "",
    location: "",
    bedroom: '',
    bath: "",
    area: "",
    location_url: ""
  }])

  // POST METHOD
  const handleCHange = (e) => {
    const { name, value } = e.target
    setContact(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
    console.log(contact)
  }


  function submitHander(e) {
    e.preventDefault()
    const { title, price, location, bedroom, bath, area, location_url } = contact
    const newContact = {
      title, price, location, bedroom, bath, area, location_url
    }
    console.log(newContact)
    axios.post("http://localhost:5000/api/contacts", newContact)
    // toast.success("Contact  student was added succesful")
    setContact({
      title: "",
      price: "",
      location: "",
      bedroom: '',
      bath: "",
      area: "",
      location_url: ""
    })
  }

  // delete 
  const deleteContact = (id) => {
    axios.delete("http://localhost:5000/api/delete/" + id)
  }

  // update
  const updateHandler = (id) => {
    setIsUpDate(true)
    setUpdateContact((prev) => {
      return {
        ...prev,
        id: id
      }
    })
  }

  const updateContactHandler = (id) => {
    axios.put("http://localhost:5000/api/put/" + id, updateContact)

  }

  const handleUpdate = (e) => {
    const { name, value } = e.target
    setUpdateContact(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }


  useEffect(() => {
    fetch('http://localhost:5000/api/get').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(result => setContacts(result))
      .catch(err => console.log(err))

  }, [contacts])

  return (
    <>


      {
        !isUpDate ?
          <div className='w-[95%] m-auto'>
            <h1 className='text-center text-4xl my-2'>Add data</h1>
            <form className=" py-[10px] w-full mx-auto my-2 flex  flex-wrap justify-between items-center">
              <div className="mb-3 w-[32%] ">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" value={contact.title} onChange={handleCHange} name='title' id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nomini kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" value={contact.price} id="price" onChange={handleCHange} name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Narxini kriting" required />
              </div>
              <div className="mb-3  w-[32%]">
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Location</label>
                <input type="text" value={contact.location} id="location" onChange={handleCHange} name='location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joylashgan joy nomi" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="bedroom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bedroom</label>
                <input type="number" value={contact.bedroom} id="bedroom" onChange={handleCHange} name='bedroom' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xonani soni kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="bath" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bathroom</label>
                <input type="number" value={contact.bath} id="bath" onChange={handleCHange} name='bath' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xonani soni kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="location_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Address link</label>
                <input type="text" value={contact.location_url} id="location_url" onChange={handleCHange} name='location_url' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manzil linkini kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">area</label>
                <input type="number" value={contact.area} id="area" onChange={handleCHange} name='area' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yer maydoni kiting" required />
              </div>


              <button onClick={submitHander} type="submit" className="text-white  mt-[20px] ml-[10px] mr-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[140px] h-[40px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div> :
          <div className='w-[95%] m-auto'>


            <h1 className='text-center text-4xl my-2'> Update data </h1>
            <form className=" py-[10px] w-full mx-auto  flex  flex-wrap justify-between items-center">
              <div className="mb-3 w-[32%] ">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" value={updateContact.title} onChange={handleUpdate} name='title' id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nomini kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" value={updateContact.price} id="price" onChange={handleUpdate} name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Narxini kriting" required />
              </div>
              <div className="mb-3  w-[32%]">
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Location</label>
                <input type="text" value={updateContact.location} id="location" onChange={handleUpdate} name='location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joylashgan joy nomi" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="bedroom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bedroom</label>
                <input type="number" value={updateContact.bedroom} id="bedroom" onChange={handleUpdate} name='bedroom' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xonani soni kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="bath" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bathroom</label>
                <input type="number" value={updateContact.bath} id="bath" onChange={handleUpdate} name='bath' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xonani soni kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="location_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Address link</label>
                <input type="text" value={updateContact.location_url} id="location_url" onChange={handleUpdate} name='location_url' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manzil linkini kiriting" required />
              </div>
              <div className="mb-3 w-[32%]">
                <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">area</label>
                <input type="number" value={updateContact.area} id="area" onChange={handleUpdate} name='area' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yer maydoni kiting" required />
              </div>


              <button onClick={() => updateContactHandler(updateContact.id)} type="submit" className="text-white  mt-[20px] ml-[10px] mr-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[140px] h-[40px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>
          </div>
      }




      <div className="relative overflow-x-auto my-2">
        <table className="w-[95%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope='col' className='px-2 py-3'>
                №
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                location
              </th>
              <th scope="col" className="px-6 py-3">
                area
              </th>
              <th scope="col" className="px-6 py-3">
                bedroom
              </th>
              <th scope="col" className="px-6 py-3">
                bathroom
              </th>
              <th scope="col" className="px-6 py-3">
                Address link
              </th>

              <th scope="col" class="px-6 py-3">
                price
              </th>
              <th scope="col" class="px-6 py-3">
                Change data
              </th>



            </tr>
          </thead>
          <tbody>
            {
              contacts?.map((item, index) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                  <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    {item.location}
                  </td>
                  <td className="px-6 py-4">
                    {item.area} m
                  </td>

                  <td className="px-6 py-4">
                    {item.bedroom}
                  </td>
                  <td className="px-6 py-4">
                    {item.bath}
                  </td>
                  <td className="px-6 py-4">
                    {item.location_url}
                  </td>
                  <td className="px-6 py-4">
                    {item.price}
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => updateHandler(item._id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                    <button onClick={() => deleteContact(item._id)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                </tr>


              ))
            }



          </tbody>
        </table>
      </div>
    </>

  )
}

export default App