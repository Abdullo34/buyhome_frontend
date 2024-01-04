import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function EditProduct() {
  const { id } = useParams()

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

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`)
      .then((response) => {
        setUpdateContact(response.data)

      })
      .catch(err => {
        console.log(err)
      })


  }, [id])
  console.log(updateContact)

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




  return (
    <div className="p-4" >
      <BackButton />
      <h1 className="text-3xl  my-4">Edit Product</h1>

      <div className="w-full">
        <form onSubmit={() => updateContactHandler(updateContact._id)} className=" py-[10px] w-[92%] mx-auto  flex  flex-wrap justify-between items-center">
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


          <button onClick={handleUpdate} type="submit" className="text-white  mt-[20px] ml-[10px] mr-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[140px] h-[40px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </form>
      </div>

    </div>
  )
}

export default EditProduct