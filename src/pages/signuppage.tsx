import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonLabel,
    IonPage,
    IonToolbar
  } from '@ionic/react';
  import { eye, person } from 'ionicons/icons';
  import React,{ useState } from 'react';
  const LoginPage: React.FC = ({ history }: any) => {

  return (

    <IonPage className='ion-hide-sm-{dir}'>
      <IonContent className='content'>
        <IonHeader>
          <IonToolbar>
            <IonLabel>Ionic</IonLabel>
          </IonToolbar>
        </IonHeader>
        <IonCard className="card">
          <IonCardHeader className='ion-text-center header'>
          </IonCardHeader>
          <IonCardContent className='ion-text-center'>
            <IonInput className="input1 ion-text-left"type="text" placeholder='Username or email address'></IonInput>
            <span className="eye"><IonIcon size="small" icon={person}></IonIcon></span>
            <IonInput className="input2 ion-text-left" type="text" placeholder='name'></IonInput>
            <IonInput className="input2 ion-text-left" type="password" placeholder='Password'></IonInput>
            <span className="eye"><IonIcon size="small" icon={eye}></IonIcon></span>
            <IonButton className=' button ion-text-capitalize' color="purple" shape='round'><IonLabel className='login'>Login</IonLabel></IonButton>
            <br />
            {/* <IonItem routerLink="/home">
            <IonButton color="purple" shape='round'>Login</IonButton>
          </IonItem> */}
            <br />
            <IonLabel>Forgot password?</IonLabel>
            <br />
            {/* <IonButton color='primary' onClick={getData}>Get Data</IonButton> */}
            <br />
            <br />
            <IonLabel className='label'>New to Indigo? <a href="#">Register here</a></IonLabel>
          </IonCardContent>
        </IonCard>
        {/* <HomePage /> */}
      </IonContent>
    </IonPage>
  );
        }