import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './css/dash.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="page-all">
                <MenuLateral/>

                <div className="main-dash">
                    <div className="titulo-dash">
                        <p id="titulo-form">Bem-Vindo ao Knox, <span id="name">Admin</span></p>
                    </div>

                    <div id="alls">
                        <div>
                            <p>Eventos de Hoje:</p>
                            <div>
                                <Card>
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                        Hoje
                                      </Typography>

                                      <Typography component="p">
                                        Audiência
                                      </Typography>

                                      <Typography component="p">
                                        Local: Fórum Criminal da Barra Funda
                                      </Typography>

                                      <Typography component="p">
                                        Telefone: (11) 1234-56789
                                      </Typography>

                                      <Typography component="p">
                                        Participantes: Julia Ribeiro
                                      </Typography>

                                    </CardContent>
                                    
                                </Card>
                                <br/>
                                <Card>
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                        Hoje
                                      </Typography>

                                      <Typography component="p">
                                        Almoço com Sócios
                                      </Typography>

                                      <Typography component="p">
                                        Local: Coco Bambu Anhembi
                                      </Typography>

                                      <Typography component="p">
                                        Telefone: (11) 1234-56789
                                      </Typography>

                                      <Typography component="p">
                                        Participantes: Julia Ribeiro
                                      </Typography>
                                    </CardContent>
                                    
                                </Card>
                            </div>

                           


                        </div>

                        <div>
                            <p>Todos os Eventos do Mês:</p>

                            <div>
                                <Card >
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                        25 de Maio de 2019
                                      </Typography>

                                      <Typography component="p">
                                        Reunião com novos Advogados
                                      </Typography>

                                      <Typography component="p">
                                        Local: Escritório
                                      </Typography>

                                      <Typography component="p">
                                        Telefone: (11) 1234-56789
                                      </Typography>

                                      <Typography component="p">
                                        Participantes: Julia Ribeiro
                                      </Typography>

                                    </CardContent>
                                   
                                </Card>
                                <br/>
                                <Card >
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                        31 de Maio de 2019
                                      </Typography>

                                      <Typography component="p">
                                        Audiencia
                                      </Typography>

                                      <Typography component="p">
                                        Local: Forum Criminal da Barra Funda
                                      </Typography>

                                      <Typography component="p">
                                        Telefone: (11) 1234-56789
                                      </Typography>

                                      <Typography component="p">
                                        Participantes: Julia Ribeiro
                                      </Typography>

                                    </CardContent>
                                   
                                </Card>

                            </div>                            
                        </div>

                    </div>

                   
                    <div id="fab-add">
                        <Fab color="primary" aria-label="Add"  onClick={this.handlePage}>
                          <Icon>add</Icon>
                        </Fab>
                    </div>
                      
                </div>
            </div>
        );
    }
}

export default Dashboard;