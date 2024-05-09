/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './items.json'
import './index.css'



export default function Items() {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function changeCpage(id) {
      setCurrentPage(id)
    }
    function prePage(){
      if (currentPage !== 1){
        setCurrentPage(currentPage - 1)
      }
    }
    function nextPage(){
      if (currentPage !== npage){
        setCurrentPage(currentPage + 1)
      }
    }
    
  return (
    <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className=' text-center'><h2 className="text-2xl font-bold text-gray-600 ">By Mandela Inc.</h2></div>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
       <div className=' text-center  py-4'><h2 className="text-2xl font-bold text-gray-900 underline">Mandela's Random Pagination </h2></div>

        <div className="relative overflow-hidden mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7 lg:space-y-0">
          {records.map((record) => (
            <div key={record.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={record.imageSrc}
                  alt={record.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={record.href}>
                  <span className="absolute inset-0" />
                  {record.name}
                  {record.price}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{record.description}</p>
              <p className="text-base font-semibold text-gray-900">{record.price}</p>
            </div>
          ))}
        </div>

        <div>
        <nav>
        <ul className='pagination'>
        
          <a  className ='page-link cursor-pointer'
          onClick={prePage}>
            Prev
          </a>
        
        {
          numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a   className='page-link cursor-pointer'
              onClick={() => changeCpage(n)}>{n}</a>
            </li>
          ))
        }
        
          <a  className='page-link cursor-pointer'
          onClick={nextPage}>Next
          </a>
        
      </ul>
    </nav>
      </div>
      </div>
      <div className='text-center shadow-lg w-48 rounded-3 h-25 hover:scale-110 pb-4 byMandzz'><h5>By Mandzz.</h5></div> 
    </div>  
  </div>
  )
}
