import React from 'react';
import PageDefalt from '../../../components/PageDefalt';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <>
            <PageDefalt>
            <h1>Cadastro de video</h1>


            <Link to="/cadastro/categoria">Cadastro de categoria</Link>

           

            </PageDefalt>
            
        </>
    )
  }

  export default CadastroVideo;