import {Component} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  InLineElement,
  InlineText,
  Button,
  Input,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = event => {
    this.setState({text: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InLineElement>
            {isEditable ? (
              <Input value={text} onChange={this.getText} type="text" />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}> Save </Button>
            ) : (
              <Button onClick={this.changeStatus}> Edit </Button>
            )}
          </InLineElement>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableTextInput
