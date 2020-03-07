import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCUgC1xGo7KDIESLb2W8Gu0NyuVx1kWQWw",
  authDomain: "nba-full-aa091.firebaseapp.com",
  databaseURL: "https://nba-full-aa091.firebaseio.com",
  projectId: "nba-full-aa091",
  storageBucket: "nba-full-aa091.appspot.com",
  messagingSenderId: "962931594089",
  appId: "1:962931594089:web:febe56def412589450e3f8"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
      snapshot.forEach((childSnapshot)=>{
          data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
          })
      })
      return data;
}

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}