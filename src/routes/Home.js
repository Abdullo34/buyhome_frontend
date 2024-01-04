import axios from "axios"
import Spinner from '../components/Spinner'
import { useEffect, useState } from "react"
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Home() {
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

  // DELETE
  const deleteContact = (id) => {
    const agree = window.confirm(`Bu product o'chirishga ishonchiz komilmi`)
    if (agree) {
      axios.delete("http://localhost:5000/api/delete/" + id)
    }
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
    <div className=" w-full p-4">
      <div className="border border-black w-full flex justify-end ">
        <Link to={`/api/create`}>
          <MdOutlineAddBox className="text-black" size={40} />
        </Link>
      </div>
      <table className="w-[92%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                  <div className="flex justify-center  gap-x-4">
                    <Link to={`/api/details/${item._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/api/put/${item._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link onClick={() => deleteContact(item._id)} >
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>


            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Home