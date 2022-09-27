import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import CadastroAlunos from './Pages/CadastroAlunos';
import CadastroProfessores from './Pages/CadastroProfessores';
import CadastroTurma from './Pages/CadastroTurma';
import CadastroFornecedor from './Pages/CadastroFornecedor';
import CadastroProduto from './Pages/CadastroProduto';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Pedido from './Pages/Pedido';

const history = createBrowserHistory()


export default function Routes() {
    return(
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Home' component={Home}></Route>
                <Route path='/CadastroAlunos' component={CadastroAlunos} ></Route>
                <Route path='/CadastroProfessores' component={CadastroProfessores} ></Route>
                <Route path='/CadastroTurma' component={CadastroTurma}></Route>
                <Route path='/Pedido' component={Pedido}></Route>
                <Route path='/CadastroFornecedores' component={CadastroFornecedor} ></Route>
                <Route path='/CadastroProduto' component={CadastroProduto}></Route>
            </Switch>
        </Router>
    );
}