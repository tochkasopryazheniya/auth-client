import './assets/styles/main.css';
import './assets/styles/util.css';
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";
import authStore from "./store/AuthStore";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";


function App() {
    const {checkIsAuth, isLoading} = authStore

    useEffect(() => {
        if(localStorage.getItem('token')) {
            checkIsAuth();
        }
    }, [])
  return (
    <>
        {isLoading ? (
            <h1>Загрузка...</h1>
        ) : <RoutesComponent/>}
    </>
  );
}

export default observer(App);
