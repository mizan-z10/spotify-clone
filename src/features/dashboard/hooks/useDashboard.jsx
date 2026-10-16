import { useDispatch } from "react-redux";


export let useDashboard = () => {
  const dispatch = useDispatch();

  return{
    dispatch,
  }
}