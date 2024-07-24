import React from 'react'
import { Container, Row } from 'reactstrap'
import WarningMode from './WarningMode'
import AutoCloseAlert from './AutoCloseAlert'
import MovieAlert from './MovieAlert'
import BasicAlert from './BasicAlert'
import TitleWithText from './TitleWithText'
import InfoAlert from './InfoAlert'
import WarningAlert from './WarningAlert'
import PikachuAlert from './PikachuAlert'
import QuestionAlert from './QuestionAlert'
import UserNameAlert from './UserNameAlert'
import SuccessMessage from './SuccessMessage'
import DangerAlert from './DangerAlert'

export default function SweetAlertContainer() {
  return (
    <Container fluid>
      <Row>
        <BasicAlert />
        <TitleWithText />
        <InfoAlert />
        <WarningAlert />
        <PikachuAlert />
        <QuestionAlert />
        <UserNameAlert />
        <SuccessMessage />
        <DangerAlert />
        <WarningMode />
        <AutoCloseAlert />
        <MovieAlert />
      </Row>
    </Container>
  )
}
