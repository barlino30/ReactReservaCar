import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormHead({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                    <Form.Text className="text-muted">
                    Por favor ingrese su nombre completo con apellidos.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>

            </Form>
        </div>
    )
}

export default FormHead
