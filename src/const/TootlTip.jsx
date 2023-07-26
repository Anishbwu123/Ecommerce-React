import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const TootlTip = (props) => {
console.log("props",props)
    return (
        <Tooltip title="Add" arrow>
          {/* <Button>Arrow</Button> */}
        </Tooltip>
      );
  
}

export default TootlTip
