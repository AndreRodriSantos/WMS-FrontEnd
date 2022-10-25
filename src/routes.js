import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

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

const history = createBrowserHistory()

export {history}

export default function Routes() {
    return(
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/Loading' exact component={Loading}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Turmas' component={Turmas}></Route>
                <Route path='/Membros' component={ListaMembros}></Route>
                <Route path='/Home' component={Home}></Route>
                <Route path='/CadastroAlunos' component={CadastroAlunos} ></Route>
                <Route path='/CadastroProfessores' component={CadastroProfessores} ></Route>
                <Route path='/CadastroTurma' component={CadastroTurma}></Route>
                <Route path='/Pedido' component={Pedido}></Route>
                <Route path='/VerificarPedidos' component={VerificarPedidos}></Route>
                <Route path='/CadastroFornecedores' component={CadastroFornecedor} ></Route>
                <Route path='/CadastroProduto' component={CadastroProduto}></Route>
            </Switch>
        </Router>
    );
}