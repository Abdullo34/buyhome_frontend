import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

function ShowProduct() {
    const [contact, setContact] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`)
            .then((response) => {
                setContact(response.data)

            })
            .catch(err => {
                console.log(err)
            })


    }, [])

    console.log(contact)

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl'></h1>

            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500"></span>
                    <span>{contact._id}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500"></span>
                    <span>{contact.title}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500"></span>
                    <span>{contact.price}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500"></span>
                    <span>{contact.bathroom}</span>
                </div>
            </div>

        </div>
    )
}

export default ShowProduct