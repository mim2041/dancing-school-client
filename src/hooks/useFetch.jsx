import { useEffect, useState } from 'react';

const useFetch = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    } ,[])
    console.log(classes);
};

export default useFetch;