import Stories from "./Stories"
import SideBar from "./SideBar"
import Posts from "./Posts"
import Greet from "./Greet"

export default function Corpo() {
    return(
        <div class="corpo">
                <div class="esquerda">

                    <Stories/>
        
                    <Posts/>
            
                </div>

                <Greet/>

                <SideBar/>
        
                <div class="fundo-mobile">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
    )
}