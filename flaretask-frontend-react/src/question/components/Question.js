import React from "react";

const  Question = ({id="", tags="1", answered="2", view_count="3", answer_count="", creation_date="", user_id=""}) => (
  <tr>
    <td>{id}</td>
    <td>{tags.join(", ")}</td>
    <td>{answered}</td>
    <td>{view_count}</td>
    <td>{answer_count}</td>
    <td>{creation_date}</td>
    <td>{user_id}</td>
  </tr>
)

export default Question;