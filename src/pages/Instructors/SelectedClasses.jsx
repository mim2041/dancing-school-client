import { useEffect } from "react";
import { useState } from "react";
import SelectedClassTable from "./SelectedClassTable";
import Swal from "sweetalert2";


const SelectedClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://dancing-school-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    } ,[]);


    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://dancing-school-server.vercel.app/classes/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                              )
                              const remaining = classes.filter(cls => cls._id !== id)
                              setClasses(remaining);
                        }
                    })
            }

        })
    }
    return (
        <div className=" mx-12 ">
          
            {/* <div className="container mb-12">
                <div className="form-control">
                    <div className="input-group w-full">
                    <input type="text" id="search" name="search" placeholder="Search Toy by Name" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    </div>
                </div>
                </div> */}
            {classes ? <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    {
                        classes.map(cls => <SelectedClassTable
                            key={cls._id}
                            cls={cls}
                            handleDelete={handleDelete}
                        ></SelectedClassTable>
                        )
                    }
                
                
            </table> :
            <p className="text-center text-3xl text-red-700">Sorry!!! The Toy is not Available.</p>}
        </div>
    );
};

export default SelectedClasses;