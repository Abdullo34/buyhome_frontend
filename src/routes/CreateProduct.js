import { useState } from "react"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate } from "react-router-dom"





function CreateProduct() {
  const [contact, setContact] = useState([{
    title: "",
    price: "",
    location: "",
    bedroom: '',
    bath: "",
    area: "",
    location_url: "",
  }])

  const navigate = useNavigate()

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
      title, price, location, bedroom, bath, area, location_url, 
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
      location_url: "",
    })
    
    setTimeout(() => {
      navigate('/')
      
    }, 2000);
  }


  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Create Product</h1>
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
    </div>
  )
}

export default CreateProduct