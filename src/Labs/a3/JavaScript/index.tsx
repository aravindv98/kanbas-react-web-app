import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import Displayadd from "./functions/ES5Functions";
import Arrowfunction from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParanthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import PathParameters from "../routing/PathParameters";
function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <Displayadd/>
         <Arrowfunction/>
         <ImpliedReturn/>
         <FunctionParanthesisAndParameters/>
         <WorkingWithArrays/>
         <ArrayIndexAndLength/>
         <AddingAndRemovingDataToFromArrays/>
         <ForLoops/>
         <MapFunction/>
         <JsonStringify/>
        <FindFunction/>
        <FilterFunction/>
        <TemplateLiterals/>
        <House/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
      </div>
   );
}
export default JavaScript