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
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

const history = createBrowserHistory()

export { history }

const PrivateRouteProfessor = () => {
    if (isAuthenticatedProfessor() == true) {
        return <Outlet />
    } else {
        erro("É preciso estar logado como um Professor para acessar aquela página, faça seu login e tente novamente")
        return <Navigate to="/Login" />
    }
}


const PrivateRoute = () => {
    if (isAuthenticated() == true) {
        return <Outlet />
    } else {
        erro("É preciso estar logado para acessar aquela página, faça seu login e tente novamente")
        return <Navigate to="/Login" />
    }
}

export default function Rotas() {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Loading' exact element={<Login />} />

                <Route element={<PrivateRoute />}>
                    <Route element={<Home />} path='/Home'></Route>
                    <Route path='/VerificarPedidos' element={<VerificarPedidos />}></Route>
                    <Route path='/CadastroFornecedores' element={<CadastroFornecedor />} ></Route>
                    <Route path='/CadastroEnderecamento' element={<CadastroEnderecamento />} ></Route>
                    <Route path='/CadastroProduto' element={<CadastroProduto />}></Route>
                    <Route path='/Membros' element={<ListaMembros />}></Route>
                    <Route path='/Pedido' element={<Pedido />}></Route>
                    <Route path='/CadastroAlunos' element={<CadastroAlunos />}></Route>
                    <Route path='/Picking' element={<Picking />}></Route>
                </Route>

                <Route element={<PrivateRouteProfessor />}>
                    <Route path='/CadastroProfessores' component={<CadastroProfessores />} ></Route>
                    <Route path='/CadastroTurma' element={<CadastroTurma />}></Route>
                    <Route path='/Turmas' element={<Turmas />}></Route>
                </Route>

                <Route path='*' exact element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}