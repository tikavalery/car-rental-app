import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

function Home(){
    const {cars} = useSelector(state => state.carReducer)
return(
    <div>
        <DefaultLayout>
          <h1>
            Home Page
        </h1>
        <h1>The length of cars array is {cars.length}</h1>
        </DefaultLayout>
     
    </div>
)
}
export default Home;