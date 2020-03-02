import React from "react";
import Question from "./Question";


const QuestionTable = ({questions}) => (
  <table>
    <thead>
      <td>ID</td>
      <td>TAGS</td>
      <td>ANSWERED</td>
      <td>VIEW COUNT</td>
      <td>ANSWER COUNT</td>
      <td>CREATION DATE</td>
      <td>USER ID</td>
    </thead>
    <tbody>
    {questions.map((question, index) => (
      <Question key={index} {...question}/>
    ))}
    </tbody>

  </table>
)

export default QuestionTable;
