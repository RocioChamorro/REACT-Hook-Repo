import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  getFetch = () => {
    setState({
      ...state,
      isLoading: true,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            isLoading: false,
            hasError: null,
            data,
          });
        } else {
          console.log("setState no se llamó")
        }
      });
  }

  useEffect(() => {
    console.log("nieto")
    return () => {
      //aquí se ejecuta cuando el componente se desmonta
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
   getFetch();
  }, [url]);
  return state;
};

