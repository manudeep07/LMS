import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
  const {path} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(path){
      const timer = setTimeout(()=>{
        navigate(`/${path}`)
      },5000)
      return ()=> clearTimeout(timer)
    }
  })
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-4 border-gray-300 border-t-blue-600 aspect-square w-12 rounded-full animate-spin">
      </div>
    </div>
  );
};

export default Loading;
