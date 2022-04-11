import TestMath from "./Code Splitting/Bundling/TestMath";
import ImportBundleResult from "./Code Splitting/ImportBundling/ImpotBundleResult";
import ImportDefaultComponent from "./Code Splitting/Named Export/ImportDefaultComponent";
import ReactLaxy from "./Code Splitting/React Lazy/ReactLaxy";
import RouteBasedCodeSplit from "./Code Splitting/Route Based Code Spliting/RouteBasedCodeSplit";
import ClassComponent from "./Component and Props/ClassComponent";
import ExtractingComponent from "./Component and Props/ExtractingComponent";
import FuncComponent from "./Component and Props/FuncComponent";
import Containment from "./Composition Vs Inheritance/Containment";
import ConditionalRendering1 from "./Conditional Rendering/ConditionalRendering1";
import InLIneIfLogicalAndOperator from "./Conditional Rendering/InLIneIfLogicalAndOperator";
import MainElementVariable from "./Conditional Rendering/MainElementVariable";
import PreventComponentFromRendering from "./Conditional Rendering/PreventComponentFromRendering";
import API from "./Context/API";
import BeforeYouUseContext from "./Context/BeforeYouUseContext";
import ThemeButton from "./Context/Example/ThemeButton";
import UsingThemeContextAndButton from "./Context/Example/UsingThemeContextAndButton";
import HowtoUseTheContext from "./Context/HowtoUseTheContext";
import WhyToUseTheContext from "./Context/WhyToUseTheContext";
import FileInputTag from "./Form/FileInputTag";
import HandlingMultipleInput from "./Form/HandlingMultipleInput";
import InputForm from "./Form/InputForm";
import SelectOption from "./Form/SelectOption";
import TextArea from "./Form/TextArea";
import FRPARENTINPUT from "./ForwadingRef/FRPARENTINPUT";
import FragmentDemo from "./Fragments/FragmentDemo";
import Tables from "./Fragments/Tables";
import ArgumentPassingInEvenetHandlers from "./HandlingEvents/ArgumentPassingInEvenetHandlers";
import EventHandler from "./HandlingEvents/EventHandler";
import Toogle from "./HandlingEvents/Toogle";
import JSX from "./JSX Introduction/JSX";
import CalculateTemparature from "./Lifting State Ups Boiling Point Estimate/CalculateTemperature";
import BasicListCompoent from "./List and Keys/BasicListCompoent";
import Keys from "./List and Keys/Keys";
import RenderingMultipleComponent from "./List and Keys/RenderingMultipleComponent";
import UsingMap from "./List and Keys/UsingMap";
import OnClickShowAndRemove from "./React Advance/OnClickShowAndRemove";
import OnClickShowOption from "./React Advance/OnClickShowOption";
import SemanticHTML from "./React Advance/SemanticHTML";
import RenderElement from "./Rendering Element/RenderElement";
import Rendering from './State and LifeCycle/Rendering';

function App() {
    const message = ["React","Re: React","Re:Re"]
    const numbers = [1,2,3,4,5]
  return (
    <div className="App">

        {/* Indroducing JSX */}
        <JSX/>

        {/* Rendering the compoment */}
        <RenderElement/>

        {/* Component and props */}
        <FuncComponent name="Functional Compoent"/> 

        <ClassComponent name="Class Component"/>
        
        <ExtractingComponent/>
        <Rendering/>

        {/* Event Handlers */}
        <EventHandler/>
        <Toogle/>
        <ArgumentPassingInEvenetHandlers/>

        {/* Conditional Rendering */}
        <ConditionalRendering1 isLogged={false}/>
        <MainElementVariable/>

        {/* InlIn Logical If */}
        <InLIneIfLogicalAndOperator unreadMessage={message}/>

        {/* Prevent Component from rendering */}
        <PreventComponentFromRendering/>

        {/* List and Keys */}
        <UsingMap/>

        {/**Rendering Multiple Conponent */}
        {/* <RenderingMultipleComponent/> */} 

        {/* Basic List */}
        <BasicListCompoent numbers={numbers}/>

        {/* Keys */}
        <Keys/>

        {/* Input Form in Form */}
        <InputForm/>
        <TextArea/>
        <SelectOption/>
        <FileInputTag/>
        <HandlingMultipleInput/>

        {/* Calculating Boiling Point */}
        <CalculateTemparature/>
        <Containment/>

        {/* <SemanticHTML items={{term:1,description:"testing one"}}/> */}
        <OnClickShowOption/>
        <OnClickShowAndRemove/>

        {/* Bundling */}
        <TestMath/>

        {/* Import Bundling */}
        <ImportBundleResult/>

        {/* React lazy */}
        <ReactLaxy/>

        {/**Routing From One Page to Another */}
        <RouteBasedCodeSplit/>

        {/**IMporting Named Component by making it default */}
        <ImportDefaultComponent/>

        {/**Context */}
        <WhyToUseTheContext />
        <HowtoUseTheContext/>
        {/* <BeforeYouUseContext/> */} {/**Commented because it will throw an error since few component not defined*/}
        {/* <API/> */}


        {/* Example Context */}
        <UsingThemeContextAndButton/>

        {/**Forwarding Refs */}
        <FRPARENTINPUT/>

        {/* Fragments */}
        {/* Example 1 */}
        <FragmentDemo />

        {/* Example 2 */}
        <Tables/>

    </div>
  );
}

export default App;
