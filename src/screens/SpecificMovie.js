import React, {useEffect,useState} from 'react';
import {gethMovieDetail} from '../api/movie'
import { useParams } from 'react-router-dom';

const SpecificMovie = () => {

    const params = useParams()
    

    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);


    useEffect(()=> {
        gethMovieDetail(params.id).then((res) => {
            setDetail(res.data);
            });

    },[])
    console.log(detail);

  return <div>{detail.title}</div>;
};

export default SpecificMovie;
