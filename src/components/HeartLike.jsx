import React, { useState } from 'react'
import { Icon } from "@chakra-ui/core"

import { BsFillHeartFill } from "react-icons/bs";


const HeartLike = (props) => {
    const [starred, setStarred] = useState(false);
  
    function handleClick() {
      setStarred(!starred);
    }
  
    return <Icon as={BsFillHeartFill} boxSize={props.boxSize} color={starred ? 'red.500' : 'brandDark'} onClick={handleClick} />
  }

  export default HeartLike