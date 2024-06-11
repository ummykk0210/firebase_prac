// Firebase 설정 객체 : 내 firebase에 대한 정보
// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAFgDZ5Ct-yNwqShdjq6uRVuQgZwTrfUbE",
    authDomain: "fir-test-7cb64.firebaseapp.com",
    databaseURL: "https://fir-test-7cb64-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-test-7cb64",
    storageBucket: "fir-test-7cb64.appspot.com",
    messagingSenderId: "870865534026",
    appId: "1:870865534026:web:9cb17e5d81dd04a8d7bab3"
  };
  // Firebase 앱 초기화
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  //Firebase의 실시간 데이터 베이스
  const database = firebase.database();

//   Firebase의 데이터 쓰기

  const writeUserData = (userId, name, email) => {
    firebase.database().ref('users/' + userId).set({
        name: name,
        email: email
    })
}
// firebase에 있는 데이터 읽기
const readUserData = (userId) => {
    const userRef = firebase.database().ref('users/'); 
                    //'users/'라는 경로의 참조를 가져옴
    userRef.once('value').then((res) => {
        const data = res.val()
        console.log(data)
    })
}



/* Misson ! 
1. addUserBtn 라는 id를 가진 버튼을 클릭 시
2. 사용자가 input에 입력한 세 개의 데이터를 각각 console 창에 찍는다.
3. 02 JS 실전 폴더 > ex04 참고
*/

let btn = document.getElementById('addUserBtn');
let frm = document.frm.elements;


addUserBtn.addEventListener('click', ()=>{

        console.log(frm[0].value, frm[2].value, frm[1].value)   
        writeUserData(frm[0].value, frm[2].value, frm[1].value);
    
})

let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click', () => {
    console.log('유저 가져오기 click')
    readUserData('asdf');
})