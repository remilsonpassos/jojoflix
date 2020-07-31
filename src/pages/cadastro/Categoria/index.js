import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefalt';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const [categorias, setCategorias] = useState([])
    const [Values, setValues]  = useState(valoresIniciais);

    function setValue(chave, valor){
            setValues({
                ...Values,
                [chave]: valor,
            })
    }

    function handleChange(infosDoEvento){
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
          );
    }

    return(

        <PageDefault>

    <h1>Cadastro de Categorias: {Values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    Values
                ])
                setValues(valoresIniciais)
            }}>
            
            <FormField 
                label="Nome da categoria"
                type="text"
                name="nome"
                value={Values.nome}
                onChange={handleChange}
            
            />

            <FormField 
                label="Descricao da categoria: "
                type="textarea"
                name="descricao"
                value={Values.descricao}
                onChange={handleChange}
            
            />

            <FormField 
                label="cor da categoria"
                type="color"
                name="cor"
                value={Values.cor}
                onChange={handleChange}
            
            />

           {/*  <div>
                <label>
                    Descrição:
                     <textarea
                        type="text"
                        value={Values.descricao}
                        name="descricao"
                        onChange={HandleChange}
                />
                </label>
            </div> */}

            {/* <div>
                <label>
                    Nome da Categoria:
                     <input
                        type="color"
                        value={Values.cor}
                        name="cor"
                        onChange={HandleChange}
                />
                </label>
            </div> */}
                    

                <button>
                Cadastrar
                </button>
            </form>

            

            <ul>
                {categorias.map((categorias, indice) => {
                    return (
                        <li key={`${categorias} ${indice}`}>
                            {categorias.nome}
                            {categorias.descricao}
                            {categorias.cor}
                        </li>
                    )
                })}
            </ul>

        </PageDefault>

      


    )
}

export default CadastroCategoria;