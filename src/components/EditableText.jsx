import React from 'react'
import { ImPlus, ImPencil } from "react-icons/im";
import { Box, Heading, Text, Icon, IconButton, Flex } from "@chakra-ui/core";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core"
import { ButtonGroup } from "@chakra-ui/core"
import {CheckIcon, CloseIcon, EditIcon} from '@chakra-ui/icons'

function EditableText(props) {
    /* Here's a custom control */
    function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
      return isEditing ? (
        <ButtonGroup justifyContent="left" size="sm">
          <IconButton icon={<CheckIcon />} onClick={onSubmit} color='brandDark' boxSize={4} bg='transparent'/>
          <IconButton icon={<CloseIcon />} onClick={onCancel} color='brandDark' boxSize={4} bg='transparent'/>
        </ButtonGroup>
      ) : (
        <Flex justifyContent="left">
          <IconButton size="sm" icon={<ImPencil />} onClick={onEdit} color='brandDark' boxSize={4} bg='transparent'/>
        </Flex>
      )
    }
  
    return (
      <Editable
        textAlign="justify"
        defaultValue={props.text}
        fontSize="md"
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        {(props) => (
          <>
            <EditablePreview />
            <EditableInput/>
            <EditableControls {...props} />
          </>
        )}
      </Editable>
    )
  }

  export default EditableText

  
{/*}
const EditableText = (props) => {
    const [] = use


    return (
        <Box>
            <Text >{props.text}</Text>
            <Flex marginTop='10px'>
                <Icon as={ImPencil} color='brandDark' boxSize={4}/>
                <Box marginRight='10px'/>
                <Text color='brandDark' fontSize='xs'>Editer</Text>
            </Flex>
        </Box>
    )
}

export default EditableText
*/}