import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { fetchTodo } from '../../../ReduxToolkit/Reducers/TodoReducer';
import { AppDispatch } from '../../../ReduxToolkit/Store';
import LeftTodo from './LeftTodo';
import RightTodo from './RightTodo';

export default function ToDoContainer() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    return (
        <Container fluid className="email-wrap bookmark-wrap todo-wrap">
            <Row>
                <LeftTodo />
                <RightTodo />
            </Row>
        </Container>
    )
}
