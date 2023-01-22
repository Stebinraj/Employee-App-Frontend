import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Header, Segment } from 'semantic-ui-react';

const EmployeeForm = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed navbar-expand-md mb-3">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">Employee React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body text-center">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/employee'}>Employee</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header color='teal' textAlign='center'>
                        <h2>Employee Form</h2>
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' type='text' />
                            <Form.Input fluid icon='universal access' iconPosition='left' placeholder='Designation' type='text' />
                            <Form.Input fluid icon='location arrow' iconPosition='left' placeholder='Location' type='text' />
                            <Form.Input fluid icon='rupee sign' iconPosition='left' placeholder='Salary' type='number' />
                            <button className="ui teal button" style={{ width: '100%' }}>Submit</button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default EmployeeForm