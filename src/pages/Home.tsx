import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonLabel,
  IonList,
  IonItem,
  IonCol,

} from '@ionic/react';
import React, { FC, useState } from 'react';
import axios from 'axios';
import './Home.css'; 
//import './loginpage';
const HomePage: React.FC = () => {
  
  const [ listItems, setListitems] = useState<any>([]);

  const getData = () => {
    let userData = axios.get('https://api.github.com/users/timmywheels/repos')
      .then(res => {
        console.log(res)
        return res.data;
      })
      return userData;
    }

  React.useEffect(() => {
  getData().then((data: any)=>{
    setListitems(data)
    // console.log(listItems)
  })
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> List </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList color="primary" className='list'>
         
        </IonList>
      </IonContent>
    </IonPage>
    );

}

export default HomePage;
