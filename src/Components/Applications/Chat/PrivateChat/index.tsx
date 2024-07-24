/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { ChatApi, ChatContactApi, ChatMembersApi } from '../../../../api';
import { setAllMembers, setChats, setContacts } from '../../../../ReduxToolkit/Reducers/ChatReducer';
import LeftSidebarChat from '../Common/LeftSidebarChat';
import PrivateChatContent from './PrivateChatContent';

export default function PrivateChatContainer() {
    const dispatch = useDispatch();
    const fetchChatApiData = async () => {
        try {
            const response = await axios.get(ChatApi);
            dispatch(setChats(response.data.data));
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    const fetchChatMemberApiData = async () => {
        try {
            const response = await axios.get(ChatMembersApi);
            dispatch(setAllMembers(response.data));
            return response.data;
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    const fetchChatContactApiData = async () => {
        try {
            const response = await axios.get(ChatContactApi);
            dispatch(setContacts(response.data));
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    useEffect(() => {
        fetchChatApiData();
        fetchChatMemberApiData();
        fetchChatContactApiData();
    }, []);
    return (
        <Container fluid>
            <Row className='g-0'>
                <LeftSidebarChat />
                <PrivateChatContent/>
            </Row>
        </Container>
    )
}
