import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Dropdown, Form, Icon } from 'semantic-ui-react';

export default function Product () {
    const TimeOptions = 
    [
        {
            key: '3060',
            text: '30-60 MINUTOS',
            value: '0',
          },
          {
            key: '6090',
            text: '60-90 MINUTOS',
            value: '1',
          },
          {
            key: '90PLUS',
            text: '+90 MINUTOS',
            value: '2',
          },
    ]



    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask="9999"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>
                            <Form.Input
                                    fluid
                                    label='Descrição'
                                    width={16}
                                    
                                    >
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        maxLength="500"
                                    /> 
                                </Form.Input>


                                </Form.Group>




                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        maxLength="500"
                                    /> 
                                </Form.Input>
                                <Form.Dropdown
                                label='Escolha o tempo de entrega'
                                fluid
                                placeholder='Aperte para escolher'
                                selection
                                options={TimeOptions}
                                >

                                </Form.Dropdown>


                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
