import React ,{useState} from "react";
import questions from "./data";
import data from './data';
import SingleQuestion from './Question';


class App extends React.Component {

  constructor(props){
    console.log('this is a constructor ');
  }

  static getDerivedstateFromProps(props,state){
    console.log('this is a  GDSFP ');
  }

  componentDidMount(){
    console.log('Did mount function');
  }
  



  componentWillUnmount(){
      console.log('unmount function');
  }

  render() {
    return (
      <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key = {question.id} {...question}/>
            })
          }
        </section>
      </div>
    </main>
    );
  }
}
//   function App() {
//   const [question,setQuestions] = useState(data);
//   return (
    // <main>
    //   <div className="container">
    //     <h3>questions and answers about login</h3>
    //     <section className="info">
    //       {
    //         questions.map((question) => {
    //           return <SingleQuestion key = {question.id} {...question}/>
    //         })
    //       }
    //     </section>
    //   </div>
    // </main>
//   );
// }

export default App;
