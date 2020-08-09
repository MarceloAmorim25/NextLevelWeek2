import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import Landing from '../src/pages/Landing'
import Login from '../src/pages/Login'
import ForgotPassword from '../src/pages/ForgotPassword'
import Register from '../src/pages/Register'
import TeacherProfile from '../src/pages/TeacherProfile'
import RegisterSuccess from './pages/RegisterSuccess'
import RedefinitionSuccess from '../src/pages/RedefinitionSuccess'

const Routes = () => {
    return(

        <BrowserRouter>

            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TeacherList} exact/>
            <Route path="/give-classes" component={TeacherForm} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/password-recovery" component={ForgotPassword} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/profile" component={TeacherProfile} exact/>
            <Route path="/register-success" component={RegisterSuccess} exact/>
            <Route path="/redefinition-success" component={RedefinitionSuccess} exact/>
            
        </BrowserRouter>
        
    );
}

export default Routes