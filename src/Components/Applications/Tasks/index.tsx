import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { fetchTasks } from '../../../ReduxToolkit/Reducers/TasksReducer';
import { AppDispatch } from '../../../ReduxToolkit/Store';
import TaskLeftAside from './TaskLeftAside';
import TaskRightAside from './TaskRightAside';

export default function TasksContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const [activeTab, setActiveTab] = useState(1);
    const activeToggle = (tab: number) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <Container fluid>
            <div className="email-wrap bookmark-wrap">
                <Row>
                    <TaskLeftAside activeToggle={activeToggle} activeTab={activeTab} />
                    <TaskRightAside activeTab={activeTab} />
                </Row>
            </div>
        </Container>
    )
}
