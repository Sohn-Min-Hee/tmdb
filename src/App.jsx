// import axios from 'axios';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import Drama from './routes/Drama'
import Comedy from './routes/Comedy'
import Footer from './components/Footer'
import QuickBtn from './components/QuickBtn'
import RecommendDetail from './components/RecommendDetail'

import './App.css'
// import { useEffect, useState} from 'react';

function App() {

    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Drama" element={<Drama/>}/>
                <Route path="/Comedy" element={<Comedy/>}/>
                <Route path="/RecommendDetail/:id" element={<RecommendDetail/>}/>
            </Routes>
            <Footer/>
            <QuickBtn/>
        </>
    )










//     const [data,setData]=useState([])
  
//     useEffect(() =>{
//         // 인기 영화 목록을 가져오는 엔드포인트로 변경 (&language 오타도 수정)
//         axios.get('https://api.themoviedb.org/3/movie/popular?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko')
//             .then((response) => { 
//                 console.log(response.data)
//                 setData(response.data.results)
//             })
//             .catch( error => {console.error(error)}
//             )
//     }, [])

//   return (
//     <>
//     {
//         data.map((a) => {
//             return(
//                 <>
//                     <p>{a.title}</p>
//                     <div className="img">
//                         <img src={`https://image.tmdb.org/t/p/w500${a.backdrop_path}`} alt={a.title} />
//                     </div>
//                     <p>{a.release_date}</p>
//                 </>
//             )
//         })
//     }
//     </>
//   )
}

export default App
