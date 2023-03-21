import React from 'react'
import Banner from '../Banner/Banner'
import {  } from 'react-icons/md'
import MainFooter from '../MainFooter/MainFooter'
import { Link } from 'react-router-dom'

const blogPost = [
    {
        id: '1',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
    {
        id: '2',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
    {
        id: '3',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
    {
        id: '4',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
    {
        id: '5',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
    {
        id: '6',
        imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Quick Brown Fox',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto, natus aliquam delectus enim incidunt reprehenderit quod totam ad veritatis.'
    },
]

const Blog = () => {

  return (
    <div className='bg-[#E1E7F9]'>
        <Banner title1='Blog' title2='Latest Post' />

        <div className='flex flex-wrap justify-center items-center mt-8'>
            {blogPost.map((item, index) => (
                <div key={index} className='relative flex flex-col h-[500px] w-[443px] font-alice justify-center items-center m-8 '>
                    <img src={item.imgUrl} alt="blog-one" className='h-full w-full object-cover rounded-2xl' />
                    <div className='absolute flex flex-col space-y-4 px-6 justify-center items-center'>
                        <h1 className='text-3xl text-white'>
                            {item.title}
                        </h1>
                        <p className='text-lg text-white/95 text-center'>{item.description}</p>
                        <button className='text-[#3F1E85] px-6 py-2 rounded-full text-sm bg-white shadow-lg font-bold'><Link to={`/blog/${item.id}`}>Read More</Link></button>
                    </div>
                </div>
            ))}
        </div>

        <MainFooter />
    </div>
  )
}

export default Blog