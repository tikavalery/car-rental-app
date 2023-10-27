import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsActions";
import { Button } from 'antd';

function Home(){
    const {cars} = useSelector(state => state.carReducer)
const dispatch = useDispatch()

useEffect(() =>{
 dispatch(getAllCars())
},[])
return(
    <div>
        <DefaultLayout>
          <h1>
            Home Page
            <Button type="primary">Primary Button</Button>
        </h1>
        <h1>The length of cars array is {cars.length}</h1>
        </DefaultLayout>
     
    </div>
)
}
export default Home;