import React, { useState } from 'react'
import { Icon } from "@chakra-ui/core"

import { BsStarFill } from "react-icons/bs";


const Favorite = () => {
    const [starred, setStarred] = useState(false);
  
    function handleClick() {
      setStarred(!starred);
    }
  
    return <Icon as={BsStarFill} boxSize={6} color={starred ? 'brand' : 'brandMiddle'} onClick={handleClick} />
  }

  export default Favorite