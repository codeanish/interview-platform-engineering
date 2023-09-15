import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Question from './Components/question';
import Answer from './Components/answer';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Question/>} />
            <Route path="/answer" element={<Answer/>} />
        </Routes>
        </BrowserRouter>
    );
    }
export default Router;