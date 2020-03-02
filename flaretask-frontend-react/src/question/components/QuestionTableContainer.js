import QuestionTable from "./QuestionTable";
import { connect } from "react-redux";

const mapStateProps = (state) => ({
  questions: state.questions.items
})

export default connect(
  mapStateProps
)(QuestionTable)