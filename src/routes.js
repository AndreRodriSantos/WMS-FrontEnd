import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import CadastroAlunos from './Pages/CadastroAlunos';
import CadastroProfessores from './Pages/CadastroProfessores';
import CadastroTurma from './Pages/CadastroTurma';
import CadastroFornecedor from './Pages/CadastroFornecedor';
import CadastroProduto from './Pages/CadastroProduto';
import Login from './Pages/Login';
import Turmas from './Pages/Turmas'
import Home from './Pages/Home';
import Pedido from './Pages/Pedido';
import VerificarPedidos from './Pages/VerificarPedidos';
import ListaMembros from './Pages/ListaMembros';
import Loading from './Components/Loading'
import Picking from './Pages/Picking';
import { Alert, erro } from './Components/Avisos/Alert';
import CadastroEnderecamento from './Pages/CadastroEnderecamento';
import { isAuthenticated, isAuthenticatedPedido, isAuthenticatedProfessor, isAuthenticatedTurma } from './Services/auth';

const history = createBrowserHistory()

export { history }

const PrivateRouteProfessor = function (props) {
    isAuthenticatedProfessor().then(response => {
        if (response === true) {
            return <Route {...props} />
        } else {
            return window.location.href = "/Home"
        }
    })
}

const PrivateRoute = (props) => {
    if (isAuthenticated() == true) {
        return <Route {...props} />
    } else {
        return window.location.href = "/Login"
    }
}

const PrivateRouteTurma = (props) => {
    if (isAuthenticatedTurma() == true) {
        return <Route {...props} />
    } else {
        return window.location.href = "/Home"
    }
}

const PrivateRoutePedido = (props) => {
    if (isAuthenticatedPedido() == true) {
        return <Route {...props} />
    } else {
        return window.location.href = "/Home"
    }
}

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/Loading' exact component={Loading}></Route>
                <Route path='/Login' component={Login}></Route>
                <PrivateRouteProfessor path='/Turmas' component={Turmas}></PrivateRouteProfessor>
                <PrivateRouteTurma path='/Membros' component={ListaMembros}></PrivateRouteTurma>
                <PrivateRoute path='/Home' component={Home}></PrivateRoute>
                <Route path='/CadastroAlunos' component={CadastroAlunos} ></Route>
                <Route path='/CadastroProfessores' component={CadastroProfessores} ></Route>
                <Route path='/CadastroTurma' component={CadastroTurma}></Route>
                <PrivateRoutePedido path='/Pedido' component={Pedido}></PrivateRoutePedido>
                <PrivateRoute path='/VerificarPedidos' component={VerificarPedidos}></PrivateRoute>
                <PrivateRoute path='/CadastroFornecedores' component={CadastroFornecedor} ></PrivateRoute>
                <PrivateRoute path='/CadastroEnderecamento' component={CadastroEnderecamento} ></PrivateRoute>
                <PrivateRoute path='/CadastroProduto' component={CadastroProduto}></PrivateRoute>
                <PrivateRoute path='/Picking' component={Picking}></PrivateRoute>
                <Route path='/alert' component={Alert}></Route>
            </Switch>
        </Router>
    );
}